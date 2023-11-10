import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
    return (
        <div>
            <h1 className="welcome-message">Welcome to decentralized voting application</h1>
          { props.isConnected? 
            <button className="login-button"  onClick = {props.connectWallet}>Metamask Is Connected
            </button>: 
            <button className="login-button"  onClick = {props.connectWallet}>Login Metamask
            </button>}

        </div>
    )
}

export default Login;