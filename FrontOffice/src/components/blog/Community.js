import React from 'react'
import PostSide from "./PostSide/PostSide"
import { Container, Row, Col } from "react-bootstrap";
import MyReservations from '../services/MyReservations';


const Community = () => {

    return (
        <div className='homescreen'>  
            <Container>
                <Row>
                    <p className="text-center fs-1">Our community</p>
                </Row>
                <Row style={{marginLeft:"5rem", marginTop:"2rem", marginRight:"5rem"}} className="text-center rounded bg-secondary bg-opacity-10 shadow p-2">
                    <Col>
                        <p className=" fs-5">Accedi alla nostra community e condividi curiosità ed informazioni sugli animali. 
                                            Puoi inoltre accedere ai punteggi ottenuti giocando con la nostra app <a target="_blank" href="/game">GAME</a>.
                                            In questa sezione puoi inoltre vedere le prenotazioni che hai effettuato dei nostri <a target="_blank" href="/services">servizi</a>. 
                                            <br/>
                                            Quindi <a target="_blank" href="/register">registrati</a> se non lo hai già fatto oppure <a target="_blank" href="/login">accedi</a> al tuo account per usufruire di queste funzionalità!
                                             
                        </p>
                    </Col>
			    </Row>
                <br />
                <Row>
                    <Col>
                        <Row>
                            <h4 className="text-center">LEADERBOARD GAME</h4>
                        </Row>
                        <Row>
                            <h4 className="text-center">MY RESERVATIONS</h4>
                            <MyReservations />
                        </Row>
                    </Col>
                    <Col>
                        <h4 className="text-center">BLOG POSTS</h4>
                        <PostSide /> 
                    </Col>
                </Row>           
            </Container>                           
        </div>
    )
}

export default Community