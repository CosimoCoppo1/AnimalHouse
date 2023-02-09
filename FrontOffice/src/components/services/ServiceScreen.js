import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Container, Row } from "react-bootstrap";
import Filters from "./Filters.js";
import Mappa from "./Mappa.js";
import BookService from './BookService'
import FooterBasic from "../FooterBasic.js";
import apiUrl from '../../config'


const ServiceScreen = () => {
  const [bookableServices, setBookableServices] = useState([]);
  const [searchedServices, setSearchedServices] = useState(null);
  
  const getBookableServices = async () => {
    try {
      const { data } = await axios.get(`http://${apiUrl}/bookable_services`)
      setBookableServices(data.filter(s => s.reservation_left > 0)) 
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {  
    getBookableServices()
  }, []);


  const handleSubmit = (e, service, location, selectDate, setSelectDate) => {

		let ss = bookableServices
    
    if(service !== "Tutti"){
      ss = ss.filter((t) => t.service.name === service)
    }
      
    if(location !== "Tutti"){
      ss = ss.filter((t) => t.location.city === location)
    }
      
    if(selectDate !== undefined){
      ss = ss.filter((t) => t.day.split("T")[0] === selectDate)
      setSelectDate(undefined)
    }      

    setSearchedServices(ss)		

    window.location.href = "/frontoffice/services#searched"
	}
	

  return (
			<Container className="service__screen" fluid>
				<Row>
					<Col
						md={3} 
            className="service__filters"
					>
						<Filters tofilter={handleSubmit} />
					</Col>
      
					<Col>
            
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h2 className="text-center"> Le nostre sedi </h2>
              <div style={{width: '50vw', height: '60vh' }}>
                <Mappa />
              </div>
            </Row>
            <Row id="searched" style={{ justifyContent: 'center', alignItems: 'center' }}>
                {
                  searchedServices === null ? (
                  <div></div>
                ) : searchedServices.length === 0 ? (
                  <h2>Nessun servizio disponibile trovato</h2>
                ) : (
                  <>
                    <h3 className="text-center">Servizi disponibili trovati:</h3>
                    <div className="bookable__screen mb-4">
                      {
                        searchedServices.map((servizio) => {

                            /*
                                        let time = servizio.day;
                                        time = time.split("T");
                                        let date = time[0];
                                        let orario = time[1].split(".")[0];
                            */

                          let d = new Date(servizio.day);
                          let options = {
                            'weekday': 'short', 
                            'year': 'numeric', 
                            'month': '2-digit', 
                            'day': '2-digit'
                          };
                          let date = d.toLocaleDateString('it-IT', options);
                            date = date.charAt(0).toUpperCase() + date.slice(1);
                          let orario = d.toLocaleTimeString('it-IT', { 'timeStyle': 'short' });
          
                          return <BookService servizio={servizio} date={date} orario={orario}/>
                        })
                      }
                    </div>
                    <br/>
                  </>         
                        
                )
              }            
            </Row>
            <Row style={{ justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 className="text-center"> Tutti i servizi prenotabili </h3>
              <div className="bookable__screen text-center">
                { 
                  bookableServices.length === 0 ? (
                    <h4>Nessun servizio prenotabile disponibile</h4>
                  ) :(
                    bookableServices.map((servizio) => {

					  /*
                      let time = servizio.day;
                      time = time.split("T");
                      let date = time[0];
                      let orario = time[1].split(".")[0];
					  */

					let d = new Date(servizio.day);
					let options = {
						'weekday': 'short', 
						'year': 'numeric', 
						'month': '2-digit', 
						'day': '2-digit'
					};
					let date = d.toLocaleDateString('it-IT', options);
						date = date.charAt(0).toUpperCase() + date.slice(1);
					let orario = d.toLocaleTimeString('it-IT', { 'timeStyle': 'short' });

                      return <BookService servizio={servizio} date={date} orario={orario}/>
                    })
                  )
                }
              </div>
            </Row>

					</Col>
				</Row>
        <Row>
            <FooterBasic />            
          </Row>
			</Container>
 )
}

export default ServiceScreen




	
