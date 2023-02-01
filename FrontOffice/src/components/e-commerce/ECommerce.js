import React from 'react'
import PetSection from './PetSection';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionScreen from './SectionScreen';
import FooterBasic from '../FooterBasic'
import ProductSection from './ProductSection';



const ECommerce = () => { 

    const [keyProduct, setKeyProduct] = useState(null);
    const [radioPetValue, setRadioPetValue] = useState(null);

    useEffect(() => { 
      if(!localStorage.petSection){
        localStorage.setItem("petSection", "Cani")
        setRadioPetValue("Cani")
      }
      
    }, []);        

    return ( 
      <div className="homescreen">

        <h1 className="text-center">E-commerce</h1>

        <Row md={2}>
          <Container> 
            <PetSection radioPetValue={radioPetValue} setRadioPetValue={setRadioPetValue} />	 
            <br/>    
          </Container>
        </Row>

        <Container fluid>
          <Row>

            <Col md={2} >
              <ProductSection keyProduct={keyProduct} setKeyProduct={setKeyProduct} />               					
            </Col>

            <Col>	
                <SectionScreen radioPetValue={radioPetValue} keyProduct={keyProduct}/>		              		
            </Col>
          </Row>
          <Row>
            <FooterBasic />            
          </Row>
        </Container>


      </div>     
    )  
}

export default ECommerce