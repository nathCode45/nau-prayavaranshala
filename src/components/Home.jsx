import React, { useEffect, useState } from "react";

const Home = () => {
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
    heroTextbox: {
      position: "absolute",
      bottom: "20px",
      right: "20px",
      backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
    },
    paragraphRight: {
      marginTop: "20px",
      marginBottom: "20px",
      paddingRight: "20px",
      fontSize: "1.2em",
      lineHeight: "1.5em",
      marginLeft: "10px",
      textAlign: "right",
    },
    paragraphLeft: {
      marginTop: "20px",
      marginBottom: "20px",
      paddingLeft: "20px",
      fontSize: "1.2em",
      lineHeight: "1.5em",
      marginRight: "10px",
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
          <h2>Welcome to Prayavaranshala</h2>
          <p>Nature. Art. Us.</p>
        </div>
      </div>
      <div style={styles.gridContainer}>
        {/* First row */}
        <div style={styles.gridItem}>
          <p style={styles.paragraphLeft}>{paragraph1}</p>
        </div>
        <div style={styles.gridItem}>Item 2</div>
        <div style={styles.gridItem}>
          <img
            src={researchImageUrl}
            alt="research"
            style={{ width: "100%", height: "auto", display: "block" }} // Maintain aspect ratio
          />
        </div>
        <div style={styles.gridItem}>
          <h2 style={{ textAlign: "right", marginRight: "20px" }}>Research</h2>
          <p style={styles.paragraphRight}>{researchDescription}</p>
        </div>
        <div style={styles.gridItem}>Item 5</div>

        {/* Second row */}
        <div style={styles.gridItem}>
        <img
            src="/case_study_cover.jpeg"
            alt="Case Study Cover"
            style={{ width: "100%", height: "auto", display: "block" }} // Maintain aspect ratio
          />
        </div>
        <div style={styles.gridItem}>Item 7</div>
        <div style={styles.gridItem}>
          
        </div>
        <div style={styles.gridItem}>Item 9</div>
        <div style={styles.gridItem}>Item 10</div>
      </div>
    </div>
  );
};

export default Home;