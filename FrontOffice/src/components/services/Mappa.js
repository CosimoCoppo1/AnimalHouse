import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from 'axios'
import { Link } from "react-router-dom"
import "leaflet/dist/leaflet.css";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});


const Mappa = () => {
  const position = [41.90418673591773, 14.276496815962785];
  const [shopLocations, setShopLocations] = useState([]);


  const getLocations = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/locations')
      setShopLocations(data) 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocations()  
  }, []);

  function MarkerList() {
    return shopLocations.map((location, index) => {
      return (
        <Marker
          key={index}
          position={[location.coordinates[0], location.coordinates[1]]}
        >
          <Popup>
            {location.city} 
            <br /> 
            {location.address} 
            <br />    
            <Link to={`/services-location/${location._id}`}>
              Servizi in sede
            </Link>     
          </Popup>
        </Marker>
      );
    });
  }

  return ( 
          <MapContainer
            center={position}
            zoom={5}
            scrollWheelZoom={true}
            style={{width: '50vw', height: '50vh' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerList />

          </MapContainer>
      ) 
 

  
  
}

export default Mappa