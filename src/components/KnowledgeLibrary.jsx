import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const KnowledgeLibrary = () => {
  const [selectedItem, setSelectedItem] = useState("Pilot Projects");
  const [selectedDescription, setSelectedDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
  const [pilot_projects, setPilotProjects] = useState([]);
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
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  const handleCardClick = (projectId) => {
    // Navigate to the project details page with the selected project ID
    navigate(`/project/${projectId}`);
  }

  return (
    <div style={{ height: '100vh' }}>
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

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {selectedItem === "Pilot Projects" ? (
          pilot_projects.map((project) => (
            <div className="col" key={project.id} onClick={() => handleCardClick(project.id)}>
              <div className="card shadow-sm">
                <img src={project.main_image} alt={project.title} className="bd-placeholder-img card-img-top" width="100%" height="225" />
                <div className="card-body">
                  <p className="card-text">{project.title}</p>
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div> */}
                </div>
              </div>
            </div>
          ))
        ) : selectedItem === "Research" ? (
          <div className="col">
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div className="card-body">
                <p className="card-text">Research content goes here. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                {/* <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-body-secondary">9 mins</small>
                </div> */}
              </div>
            </div>
          </div>
        ) : selectedItem === "Case Studies" ? (
          <div className="col">
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div className="card-body">
                <p className="card-text">Case Studies content goes here. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                {/* <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-body-secondary">9 mins</small>
                </div> */}
              </div>
            </div>
          </div>
        ) : (
          <div className="col">
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div className="card-body">
                <p className="card-text">Default content goes here. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                {/* <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-body-secondary">9 mins</small>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeLibrary;