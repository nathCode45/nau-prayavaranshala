import React from "react";

const ImpactCreated = () => {
  const styles = {
    page: {
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    },
    section: {
      marginBottom: "50px",
    },
    title: {
      fontSize: "2rem",
      borderBottom: "2px solid #ccc",
      paddingBottom: "8px",
    },
    subheading: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "10px",
      textAlign: "center",
    },
    paragraph: {
      fontSize: "1rem",
      color: "#444",
      marginBottom: "20px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "20px",
    },
    card: {
      backgroundColor: "#f0f0f0",
      height: "160px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "10px",
      fontSize: "0.9rem",
      color: "#333",
    },
    overallImpact: {
      height: "200px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.1rem",
      fontWeight: "500",
      marginBottom: "40px",
    },
    footer: {
      borderTop: "1px solid #ccc",
      paddingTop: "30px",
      marginTop: "50px",
      fontSize: "0.9rem",
      color: "#666",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.page}>
      {/* Page Title */}
      <section style={styles.section}>
        <h1 style={styles.title}>Impact Created</h1>
        <p style={styles.paragraph}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs.
        </p>
      </section>

      {/* Overall Impact Numbers Box */}
      <section style={styles.section}>
        <div style={styles.subheading}>Overall impact numbers</div>
        <div style={styles.overallImpact}>[ Insert impact stats or graphics here ]</div>
      </section>

      {/* Impact Cards Grid */}
      <section style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.card}>Links to Impact of projects</div>
          <div style={styles.card}>Links to articles</div>
          <div style={styles.card}>Links to articles</div>
          <div style={styles.card}>Links to articles</div>
          <div style={styles.card}>Links to articles</div>
          <div style={styles.card}>Links to articles</div>
        </div>
      </section>

     
    </div>
  );
};

export default ImpactCreated;
