import React from "react";

const Locations = () => {
    return(
        <div>
        <h1>Locations</h1>


        <Card>
              <Card.Header>
                <h4>Map of NAU locations</h4>
              </Card.Header>
              <Card.Body>
                {/* React-Leaflet Map */}
                <MapContainer
                  center={[22.4, 73.2]} 
                  zoom={10}
                  style={{ height: '600px', width: '100%' }} // Custom height for the map
                >
                  {/* OpenStreetMap tile layer */}
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />

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
      </div>
    );
};

export default Locations;