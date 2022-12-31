import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Col, Container, Row } from "react-bootstrap";
import Filters from "./Filters.js";
import Mappa from "./Mappa.js";


const ServiceScreen = () => {
  const [services, setServices] = useState(null);
  const [shopLocations, setShopLocations] = useState(null);

  const getServices = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/services')
      setServices(data) 
    } catch (error) {
      console.log(error);
    }
  };

  const getLocations = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/locations')
      setShopLocations(data) 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices() 
    getLocations()  
  }, []);

  const ServiceCard = ({data}) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            {data.description}
          </Card.Text>
          <Card.Link href="#">More info</Card.Link>
        </Card.Body>
      </Card>
    );
  }

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
              {services === null
                ? "Fetching services...."
                : services.map((service, id) => {
                  return <ServiceCard data={service} key={id} />                   
                })
              }
            </Row>
            <br/>
            <h2 className="text-center"> Le nostre sedi </h2>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Mappa shopLocations={shopLocations}/>
            </Row>
					</Col>
				</Row>
			</Container>
		</>
  )
}

export default ServiceScreen




	