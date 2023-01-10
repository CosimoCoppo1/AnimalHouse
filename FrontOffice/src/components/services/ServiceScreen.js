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
  const [searchedServices, setSearchedServices] = useState(null);

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


  const handleSubmit = ( service, location, selectDate) => {
		let ss = bookableServices
    
    if(service !== "Tutti")
      ss = ss.filter((t) => t.service.name === service)
    if(location !== "Tutti")
      ss = ss.filter((t) => t.location.city === location)
    // if(selectDate !== undefined)
    //   ss = ss.filter((t) => t.day.split("T")[0] === selectDate)

    setSearchedServices(ss)		
	}
	

  return (
    <div className="homescreen">
			<Container fluid>
				<Row>

					<Col
						md={3}
						style={{ paddingBottom: "100%", backgroundColor: "#ced4da" }}
					>
						<Filters tofilter={handleSubmit} />
					</Col>
      
					<Col>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h2 className="text-center"> I nostri servizi </h2>
              <div style={{width: '50vw', height: '60vh' }}>
                {services === null
                  ? "Fetching services...."
                  :  <ServiceCarousel services={services}  />                   
                  
                }
              </div>
            </Row> 
            
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h2 className="text-center"> Le nostre sedi </h2>
              <div style={{width: '50vw', height: '60vh' }}>
                <Mappa />
              </div>
            </Row>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                {
                  searchedServices === null ? (
                  <div></div>
                ) : searchedServices.length === 0 ? (
                  <h2>Nessun servizio disponibile trovato</h2>
                ) : (
                  <div>
                  <h2>Servizi disponibili trovati:</h2>
                  {
                    searchedServices.map((servizio) => {

                      let time = servizio.day;
                      time = time.split("T");
                      let date = time[0];
                      let orario = time[1].split(".")[0];
      
                      return <BookService servizio={servizio} date={date} orario={orario}/>
                    })
                  }
                  </div>         
                        
                )
              }            
            </Row>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h2 className="text-center"> Servizi prenotabili </h2>
              <div style={{width: '50vw', height: '60vh' }}>
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
              </div>
            </Row>

					</Col>
				</Row>
			</Container>
      </div>
		
  )
}

export default ServiceScreen




	