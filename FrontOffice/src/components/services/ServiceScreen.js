import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Container, Row } from "react-bootstrap";
import Filters from "./Filters.js";
import Mappa from "./Mappa.js";
import BookService from './BookService'
import ServiceCarousel from "./ServiceCarousel.js";


const ServiceScreen = () => {
  const [services, setServices] = useState([]);
  const [bookableServices, setBookableServices] = useState([]);

  const getServices = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/services')
      setServices(data) 
    } catch (error) {
      console.log(error);
    }
  };
  
  const getBookableServices = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/bookable_services')
      setBookableServices(data.filter(s => s.reservation_left > 0)) 
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getServices()  
    getBookableServices()
  }, []);


  const handleSubmit = (e, service, location, startDate) => {
		e.preventDefault()
    console.log(service)
    console.log(startDate)
    console.log(location)
		
	}
	

  return (
    <>
			<Container fluid>
				<Row>
					<Col
						md={3}
						style={{ paddingBottom: "100%", backgroundColor: "#ced4da" }}
					>
						<Filters tofilter={handleSubmit} />
					</Col>
					<Col>
            <br/>
						<h2 className="text-center"> I nostri servizi </h2>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{width: '50vw', height: '60vh' }}>
              {services === null
                ? "Fetching services...."
                :  <ServiceCarousel services={services}  />                   
                
              }
            </div>
            </Row>            
            <br/>
            <h2 className="text-center"> Le nostre sedi </h2>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Mappa />
            </Row>
            <br/>
            <h2 className="text-center"> Servizi prenotabili </h2>
            { 
              bookableServices.length === 0 ? (
                <h4>No bookable service available</h4>
              ) :(
                bookableServices.map((servizio) => {

                  let time = servizio.day;
                  time = time.split("T");
                  let date = time[0];
                  let orario = time[1].split(".")[0];
  
                  return <BookService servizio={servizio} date={date} orario={orario}/>
                })
              )
            }

					</Col>
				</Row>
			</Container>
		</>
  )
}

export default ServiceScreen




	