import React from "react";
import { useState } from "react";
import Login from "./Login";
import Header from "./Header";
import backg from "./back.gif";

const CreateElection = (props) => {
    const [name,setName]= useState("")
    const [nameArray, setNameArray] = useState(["new", "Election"])

    async function handleAddCandidate(e) {
        setName(e.target.value);
      }
      async function handlecreateElection(e) {
        props.createElection(nameArray)
      }
    const addC = ()=>{
        props.addCandidate(name)
    }
    const showBalance = ()=>{
       props.showBalance()

       alert(props.contract_Balance)
    }
   
    return (
        <><Header/>
        <div className="login-container">
            <Login  connectWallet = {props.connectWallet}
                     isConnected= {props.isConnected}/>
            {props.isOwner?<>
            <input type="text" placeholder="Entern Candidate Name" value={name} onChange={handleAddCandidate}></input>
            <button className="login-button" onClick={handlecreateElection}>Create</button>
            
            


            </> : <h1>You are not the Owner</h1>}
        </div>
        </> )
}

export default CreateElection;