import React from "react";
import { FaLeaf, FaBook, FaLightbulb, FaMapMarkerAlt, FaHandsHelping } from "react-icons/fa";

const Home = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#2f855a", borderBottom: "3px solid #9ae6b4", paddingBottom: "0.5rem" }}>
        🌿 Welcome to Prayavaran Shala
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#4a5568" }}>
        Empowering the next generation to be environmental leaders through education, awareness, and action.
      </p>

      <section style={sectionStyle}>
        <h2><FaBook style={iconStyle} /> Research</h2>
        <ul>
          <li>Biophilic design impact on early childhood development</li>
          <li>Sustainable materials in educational environments</li>
          <li>Integration of natural elements in learning spaces</li>
          <li>Environmental education methodologies</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2><FaLightbulb style={iconStyle} /> Case Studies</h2>
        <p>
          Discover how innovative design solutions have transformed early childhood learning environments around the world.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2><FaLeaf style={iconStyle} /> Pilot Projects</h2>
        <ul>
          <li>Sustainable Building Materials Integration Program</li>
          <li>Natural Playscape Development Initiative</li>
          <li>Community Garden Learning Project</li>
          <li>Zero-Waste Campus Initiative</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2><FaMapMarkerAlt style={iconStyle} /> Locations</h2>
        <ul>
          <li><strong>Mumbai:</strong> 123 Green Street – Flagship center</li>
          <li><strong>Delhi:</strong> 456 Eco Park – Innovation hub</li>
          <li><strong>Bangalore:</strong> 789 Garden Road – R&D center</li>
        </ul>
      </section>

      <section style={{ ...sectionStyle, textAlign: "center" }}>
        <h2><FaHandsHelping style={iconStyle} /> Ready to Make a Difference?</h2>
        <p>
          Join us in creating sustainable learning environments for the next generation.
        </p>
        <button style={buttonStyle}>Contact Us Today</button>
      </section>
    </div>
  );
};

const sectionStyle = {
  border: "1px solid #c6f6d5",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  borderRadius: "8px",
  backgroundColor: "#f0fff4"
};

const buttonStyle = {
  marginTop: "1rem",
  backgroundColor: "#38a169",
  color: "#fff",
  border: "none",
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.3s"
};

const iconStyle = {
  marginRight: "0.5rem",
  color: "#38a169"
};

export default Home;
