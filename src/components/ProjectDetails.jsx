import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const ProjectDetails = () => {
  const { id } = useParams();
  const [current_project, setCurrentProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    fetch("/pilot_projects.json") // Ensure this file is served correctly in your public folder
      .then((response) => response.json())
      .then((data) => {
        const project = data.find((project) => project.id === parseInt(id));
        if (project) {
          setCurrentProject({
            id: project.id,
            title: project.title,
            main_image: project.main_image,
            description: project.description,
            short_description: project.short_description,
            status: project.status,
            location: project.location,
            link: project.link,
            before_image: project.before_image,
            after_image: project.after_image,
            images: project.images || [],
            progress_text: project.progress_text,
            impact_text: project.impact_text,
            design_text: project.design_text,
          });
        } else {
          console.error("An error occurred while fetching the project details");
        }
      })
      .catch((error) => console.error("Error fetching current project:", error));
  }, [id]);

  if (!current_project) {
    return <div>Loading...</div>;
  }

  const imageStyle = {
    width: '100%',
    height: '300px', // Set the desired height
    objectFit: 'cover', // Crop the image to fit the container
  };

  const squareImageStyle = {
    width: '100%',
    paddingBottom: '100%', // This makes the height equal to the width, creating a square aspect ratio
    position: 'relative',
    overflow: 'hidden',
  };

  const innerImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Crop the image to fit the container
  };

  const headerStyle ={
    marginTop: '20px',
  }

  const openCarousel = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="container flex-grow-1">
       <div className="d-flex flex-column align-items-start p-3 flex-grow-1">
      <h1>{current_project.title}</h1>
      <p className="lead">{current_project.short_description}</p>
      <h4 style={headerStyle}>Status: </h4>
      <p>{current_project.status}</p>
      <h4 style={headerStyle}>Location: </h4>
      <p>{current_project.location}</p>
      <h4 style={headerStyle}>Description:</h4>
      <p>{current_project.description}</p>
      <div className="row">
        <div className="col-6">
            <h5 style={headerStyle}>Before</h5>
            <img src={current_project.before_image} alt="Before Project Image" className="img-fluid" style={imageStyle} />
        </div>
        <div className="col-6">
            <h5 style={headerStyle}>After</h5>
            <img src={current_project.after_image} alt="After Project Image" className="img-fluid" style={imageStyle} />
        </div>
      </div>
      <h4 style={{marginTop: '80px'}}>Images:</h4>
      <div className="container-fluid" style={{marginBottom:'80px'}}>
        <div className="row g-1" style={{ width: '80%', margin: '0 auto' }}>
          {current_project.images && current_project.images.map((image, index) => (
            <div className="col-4" key={index}>
              <div style={squareImageStyle} onClick={() => openCarousel(index)}>
                <img src={image} alt={`Project Image ${index + 1}`} className="img-fluid" style={innerImageStyle} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <h4 style={headerStyle}>Process:</h4>
      <p>{current_project.progress_text}</p>
      <h4 style={headerStyle}>Design:</h4>
      <p>{current_project.design_text}</p>
      <h4 style={headerStyle}>Impact:</h4>
      <p>{current_project.impact_text}</p>

      <Modal show={isOpen} onHide={() => setIsOpen(false)} size="lg" centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Carousel
            selectedItem={photoIndex}
            onChange={(index) => setPhotoIndex(index)}
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            dynamicHeight
          >
            {current_project.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Project Image ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
    </div>
   
  );
};

export default ProjectDetails;