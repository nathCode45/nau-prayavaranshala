import React from "react";

const Locations = () => {
<<<<<<< Updated upstream
=======
    //L.marker(L.latLng(23.1686, 79.9339)).addTo(useMap());
    // test

    const locations= [
      [22.43722, 73.25139],
      [22.46500, 73.26556],
      [22.46972, 73.23861],
      [22.47972, 73.22972],
      [22.37889, 73.26000],
      [22.43889, 73.19389],
      [22.44306, 73.18528],
      [22.48056, 73.18778],
      [22.42917, 73.24194]
    ];

    const locationsNames = [
      "Madi Mahaula",
      "Ganeshnagar",
      "Gorwa Gaam",
      "Garasiya, Rushinagar",
      "Panchavati",
      "Laxmipura",
      "Dharampura",
      "Ashirwaadnagar",
      "Ambe Vada"
    ]

    const markers = Array.from({length: 9}, (_,i)=>({
      id: i,
      position: locations[i],
      icon: L.icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png', iconSize: [38, 38]}),
      label: locationsNames[i]
    }));

>>>>>>> Stashed changes
    return(
        <div>
        <h1>Locations</h1>
<<<<<<< Updated upstream
        <p>Content here.</p>
=======

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
>>>>>>> Stashed changes
      </div>
    );
};

export default Locations;