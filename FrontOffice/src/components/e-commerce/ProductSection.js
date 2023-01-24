import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'
import apiUrl from '../../config'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row, Col } from "react-bootstrap";

const ProductSection = ({keyProduct, setKeyProduct}) => {  

  const [sections, setSections] = useState([])

  const getSections = async () => {
    try {
      let query = localStorage.petSection ?? "Cani"
      const { data } = await axios.get(`http://${apiUrl}/sections?name=${query}`)
      setSections(data) 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSections()   
  }, [localStorage.petSection]);


  return (
    <Tabs
      id="controlled-tab" 
      activeKey={keyProduct}
      onSelect={(k) => setKeyProduct(k)}
      className="mb-3"
    >
      {
        sections.map((section, id) => (
          <Tab eventKey={section.name} title={section.name}></Tab>
        ))
      }
    </Tabs>
    
  );

}

export default ProductSection