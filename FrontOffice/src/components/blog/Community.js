import React from 'react'
import PostSide from "./PostSide/PostSide"
import Leaderboard from "./Leaderboard"
import { Container, Row, Col } from "react-bootstrap";
import Footer from '../FooterBasic';




const Community = () => {

    return (
        <div className='homescreen'>  
            <Container>
                <Row>
                    <h1 className="text-center">Community</h1>
                </Row>
                <Row style={{marginLeft:"5rem", marginTop:"2rem", marginRight:"5rem"}} className="text-center rounded bg-secondary bg-opacity-10 shadow p-2">
                    <Col>
                        <p className=" fs-5">Accedi alla nostra community e condividi curiosità ed informazioni sugli animali. 
                                            Puoi inoltre accedere ai punteggi ottenuti giocando con la nostra app <a target="_blank" href="/game">GAME</a>.
                                            In questa sezione puoi inoltre vedere le prenotazioni che hai effettuato dei nostri <a href="/frontoffice/services">servizi</a>. 
                                            <br/>
                                            Quindi <a href="/frontoffice/register">registrati</a> se non lo hai già fatto oppure <a href="/frontoffice/login">accedi</a> al tuo account per usufruire di queste funzionalità!
                                             
                        </p>
                    </Col>
			    </Row>
                <br />
                <Row>
                    <Col>
                        <h3 className="text-center">BLOG POSTS</h3>   
                        <PostSide /> 
                    </Col>
                    <Col>    
                        <h3 className="text-center">LEADERBOARD QUIZ</h3>   
                        <Leaderboard />                     
                    </Col>
                </Row>  
                <br /> 
                <Row>
                    <Footer />            
                </Row>        
            </Container>                           
        </div>
    )
}

export default Community