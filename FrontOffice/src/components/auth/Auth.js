import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Login from './Login'
import SignUp from './SignUp'
import FooterBasic from '../FooterBasic'

const Auth = () => {
    const isSignUp = useRef(true);

    return (
        <div className="homescreen">            
            {
                isSignUp ? <Login/> : <SignUp/>
            }                        
        </div>
    )
}

export default Auth;