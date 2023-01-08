import React from 'react'
import SearchProduct from './SearchProduct';
import SelectSection from './SelectSection';
import { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionScreen from './SectionScreen';


const ECommerce = () => { 

    const searchProduct = useRef("");
    const [radioValue, setRadioValue] = useState(null);

    useEffect(() => {
      if(!localStorage.petSection){
        localStorage.setItem("petSection", "Cani")
        setRadioValue("cani")
      }
      
    }, []);        

    return ( 
      <div className="homescreen">

        <Row md={2}>
          <Container>
            <SearchProduct searchProduct={searchProduct} />        
          </Container>
        </Row>

        <Container fluid>
          <Row>
            <Col md={2} style={{ paddingBottom: "100%"}}>
              <SelectSection radioValue={radioValue} setRadioValue={setRadioValue} />						
            </Col>

            <Col >	
                <SectionScreen radioValue={radioValue}/>		              		
            </Col>
          </Row>
        </Container>


      </div>     
    )  
}

export default ECommerce