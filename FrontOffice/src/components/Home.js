import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Footer from './FooterBasic';



const Home = () => {

    return (
        <div className='homescreen'> 
        <Container>
            <Row>
                <header style={{ paddingLeft: 0 }}>
                    <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('https://www.adriaeco.eu/wp-content/uploads/2019/03/main_banner_img2_hp-540x244.jpg')", wight: 1200, height:300  }}
                    >
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>Tutto per i nostri animali..</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
            </Row> 
            <br />
            <Row>
                <Col>
                    <header style={{ paddingLeft: 0 }}>
                        <div
                        className='p-5 text-center bg-image'
                        style={{ backgroundImage: "url('https://best5.it/b5/wp-content/uploads/2018/03/Cibo-per-animali4-800x400.jpg')", wight: 600, height:300  }}
                        >
                        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>Un oceano di croccantini..</h1>
                                <h2 className='mb-3'>Vieni a scoprire i nostri prodotti!</h2>
                                <a className='btn btn-outline-light btn-lg' href='/frontoffice/e-commerce' role='button'>
                                Prodotti
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </header>
                </Col>
                <Col>
                    <header style={{ paddingLeft: 0 }}>
                        <div
                        className='p-5 text-center bg-image'
                        style={{ backgroundImage: "url('https://images2.corriereobjects.it/methode_image/2018/08/01/Interni/Foto%20Interni/pet%20soccorso.jpg?v=201808011848')", wight: 600, height:300  }}
                        >
                        <div className='mask'>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>Ogni tipo di servizio dedicato ai nostri amati animali</h1>
                                <a className='btn btn-outline-light btn-lg' href='/frontoffice/services' role='button'>
                                Servizi
                                </a>           
                            </div>
                            </div>
                        </div>
                        </div>
                    </header>
                </Col>
            </Row>
            <br />
            <Row>
                <div className='mask' style={{ backgroundColor: 'rgb(50,205,50)', height:60 }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                    <p className="fs-3  text-center">
                        Entra a far parte della nostra COMMUNITY!
                    </p>
                </div>
                </div>
                </div>
            </Row>
            <br />
            <Row>
                <Col>
                    <header style={{ paddingLeft: 0 }}>
                        <div
                        className='p-5 text-center bg-image'
                        style={{ backgroundImage: "url('https://fantagiochi.it/wp-content/uploads/2012/05/copertina16.jpg')", wight: 600, height:250  }}
                        >
                        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h2 className='mb-3'>Gioca con la nostra App e registra i tuoi punteggi!</h2>
                                <a className='btn btn-outline-light btn-lg' href='/game' role='button'>
                                Game
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </header>
                </Col>
                <Col>
                    <header style={{ paddingLeft: 0 }}>
                        <div
                        className='p-5 text-center bg-image'
                        style={{ backgroundImage: "url('https://s3-eu-west-1.amazonaws.com/static.comunitatrentina.it/var/arco/storage/images/comune/comunicazione/notizie/notizie-in-evidenza/convivenza-serena-con-i-cani-il-sondaggio/246669-1-ita-IT/Convivenza-serena-con-i-cani-il-sondaggio_imagefull.jpg')", wight: 600, height:300  }}
                        >
                        <div className='mask'>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h2 className='mb-3'>Condividi con la community AnimalHouse interessi ed info riguardanti i toui animali!</h2>
                                <a className='btn btn-outline-light btn-lg' href='/frontoffice/community' role='button'>
                                Blog
                                </a>           
                            </div>
                            </div>
                        </div>
                        </div>
                    </header>
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

export default Home