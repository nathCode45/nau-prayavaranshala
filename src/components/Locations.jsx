import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import Card from 'react-bootstrap/Card';
import "leaflet/dist/leaflet.css";

const Locations = () => {
    //L.marker(L.latLng(23.1686, 79.9339)).addTo(useMap());
    // test

    const locations= [
      [23.222, 80],
      [23.099, 79.33],
      [23.301, 79.99],
      [23.503, 80.01],
      [23.485, 80.2]
    ];

    const markers = Array.from({length: 5}, (_,i)=>({
      id: i,
      position: locations[i],
      icon: L.icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png', iconSize: [38, 38]}),
      label: 'Marker $i'
    }));

    return(
      <div style={{ height: '100vh' }}>
        <h1>Locations</h1>

        <Card>
              <Card.Header>
                <h4>Map of NAU locations</h4>
              </Card.Header>
              <Card.Body>
                {/* React-Leaflet Map */}
                <MapContainer
                  center={[23.1686, 79.9339]} 
                  zoom={5}
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
                  {markers.map((marker) => (
                    <Marker key={marker.id} position={marker.position}>
                      <Popup>{marker.label}</Popup>
                    </Marker>
                  ))}
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