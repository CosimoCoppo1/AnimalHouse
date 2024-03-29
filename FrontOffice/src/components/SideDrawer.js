import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"]

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    };

    if(show){
        sideDrawerClass.push("show")
    }

    return (
      <div className={sideDrawerClass.join(" ")}>        
        <ul className="sidedrawer__links" onClick={click}>
          <li className="nav-item">
            <Link className="navbar-brand" to={'/'}> Home </Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-brand" to={'/e-commerce'}> E-commerce </Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-brand" to={'/services'}> Services </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span>
                Cart{" "}
                <span className="sidedrawer__cartbadge">{getCartCount()}</span>
              </span>
            </Link>
          </li>
          <li className="nav-item">
                    <Link className="navbar-brand" to={'/community'}> Community </Link>
                </li>
          <li className="nav-item">
                    <Link className="navbar-brand d-flex" to={'/auth'}>
                        <i className="fa-sharp fa-solid fa-user"></i>
                        <span> {localStorage.userName ?? "Accedi" }</span>
                    </Link>
                </li>       
        </ul>
      </div>
    )
}

export default SideDrawer