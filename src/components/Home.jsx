import { icon } from "leaflet";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaLeaf, FaBook, FaLightbulb, FaMapMarkerAlt, FaHandsHelping } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const [topImageUrl, setTopImageUrl] = useState("");
  const [paragraph1, setParagraph1] = useState("");
  const [researchDescription, setResearchDescription] = useState("");
  const [researchImageUrl, setResearchImageUrl] = useState("");
  const [caseSudyDescription, setCaseStudyDescription] = useState("");
  const [caseStudyImageUrl, setCaseStudyImageUrl] = useState("");
  const [pilotProjectDescription, setPilotProjectDescription] = useState("");
  const [pilotProjectImageUrl, setPilotProjectImageUrl] = useState("");
  const [locationDescription, setLocationDescription] = useState("");
  const [locationImageUrl, setLocationImageUrl] = useState("");

  useEffect(() => {
    // Fetch the data from home.json
    fetch("/home.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data[0]) {
          if (data[0].top_image_url) {
            setTopImageUrl(data[0].top_image_url);
          }
          if (data[0].paragraph1) {
            setParagraph1(data[0].paragraph1);
          }
          if (data[0].research_description) {
            setResearchDescription(data[0].research_description);
          } else {
            setResearchDescription("No research description available.");
          }
          if (data[0].research_image_url) {
            setResearchImageUrl(data[0].research_image_url);
          }
          if (data[0].case_study_description) {
            setCaseStudyDescription(data[0].case_study_description);
          } else {
            setCaseStudyDescription("No case study description available.");
          }
          if (data[0].case_study_image_url) {
            setCaseStudyImageUrl(data[0].case_study_image_url);
          }
          if (data[0].pilot_project_description) {
            setPilotProjectDescription(data[0].pilot_project_description);
          } else {
            setPilotProjectDescription("No pilot project description available.");
          }
          if (data[0].pilot_project_image_url) {
            setPilotProjectImageUrl(data[0].pilot_project_image_url);
          }
          if (data[0].location_description) {
            setLocationDescription(data[0].location_description);
          } else {
            setLocationDescription("No location description available.");
          }
          if (data[0].location_image_url) {
            setLocationImageUrl(data[0].location_image_url);
          }
        }
      })
      .catch((error) => console.error("Error fetching home.json:", error));
  }, []);


  const styles = {
    heroImage: {
      position: "relative",
      width: "100%",
      height: "400px", // Adjust the height as needed
      backgroundImage: `url('${topImageUrl}')`, // Dynamically set the background image
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    iconStyle: {
      marginRight: "0.5rem",
      color: "#38a169"
    },
    heroTextbox: {
      position: "absolute",
      bottom: "20px",
      right: "20px",
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
    },
    paragraphRight: {
      marginTop: "20px",
      marginBottom: "20px",
      paddingRight: "50px",
      fontSize: "1.2em",
      lineHeight: "1.5em",
      marginLeft: "10px",
      textAlign: "right",
      listStylePosition: "inside",
    },
    paragraphLeft: {
      marginTop: "20px",
      marginBottom: "20px",
      paddingLeft: "20px",
      fontSize: "1.2em",
      lineHeight: "1.5em",
      marginRight: "20px",
      textAlign: "left",
    },
    
    gridContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
      gridAutoRows: "auto", // Automatically adjust row height based on content
      width: "100vw",
      marginLeft: "0",
      marginRight: "0",
      //padding: "0,"
    },
    gridItem: {
      //border: "1px solid #ccc",
    },
  };

  return (
    <div>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      </style>
      <div style={styles.heroImage}>
        <div style={styles.heroTextbox}>
        <h1 style={{ fontSize: "2.5rem", borderBottom: "3px solid #9ae6b4", paddingBottom: "0.5rem" }}>
          🌿 Welcome to Prayavaran Shala
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Empowering the next generation to be environmental leaders through education, awareness, and action.
        </p>
        </div>
      </div>
      <div style={styles.gridContainer}>
        {/* First row */}
        <div style={styles.gridItem}>
          <p style={styles.paragraphLeft}>{paragraph1}</p>
        </div>
        <div style={styles.gridItem}></div>
        <div style={styles.gridItem}>
          <img
            src={researchImageUrl}
            alt="research"
            style={{ width: "100%", height: "auto", display: "block" }} // Maintain aspect ratio
          />
        </div>
        <div style={styles.gridItem}>
          <div style={styles.paragraphLeft}>
            <h2><FaBook style={styles.iconStyle} /> Research</h2>
            <ul>
              <li>Biophilic design impact on early childhood development</li>
              <li>Sustainable materials in educational environments</li>
              <li>Integration of natural elements in learning spaces</li>
              <li>Environmental education methodologies</li>
            </ul>
            {/* <button className="btn btn-primary"
              onClick={() => navigate("/knowledge-library")} // Navigate to the "/research" page
            >
            Access The Research
          </button> */}
          </div>
          
        </div>
        <div style={styles.gridItem}>
          <div style ={styles.paragraphLeft}>
            <h2><FaLightbulb style={styles.iconStyle} /> Case Studies</h2>
            <p>{caseSudyDescription}</p>
          </div>
        </div>

        {/* Second row */}
        <div style={styles.gridItem}>
        <img
            src="/case_study_cover.jpeg"
            alt="Case Study Cover"
            style={{ width: "100%", height: "auto", display: "block" }} // Maintain aspect ratio
          />
        </div>
        <div style={styles.gridItem}>
          <img
            src="/pilot_project_1_photos/image_1.jpg"
            alt="Case Study Cover"
            style={{ width: "100%", height: "auto", display: "block" }} // Maintain aspect ratio
          />
        </div>
        <div style={styles.gridItem}>
          <div style = {styles.paragraphLeft}>
            <h2><FaLeaf style={styles.iconStyle} /> Pilot Projects</h2>
            <p>{}</p>
            <ul>
              <li>Sustainable Building Materials Integration Program</li>
              <li>Natural Playscape Development Initiative</li>
              <li>Community Garden Learning Project</li>
              <li>Zero-Waste Campus Initiative</li>
            </ul>
          </div>
        </div>
        <div style={styles.gridItem}>
          <div style = {styles.paragraphLeft}>
            <h2><FaLeaf style={styles.iconStyle} />Locations</h2>
            <p>{}</p>
            <ul>
              <li>Ashirwaadnagar </li>
              <li>Garasiya, Rushinagar</li>
              <li>Gorwa Gaam</li>
              <li>Ganeshnagar</li>
              <li>Dharampura </li>
              <li>Laxmipura</li>
              <li>Madi Mahaula</li>
              <li>Ambe Vada</li>
              <li>Panchavati</li>
            </ul>
          </div>
        </div>
        <div style={styles.gridItem}>
        <img
            src="/case_study_2_photos/2_2.jpg"
            alt="Case Study Cover"
            style={{ width: "100%", height: "auto", display: "block" }} // Maintain aspect ratio
          />
        </div>
      </div>
    </div>
  );
};

export default Home;