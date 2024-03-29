import React from 'react'
import { Link } from "react-router-dom"  

const Cart = ({item, qtyChangeHandler, removeHandler}) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.image} alt={item.title} />
      </div>
      <Link to={`/products/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>

      <p className="cartitem__price">${item.price}</p>

      <select
        value={item.qty}
        aria-label="Selezione numero prodotti"
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(item.pieces_left).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
        aria-label="Elimina prodotto"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Cart