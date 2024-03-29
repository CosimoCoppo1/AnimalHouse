import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'
import Home from './components/Home'
import ECommerce from './components/e-commerce/ECommerce'
import CartScreen from './components/cart/CartScreen'
import ProductScreen from './components/e-commerce/ProductScreen'
import ServiceScreen from './components/services/ServiceScreen'
import LocationServiceScreen from '../src/components/services/LocationServiceScreen'
import Community from './components/blog/Community'

import Auth from './components/auth/Auth'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'




const App = () => {

  const [sideToggle, setSideToggle] = useState(false)
  
  return (
    <Router basename={'frontoffice'}>
      <div className="App">
        <Navbar click={() => setSideToggle(true)} /> 
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
        <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>       
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/e-commerce" element={<ECommerce />} />
          <Route exact path="/products/:id" element={<ProductScreen/>} />
          <Route exact path="/cart" element={<CartScreen/>} />
          <Route exact path="/services" element={<ServiceScreen />} />
          <Route exact path="/services-location/:id" element={<LocationServiceScreen/>} />
          <Route exact path="/community" element={<Community />} />  
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/login" element={<Login />}  />
          <Route exact path="/register" element={<SignUp />}  />
        </Routes>
      </div>
    </Router> 
    
  );
}

export default App;
