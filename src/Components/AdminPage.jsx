import React from "react";
import { useState } from "react";
import Login from "./Login";
import Header from "./Header";
import backg from "./back.gif";

const AdminPage = (props) => {
    const [name,setName]= useState("")

    async function handleAddCandidate(e) {
        setName(e.target.value);
      }

    const addC = ()=>{
        props.addCandidate(name)
    }
   
    return (
        <><Header/>
        <div className="login-container">
            <Login  connectWallet = {props.connectWallet}
                     isConnected= {props.isConnected}/>
            {props.isOwner?<>
            <input type="text" placeholder="Entern Candidate Name" value={name} onChange={handleAddCandidate}></input>
            <button className="login-button" onClick={addC}>Add</button>

            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    <th>Candidate votes</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates?.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </> : <h1>You are not the Owner</h1>}
        </div>
        </> )
}

export default AdminPage;