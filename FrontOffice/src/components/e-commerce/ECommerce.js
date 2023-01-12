import React from 'react'
import PetSection from './PetSection';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionScreen from './SectionScreen';
import FooterBasic from '../FooterBasic'
import ProductSection from './ProductSection';



const ECommerce = () => { 

    const [keyProduct, setKeyProduct] = useState('Prodotti alimentari');
    const [radioPetValue, setRadioPetValue] = useState(null);

    useEffect(() => {
      if(!localStorage.petSection){
        localStorage.setItem("petSection", "Cani")
        setRadioPetValue("cani")
      }
      
    }, []);        

    return ( 
      <div className="homescreen">

        <Row md={2}>
          <Container> 
            <ProductSection keyProduct={keyProduct} setKeyProduct={setKeyProduct} />      
          </Container>
        </Row>

        <Container fluid>
          <Row>

            <Col md={2} style={{ paddingBottom: "100%"}}>
              <PetSection radioPetValue={radioPetValue} setRadioPetValue={setRadioPetValue} />						
            </Col>

            <Col >	
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