import React from 'react'
import { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const SearchProduct = ({searchProduct}) => {

    return(
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Cerca prodotto"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            ref={searchProduct}
          />
          <button
            class="btn btn-outline-primary"
            type="button"
            id="button-addon2"
            onClick={console.log("")}
          >
            CERCA
          </button>
        </div>
    )
}

export default SearchProduct