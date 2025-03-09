import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [current_project, setCurrentProject] = useState(null)

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
            });
          }else{
            console.error("An error occured while fetching the project details");
          }
        })
        .catch((error) => console.error("Error fetching current project:", error));
    }, []);

    if (!current_project) {
        return <div>Loading...</div>;
    }

  return (
    <div style={{ height: '100vh' }} className="d-flex flex-column align-items-start p-3">
      <h1>{current_project.title}</h1>
      <p className = "lead">{current_project.short_description}</p>
      <h4>Status: </h4>
      <p>{current_project.status}</p>
      <h4>Location: </h4>
      <p>{current_project.location}</p>
      <h4>Descripton:</h4>
      <p>{current_project.description}</p>
      <div className='row'>
        <div className="col-md-6">
            <img src={current_project.before} alt={`Project Image`} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;