import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import MyReservations from '../services/MyReservations';
import MyAnimals from '../blog/MyAnimals'; 
import apiUrl from '../../config'

 
const ProfilePage = () => {


  return (
    <Container>
    <Row style={{marginLeft:"5rem", marginTop:"2rem", marginRight:"5rem"}} className="text-center rounded bg-secondary bg-opacity-10 shadow p-2">
                    <Col>
                        <p className=" fs-5">In questa sezione puoi vedere le prenotazioni che hai effettuato dei nostri <a href="/frontoffice/services">servizi</a> e 
                                            le informazioni riguardanti i tuoi animali salvate sull'app <a target="_blank" href={`http://${apiUrl}/game`}>GAME</a>.  </p>
                    </Col>
    </Row>

    <br />

    <Row>
        <Col>
            <Row>
                <h3 className="text-center">LE MIE PRENOTAZIONI</h3>
                <MyReservations />
            </Row>
        </Col>
        <Col>
                
                <h3 className="text-center">I MIEI ANIMALI</h3>
                <MyAnimals />          
        </Col>
    </Row>    
    
    </Container>    
  )
}

export default ProfilePage