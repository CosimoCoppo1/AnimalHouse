import React from 'react'
import { Link } from "react-router-dom"

const Product = ({ image, description, price, title, productId }) => { 
  return (
    <div className="product_">
      <img src={image} alt="" />

      <div className="product__info">
        <p className="info__name">{title}</p>

        <p className="info__description" ><p dangerouslySetInnerHTML={{__html: description.substring(0, 100) + "..."}}/></p>

        <p className="info__price">${price}</p>

        <Link to={`/products/${productId}`} className="info__button">
          Vedi
        </Link>
      </div>
    </div>
  )
}

export default Product