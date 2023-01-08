import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import Company from '../img/company.png'


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
                <img src={Company} width="60" height="45" className="d-inline-block align-top" alt="" />
            </div>            
       
            <ul className="navbar_links">
                <li className="nav-item">
                    <Link className="navbar-brand" to={'/'}> Home </Link>
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
                    <Link className="navbar-brand" to={'/community'}> Community </Link>
                </li> 
                <li className="nav-item">
                    <Link className="navbar-brand" to={'/auth'}>
                        <i className="fa-sharp fa-solid fa-user"></i>
                        <span> {localStorage.userName ?? "Accedi" }</span>
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