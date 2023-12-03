import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const LandingPage = (props) => {
  return (
    <div className="login-container" style={{ textAlign: 'center' }}>
      <div>
        <Login connectWallet={props.connectWallet} isConnected={props.isConnected} />
        {props.isConnected ? (
          <>
      
            {/* Add space between the buttons */}
            <div style={{display:'flex' ,flexDirection:'row', justifyContent:'center'}}>
            <div>
              <button
                type="button"
                className="my-custom-button" style={{ margin: '10px'}}
              >
                <Link to="vote" className="linki">
                  VOTE
                </Link>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="my-custom-button" style={{ margin: '10px'}}
              >
                <Link to="adminPage" className=" linki">
                  ADMIN
                </Link>
              </button>
            </div>
            </div>
      
            
          </>
        ) : null}
      </div>
    </div>
  );
};

export default LandingPage;
