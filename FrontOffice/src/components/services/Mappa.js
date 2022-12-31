import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});


const Mappa = ({shopLocations}) => {
  const position = [41.90418673591773, 14.276496815962785];

  // function MarkerList(props) {
  //   return props.pos.map((location, index) => {
  //     return (
  //       <Marker
  //         key={index}
  //         position={[ , ]}
  //       >
  //         <Popup>
            
  //         </Popup>
  //       </Marker>
  //     );
  //   });
  // }

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

        </MapContainer>
      ) 
 

  
  
}

export default Mappa