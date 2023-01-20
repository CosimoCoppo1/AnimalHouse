import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import MyReservations from '../services/MyReservations';
import MyAnimals from '../blog/MyAnimals';


const ProfilePage = () => {


  return (
    <Container>
    <Row style={{marginLeft:"5rem", marginTop:"2rem", marginRight:"5rem"}} className="text-center rounded bg-secondary bg-opacity-10 shadow p-2">
                    <Col>
                        <p className=" fs-5">In questa sezione puoi vedere le prenotazioni che hai effettuato dei nostri <a target="_blank" href="/services">servizi</a> e 
                                            le informazioni riguardanti i tuoi animali salvate sulla nostra app <a target="_blank" href="/game">GAME</a>.  </p>
                    </Col>
    </Row>

    <hr />

    <Row>
        <Col>
            <Row>
                <h4 className="text-center">MY RESERVATIONS</h4>
                <MyReservations />
            </Row>
        </Col>
        <Col>
                
                <h4 className="text-center">MY ANIMALS</h4>
                <MyAnimals />          
        </Col>
    </Row>    
    
    </Container>    
  )
}

export default ProfilePage