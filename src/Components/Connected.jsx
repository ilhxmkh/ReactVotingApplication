import React from "react";
import Login from "./Login";
import Header from "./Header";

const Connected = (props) => {
    return (
        <>
            {props.isConnected && <Header />}
            <div className="connected-container">
                <div className="connected-info">
                    <Login
                        connectWallet={props.connectWallet}
                        isConnected={props.isConnected}
                    />
                    {props.isConnected ? (
                        <>
                            <div className="connected-header">
                                You are Connected to Metamask
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <defs>
                                    <filter id="squiggly-0">
                                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
                                        <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
                                    </filter>
                                    <filter id="squiggly-1">
                                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
                                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                                    </filter>

                                    <filter id="squiggly-2">
                                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
                                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                                    </filter>
                                    <filter id="squiggly-3">
                                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
                                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                                    </filter>

                                    <filter id="squiggly-4">
                                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
                                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                                    </filter>
                                </defs>
                            </svg>
                            <p className="connected-account">
                                Metamask Account: {props.account}
                            </p>
                            <p className="connected-account">
                                Remaining Time: {props.remainingTime}
                            </p>
                            {props.showButton ? (
                                <p className="connected-account">You have already voted</p>
                            ) : (
                                <div>
                                    <input
                                        type="number"
                                        placeholder="Enter Candidate Index"
                                        value={props.number}
                                        onChange={props.handleNumberChange}
                                    />
                                    <br />
                                    <button
                                        className="login-button"
                                        onClick={props.voteFunction}
                                    >
                                        Vote
                                    </button>
                                </div>
                            )}

                            <div className="candidates-table-container">
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
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default Connected;
