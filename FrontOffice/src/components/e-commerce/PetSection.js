import React from 'react'
import { useState } from "react";
import { Container, Row, Col, ButtonGroup, ToggleButton } from "react-bootstrap";

const SelectSection = ({ radioPetValue, setRadioPetValue}) => {
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
      <span style={{ fontWeight: 'bold' }}>{localStorage.petSection}</span>           
      </Row>
      <br />
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
                checked={radioPetValue === radio.value}
                onChange={(e) => setRadioPetValue(e.target.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <div>
          {radioPetValue === "Cani"  && selectSection("Cani") }
        </div>
        <div>
          {radioPetValue === "Gatti"  && selectSection("Gatti")}
        </div>
        <div>
          {radioPetValue === "Volatili" && selectSection("Volatili")}
        </div>

        <div>
          {radioPetValue === "Pesci" && selectSection("Pesci")}
        </div>

        <div>
            {radioPetValue === "Tartarughe" && selectSection("Tartarughe")}
        </div>

        <div>
          {radioPetValue === "Roditori" && selectSection("Roditori")}
        </div>

        
      </Row>
    </Container>
  );

}

export default SelectSection