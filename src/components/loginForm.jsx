import React from "react";
import './login.css'

function Loginform () {
    return (
        <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
                </div>
        <div className="inputs">
            <div className="input">
        <input type="text" placeholder="Name"/>
            </div>
            <div className="inputs">
                <input type="email" placeholder="Email Id"></input>
            </div>
            <div className="inputs">
                <input type="password" placeholder="Password"></input>
            </div>
        </div>
        <div className="forgot-password">Lost forgot? <span>Click here!</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>

        </div>
        
        </div>
    )
}

export default Loginform;