import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
    return (
        <div className="login-container">
            
        <div className="transbox">
            <div className="welcome-message">Welcome to decentralized voting application</div> 
          { props.isConnected? 
            <button className="login-button" id="st" onClick = {props.connectWallet}>Metamask Is Connected
            </button>: 
            <button className="login-button" onClick = {props.connectWallet}>Login Metamask
            </button>}
        </div>
        </div>
    )
}

export default Login;