import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Card from 'react-bootstrap/Card';
import "leaflet/dist/leaflet.css";

const Locations = () => {
  const styles = {
    container: {
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
    },
    section: {
      marginBottom: "30px",
    },
    title: {
        fontSize: "2rem",
        borderBottom: "2px solid #ccc",
        paddingBottom: "10px",
      },
  };
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/locations.json") // Ensure this file is served correctly in your public folder
      .then((response) => response.json())
      .then((data) => {
        setLocations(
          data.map((location) => ({
            id: location.id,
            position: location.position,
            label: location.label,
            imageUrl: location.imageUrl, 
            link: location.link, 
            description: location.description,
            icon: L.icon({
              iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
              iconSize: [38, 38],
            }),
          }))
        );
      })
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  return (
    <div style={styles.container}>
    <div style={styles.section}>
        <h1 style={styles.title}>Locations</h1>
    </div>

      <Card className="custom-card">
        <Card.Header className = "text-center" style={{ padding: '20px' }}>
          <h4>Map of NAU locations</h4>
        </Card.Header>
        <Card.Body>
          {/* React-Leaflet Map */}
          <MapContainer
            center={[22.4, 73.2]}
            zoom={11}
            style={{ height: '600px', width: '100%' }} // Custom height for the map
          >
            {/* OpenStreetMap tile layer */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {locations.map((marker) => (
              <Marker key={marker.id} position={marker.position}>
                <Popup>
                  <div style={{ width: '250px' }}> {/* Increase the width of the popup */}
                    <h3>{marker.label}</h3>
                    <img src={marker.imageUrl} alt={marker.label} style={{ width: '100%', height: 'auto' }} /> {/* Maintain aspect ratio */}
                    <br />
                    <a href={marker.link} target="_blank" rel="noopener noreferrer">Google Maps Link</a>
                    <p>{marker.description}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Locations;