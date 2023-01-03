import { useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookService = ({servizio, date, orario}) => {
    const [qty, setQty] = useState(1);


    const bookingHandler = async () => {
        if(localStorage.authToken){
            const service_id=servizio._id 
            const user_id=localStorage.getItem("userId") 

            try {
                const {data} = await axios.post("http://localhost:8000/bookable_services/reservation", {qty, user_id ,service_id})            
                console.log(data)
                if(data.reservationResult){
                    alert("Service reserved succesfully")
                    window.location.href = "/services"
                }else{
                    alert("We are sorry but an error occurred during the booking")
                }
                    

            } catch (error) {
                console.log(error);
            }

        }else{            
            alert("You need to login before booking")
        }
        
    }


    return (
        <Card className="text-center">
            <Card.Header>{servizio.service.name}</Card.Header>
            <Card.Body>
            <Card.Title>Animale</Card.Title>
            <Card.Text>
                {servizio.pet.name}
            </Card.Text>
            <Card.Title>Data e Ora</Card.Title>
            <Card.Text>
                {date} at {orario}
            </Card.Text>
            <Card.Title>Sede</Card.Title>
            <Card.Text>
                {servizio.location.city}, {servizio.location.address}
            </Card.Text>
            <Card.Title>Prezzo</Card.Title>
            <Card.Text>
                {servizio.price} $
            </Card.Text>
            <Card.Title>Posti prenotabili</Card.Title>
            <Card.Text>
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(servizio.reservation_left).keys()].map((x) => (
                    <option key={x+1} value={x+1}>
                        {x+1}
                    </option>
                    ))}
                </select>
            </Card.Text>
            <Button variant="primary" onClick={bookingHandler}>Book</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{servizio.reservation_left} reservation left</Card.Footer>
        </Card>
    );
}

export default BookService