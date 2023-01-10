import React, { useRef } from "react";
import Login from './Login'
import SignUp from './SignUp'

const Auth = () => {
    const isSignUp = useRef(true);

    return (
        <div className="Auth">
        
        {
            isSignUp ? <Login/> : <SignUp/>
        }
        
        </div>
    )
}

export default Auth;