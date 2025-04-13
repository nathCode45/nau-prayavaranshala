import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const KnowledgeLibrary = () => {
  
  const styles = {
    container: {
        padding: "40px 20px",
        //fontFamily: "Arial, sans-serif",
    },
    section: {
      marginBottom: "10px",
    },
    title: {
        fontSize: "2rem",
        borderBottom: "2px solid #ccc",
        paddingBottom: "8px",
      },
  };

  const [selectedItem, setSelectedItem] = useState("Pilot Projects");
  const [selectedDescription, setSelectedDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
  const [pilot_projects, setPilotProjects] = useState([]);
  const [research, setResearch] = useState([]);
  const [case_studies, setCaseStudies] = useState([]);

  const navigate = useNavigate();

  const handleSelect = (item) => {
    setSelectedItem(item);
    if (item === "Research") {
      setSelectedDescription("Research Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    } else if (item === "Case Studies") {
      setSelectedDescription("Case Studies Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    } else if (item === "Pilot Projects") {
      setSelectedDescription("Pilot Projects Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    }
  };

  useEffect(() => {
    fetch("/pilot_projects.json") // Ensure this file is served correctly in your public folder
      .then((response) => response.json())
      .then((data) => {
        setPilotProjects(
          data.map((project) => ({
            id: project.id,
            title: project.title,
            main_image: project.main_image,
            link: project.link,
          }))
        );
      })
      .catch((error) => console.error("Error fetching pilot_projects:", error));
  }, []);

  useEffect(() => {
    fetch("/research.json") // Ensure this file is served correctly in your public folder
      .then((response) => response.json())
      .then((data) => {
        console.log("Research data:", data);
        setResearch(
          data.map((research) => ({
            id: research.id,
            title: research.title,
            image: research.image,
            link: research.link,
          }))
        );
      })
      .catch((error) => console.error("Error fetching research:", error));
  }, []);

  useEffect(() => {
    fetch("/case_study.json") // Ensure this file is served correctly in your public folder
      .then((response) => response.json())
      .then((data) => {
        console.log("Case Studies data:", data);
        setCaseStudies(
          data.map((case_study) => ({
            id: case_study.id,
            title: case_study.title,
            main_image: case_study.main_image,
            link: case_study.link,
          }))
        );
      })
      .catch((error) => console.error("Error fetching case_studies:", error));
  }, []);

  const handlePilotProjectClick = (projectId) => {
    // Navigate to the project details page with the selected project ID
    navigate(`/project/${projectId}`);
  };

  const handleResearchClick = (researchLink) => {
    // Open the research link in a new tab
    window.open(researchLink, "_blank");
  };

  const handleCaseStudyClick = (caseId) => {
    // Navigate to the project details page with the selected project ID
    navigate(`/case_study/${caseId}`);
  };

  const imageStyle = {
    width: '100%',
    height: '225px', // Set the desired height
    objectFit: 'cover', // Crop the image to fit the container
  };

  


  return (
    <div style={styles.container}>
        <div style={styles.section}>
            <h1 style={styles.title}>Knowledge Library</h1>
        </div>
    
    <div className="container flex-grow-1">
      <div className="d-flex flex-column flex-grow-1">
      <div className="d-flex align-items-center justify-content-between gap-4 p-4">
        <h1 className="p-3">{selectedItem}</h1>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {selectedItem}
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" type="button" onClick={() => handleSelect("Research")}>Research</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => handleSelect("Case Studies")}>Case Studies</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => handleSelect("Pilot Projects")}>Pilot Projects</button></li>
          </ul>
        </div>
      </div>

      <p>{selectedDescription}</p>

      <div className="container-fluid flex-grow-1 d-flex flex-column">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 flex-grow-1">
          {selectedItem === "Pilot Projects" ? (
            pilot_projects.map((project) => (
              <div className="col" key={project.id} onClick={() => handlePilotProjectClick(project.id)}>
                <div className="card shadow-sm custom-card">
                  <img src={project.main_image} alt={project.title} className="bd-placeholder-img card-img-top" style={imageStyle} />
                  <div className="card-body">
                    <p className="card-text">{project.title}</p>
                  </div>
                </div>
              </div>
            ))
          ) : selectedItem === "Research" ? (
            research.map((research) => (
              <div className="col" key={research.id} onClick={() => handleResearchClick(research.link)}>
                <div className="card shadow-sm custom-card">
                  <img src={research.image} alt={research.title} className="bd-placeholder-img card-img-top" style={imageStyle} />
                  <div className="card-body">
                    <p className="card-text">{research.title}</p>
                  </div>
                </div>
              </div>
            ))
          ) : selectedItem === "Case Studies" ? (
            case_studies.map((case_study) => (
              <div className="col" key={case_study.id} onClick={() => handleCaseStudyClick(case_study.id)}>
                <div className="card shadow-sm custom-card">
                  <img src={case_study.main_image} alt={case_study.title} className="bd-placeholder-img card-img-top" style={imageStyle} />
                  <div className="card-body">
                    <p className="card-text">{case_study.title}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col">
              <div className="card shadow-sm custom-card">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <p className="card-text">Default content goes here. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default KnowledgeLibrary;