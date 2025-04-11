import React, { useEffect } from "react";

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
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                laying out print, graphic or web designs. The passage is attributed to an
                unknown typesetter in the 15th century who is thought to have scrambled
                parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen
                book. It usually begins with: <br /><br />
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.”
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
                <p style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation
                </p>
            </div>
            </div>

            <div id="aaganwadi-section">
            <h3 style={styles.subHeading}>Aanganwadi</h3>
            <div style={styles.card}>
                <p style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation
                </p>
            </div>
            </div>
        </section>

        {/* Meet the Team Section */}
        <section id="team-section" style={styles.section}>
            <h3 style={styles.subHeading}>Meet the Team</h3>
            <div style={styles.card}>
            <p style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation
            </p>
            <a href="#contact" style={styles.link}>Contact us</a>
            </div>
        </section>
       
        </div>
    </div>
  );
};

export default AboutUs;
