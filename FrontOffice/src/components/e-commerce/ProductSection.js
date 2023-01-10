import React from 'react'
import { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row, Col } from "react-bootstrap";

const ProductSection = ({keyProduct, setKeyProduct}) => {  

  return (
    <Tabs
      id="controlled-tab"
      activeKey={keyProduct}
      onSelect={(k) => setKeyProduct(k)}
      className="mb-3"
    >
      <Tab eventKey="Prodotti alimentari" title="Cibo">        
      </Tab>
      <Tab eventKey="Prodotti sanitari" title="Prodotti sanitari">        
      </Tab>
      <Tab eventKey="Accessoristica" title="Accessoristica">        
      </Tab>
    </Tabs>
    
  );

}

export default ProductSection