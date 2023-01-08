import React from 'react'
import { useState } from "react";
import { Container, Row, Col, ButtonGroup, ToggleButton } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const SelectSection = ({ radioValue, setRadioValue}) => {
    const radios = [
        { name: "Cani", value: "Cani" },
        { name: "Gatti", value: "Gatti" },
        { name: "Volatili", value: "Volatili" },
        { name: "Pesci", value: "Pesci" },
        { name: "Tartarughe", value: "Tartarughe" },
        { name: "Roditori", value: "Roditori" }
    ];

  function selectSection(animale){
    localStorage.setItem("petSection", animale)
  } 

  return (
    <Container>
      <Row>
      <Breadcrumb>
      <Breadcrumb.Item href="/e-commerce">E-commerce</Breadcrumb.Item>
      <Breadcrumb.Item active>{localStorage.petSection}</Breadcrumb.Item>
      </Breadcrumb>      
      </Row>
      <Row>
        <Col>
          <ButtonGroup vertical>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                name="radio"
                value={radio.value}
                variant="outline-primary"
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.target.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <div>
          {radioValue === "Cani"  && selectSection("Cani") }
        </div>
        <div>
          {radioValue === "Gatti"  && selectSection("Gatti")}
        </div>
        <div>
          {radioValue === "Volatili" && selectSection("Volatili")}
        </div>

        <div>
          {radioValue === "Pesci" && selectSection("Pesci")}
        </div>

        <div>
            {radioValue === "Tartarughe" && selectSection("Tartarughe")}
        </div>

        <div>
          {radioValue === "Roditori" && selectSection("Roditori")}
        </div>

        
      </Row>
    </Container>
  );

}

export default SelectSection