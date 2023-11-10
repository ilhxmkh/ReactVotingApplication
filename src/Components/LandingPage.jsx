import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const LandingPage = (props) => {
    
    return (
        <div className="login-container">
            <Login connectWallet = {props.connectWallet} 
                    isConnected = {props.isConnected}/>
            
          { props.isConnected? <><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <Link to="vote" className="flex items-center">VOTE</Link>
            </button><button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    <Link to="adminPage" className="flex items-center">ADMIN</Link>
                </button></> : null}
        </div>
    )
}
export default LandingPage;