import React, { useState } from "react";
import Header from "./Header";

const Result = (props) => {
   const [showResult,setShowResult] =useState(false);
    function showResultHandler(){
        setShowResult(true)
    }
    return (
        <>
        <Header/>
        <div className="login-container">
           <button onClick={showResultHandler} >Show Result</button> 
            {props.votingStatus?<h1 className="welcome-message">Counting is Pending</h1> :
            <h1 className="welcome-message">{props.winnerName} won the election by {props.winnerVote} Votes</h1>}
            {showResult? <h1 className="welcome-message">{props.winnerName} is ahead by {props.winnerVote} Votes</h1>:null} 
        </div>
   </> )
}

export default Result;