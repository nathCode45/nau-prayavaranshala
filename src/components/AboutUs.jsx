import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const AboutUs = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
    
      document.documentElement.style.scrollBehavior = "auto";
      
    };
  }, []);

  const styles = {
    container: {
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
    },
    pic: {
        width: "100%",
        height: "200px",
        display: "flex",
   
      },
      pic2: {
        width: "50%",
        height: "320px",
        display: "flex",
   
      },
    page: {
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    },
    section: {
      marginBottom: "10px",
    },
    title: {
        fontSize: "2rem",
        borderBottom: "2px solid #ccc",
        paddingBottom: "8px",
      },
    heading: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
    },
    subHeading: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    paragraph: {
      fontSize: "0.95rem",
      lineHeight: "1.6",
      color: "#333",
    },
    card: {
      backgroundColor: "#f5f5f5",
      padding: "20px",
      borderRadius: "6px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    },
    twoColumn: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },
    textRight: {
      textAlign: "right",
    },
    textCenter: {
      textAlign: "center",
    },
    footer: {
      borderTop: "1px solid #ccc",
      paddingTop: "30px",
      marginTop: "50px",
      fontSize: "0.9rem",
      color: "#666",
      textAlign: "center",
    },
    link: {
      color: "#1a73e8",
      textDecoration: "none",
      fontSize: "0.95rem",
    }
  };

  return (
    <div style={styles.container}>
        <div style={styles.section}>
            <h1 style={styles.title}>About Us</h1>
        </div>
        <div style={styles.page}>
        {/* What is Prayavaranshala Section */}
        <section id="what-is-section" style={styles.section}>
        
            <h2 style={styles.heading}>What is Prayavaranshala</h2>
            <div style={styles.card}>
            <p style={{ ...styles.paragraph, ...styles.textCenter }}>
            The Prayavaran Shala (School for Environment) initiative is dedicated to integrating nature-based solutions (NbS) into government Anganwadi and schools, fostering an environment that connects children with nature while promoting sustainability, ecological learning, and well-being. In collaboration with Duke University's student club, the website will serve as a resource hub and a platform for research, case studies, and pilot projects. It aims to inspire stakeholders, educators, and policymakers to adopt nature-based approaches in school environments across India and beyond. 
            </p>
            <div style={styles.textRight}>
                <a href="#foundation" style={styles.link}>NAU Foundation</a>
            </div>
            </div>
        </section>

        {/* CFS & Aanganwadi Section */}
        <section style={{ ...styles.section, ...styles.twoColumn }}>
            <div id="cfs-section">
            <h3 style={styles.subHeading}>Child-friendly school</h3>
            <div style={styles.card}>
            <div style={{ ...styles.card, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
            <p style={styles.paragraph}>

            </p>
            </div>
            <img
                src="/child.jpeg"
                alt="Child-friendly school"
                style={styles.pic2}
            />
            </div>

            </div>
            </div>

            <div id="aaganwadi-section">
            <h3 style={styles.subHeading}>Aanganwadi</h3>
            <div style={styles.card}>
                <p style={styles.paragraph}>
                The anganwadi is designed with a circular layout, symbolizing unity, inclusivity and the natural cycle of learning. The round shape fosters a sense of security with a cocoon like embrace and allows for an efficient, flexible spatial arrangement that encourages interaction and movement. Large, open areas radiate from a central core, which serves as a gathering space, promoting collaboration among children and educators.
                <img
                src="public/aangwadi.jpeg" 
                alt="Map of location"
                style={styles.pic}
                />
                </p>
            </div>
            </div>
        </section>

        {/* Meet the Team Section */}
        <section id="team-section" style={styles.section}>
            <h3 style={styles.subHeading}>Meet the Team</h3>
            <div style={styles.card}>
            <p style={styles.paragraph}>
                
            </p>
            <div style={styles.textRight}>
                <a href="#team" style={styles.link}>Our Team</a>
            </div>
            </div>
        </section>

        {/* Connect Section */}
        <section id="connect-section" style={styles.section}>
            <h3 style={styles.subHeading}>Connect</h3>
            <div style={styles.card}>
            <p style={styles.paragraph}>
               
            </p>
            <div style={styles.textRight}>
            <Link to="/contact" style={styles.link}>Contact us</Link>
            </div>
            </div>
        </section>
       
        </div>
    </div>
  );
};

export default AboutUs;
