import React from "react";

const Contact = () => {
  const styles = {
    container: {
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    },
    section: {
      marginBottom: "40px",
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "10px",
      borderBottom: "2px solid #ccc",
      paddingBottom: "8px",
    },
    subheading: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    text: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#333",
      marginBottom: "10px",
    },
    blueLink: {
      color: "#1a73e8",
      textDecoration: "none",
      fontWeight: "500",
    },
    gridTwoCol: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginTop: "20px",
    },
    mapPlaceholder: {
      width: "100%",
      height: "200px",
      backgroundColor: "#eee",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1rem",
      color: "#777",
    },
    footer: {
      borderTop: "1px solid #ccc",
      paddingTop: "20px",
      fontSize: "0.9rem",
      color: "#666",
      textAlign: "center",
      marginTop: "40px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.text}>Home / Contact Us</p>
      </div>

      <div style={styles.section}>
        <p style={styles.subheading}>Collaboration between NAU Foundation and Duke University</p>
        Duke University Technify partnered with the NAU Foundation to create this collaboritive website.
      </div>

      <div style={styles.gridTwoCol}>
        {/* NAU Foundation */}
        <div>
          <p style={styles.subheading}>NAU Foundation</p>
          <p style={styles.text}><strong>Address:</strong><br />
          #insert NAU main address here 
          </p>
          <a
          href=""
          style={styles.blueLink}
          target="_blank"
          rel="noopener noreferrer"
          >
          Open in Google Maps
          </a>
          <p style={styles.text}><strong>Phone:</strong> #insert phone</p>
          <p style={styles.text}><strong>Email:</strong> #insert email</p>
        </div>
        <img
        src="public/nauMap.png" 
        alt="Map of location"
        style={styles.mapPlaceholder}
        />
        

        {/* Duke University */}
        <div>
          <p style={styles.subheading}>Duke University</p>
          <p style={styles.text}><strong>Address:</strong><br />
            Duke University<br />
            2080 Duke University Road<br />
            Durham North Carolina 27708 USA<br />
          </p>
          <a
          href="https://maps.app.goo.gl/DebJwbSwfkbmy5vZ7"
          style={styles.blueLink}
          target="_blank"
          rel="noopener noreferrer"
          >
          Open in Google Maps
          </a>
          <p style={styles.text}><strong>Phone:</strong> (919) 684-8111</p>
          <p style={styles.text}><strong>About Us: </strong> 
          <a
          href="https://duke.campusgroups.com/technifynow/home/"
          style={styles.blueLink}
          target="_blank"
          rel="noopener noreferrer"
          >
          Technify
          </a>
          </p>
        </div>
        <img
        src="public/dukeMap.png" // replace with your actual image path
        alt="Map of location"
        style={styles.mapPlaceholder}
        />
      </div>

      
    </div>
  );
};

export default Contact;
