import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import Card from 'react-bootstrap/Card';
import "leaflet/dist/leaflet.css";

const Locations = () => {
    return(
      <div style={{ height: '100vh' }}>
        <h1>Locations</h1>
        <p>Content here.</p>

        <Card>
              <Card.Header>
                <h4>Map Example with React-Leaflet</h4>
              </Card.Header>
              <Card.Body>
                {/* React-Leaflet Map */}
                <MapContainer
                  center={[51.505, -0.09]} 
                  zoom={13}
                  style={{ height: '400px', width: '100%' }} // Custom height for the map
                >
                  {/* OpenStreetMap tile layer */}
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />

                  {/* Marker with Popup */}
                  <Marker position={[51.505, -0.09]} icon={L.icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png', iconSize: [38, 38] })}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </Card.Body>
              <Card.Footer>
                
              </Card.Footer>
            </Card>


        {/* <MapContainer style= {{height: '100%'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
      </div>
    );
};

export default Locations;