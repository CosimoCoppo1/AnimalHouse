import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";


const Navbar = ({click}) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <div>
        <nav className="navbar">
            <div className="navbar_logo">
                <h2>Animal House</h2>
            </div>            
       
            <ul className="navbar_links">
                <li className="nav-item">
                    <Link className="navbar-brand" to={'/'}> HOME </Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to={'/e-commerce'}> E-commerce </Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to={'/services'}> Services </Link>
                </li>
                <li className="nav-item">
                    <Link className="cart_link" to={'/cart'}> 
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart 
                            <span className="cartlogo_badge">{getCartCount()}</span>                    
                        </span>    
                    </Link>
                </li>  
                <li className="nav-item">
                    <Link className="navbar-brand" to={'/auth'}>
                        <i className="fa-sharp fa-solid fa-user"></i>
                    </Link>
                </li>             
            </ul>
            
            <div className="auth_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>            
        </nav>
    </div>
  )
}

export default Navbar