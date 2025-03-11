import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const CaseDetails = () => {
  const { id } = useParams();
  const [current_case, setCurrentCase] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    fetch("/case_study.json") // Ensure this file is served correctly in your public folder
      .then((response) => response.json())
      .then((data) => {
        const my_case = data.find((my_case) => my_case.id === parseInt(id));
        if (my_case) {
          setCurrentCase({
            id: my_case.id,
            title: my_case.title,
            main_image: my_case.main_image,
            description: my_case.description,
            short_description: my_case.short_description,
            status: my_case.status,
            location: my_case.location,
            link: my_case.link,
            images: my_case.images || [],
          });
        } else {
          console.error("An error occurred while fetching the case details");
        }
      })
      .catch((error) => console.error("Error fetching current case:", error));
  }, [id]);

  if (!current_case) {
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

  const headerStyle = {
    marginTop: '20px',
  };

  const openCarousel = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className= "d-flex flex-column flex-grow-1" style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: '1 1 auto', overflowY: 'auto', padding: '1rem' }}>
        <h1>{current_case.title}</h1>
        <p className="lead">{current_case.short_description}</p>
        <h4 style={headerStyle}>Status: </h4>
        <p>{current_case.status}</p>
        <h4 style={headerStyle}>Location: </h4>
        <p>{current_case.location}</p>
        <h4 style={headerStyle}>Description:</h4>
        <p>{current_case.description}</p>
        
        <h4 style={headerStyle}>Images:</h4>
        <div className="container-fluid">
          <div className="row g-1" style={{ width: '80%', margin: '0 auto' }}>
            {current_case.images && current_case.images.map((image, index) => (
              <div className="col-4" key={index}>
                <div style={squareImageStyle} onClick={() => openCarousel(index)}>
                  <img src={image} alt={`Case Image ${index + 1}`} className="img-fluid" style={innerImageStyle} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
            {current_case.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Case Image ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CaseDetails;