import React from "react";
import Card from 'react-bootstrap/Card';

const Reservation = ({ data, date, orario }) => {   

  return (
    <Card className="text-center">
        <Card.Header>{data.bookable_service.service.name}</Card.Header>
        <Card.Body>                        
            <Card.Text>
                Data ed Ora: {date} at {orario}
            </Card.Text>
            <Card.Text>
                Luogo: {data.bookable_service.location.city}, {data.bookable_service.location.address}
            </Card.Text>
            <Card.Text>
                Numero posti prenotati: {data.qty} 
            </Card.Text>        
        </Card.Body>
    </Card>
    
  );
};

export default Reservation;