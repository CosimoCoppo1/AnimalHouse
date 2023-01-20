import { useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import apiUrl from '../../config'
import swal from 'sweetalert';


const BookService = ({servizio, date, orario}) => {
    const [qty, setQty] = useState(1);


    const bookingHandler = async () => {
        if(localStorage.authToken){
            const bookable_service=servizio._id 
            const user=localStorage.getItem("userId") 

            try {
                const {data} = await axios.post(`http://${apiUrl}/bookable_services/reservation`, {qty, user ,bookable_service})            
                console.log( data)
                if(data.reservationResult){
                    swal({title: "Prenotazione servizio avvenuta con successo!", icon: "success"})
                    .then(() => {window.location.href = "/services"})
        
                }else{
                    swal({title: "Siamo spiacenti ma è avvenuto un errore durante la prenotazione", icon: "error"})
                }
                    

            } catch (error) {
                console.log(error);
            }

        }else{  
            swal({title: "Login necessario per effettuare la prenotazione", icon: "info"})          
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
            <Card.Title>Taglia</Card.Title>
            <Card.Text>
                {servizio.pet_size}
            </Card.Text>
            <Card.Title>Data e Ora</Card.Title>
            <Card.Text>
                {date} alle {orario.split(":")[0]}:{orario.split(":")[1]}
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