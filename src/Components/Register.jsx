import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account,ID} from "../lib/appwrite";

const Register = (props) => {
    

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disabled,setDisabled] = useState(true)
  const [userId,setUserId] = useState()
  const[isLoggedIn,setIsLoggedIn] = useState(true)

  const navigate = useNavigate();

  const sendOtp = async () => {
    const sessionToken = await account.createPhoneSession(
        phone,
        "+91"+phone
    );

    const userid =  await sessionToken.userId
    setUserId(userid)

    console.log(sessionToken)
    console.log(userid)
    console.log(userId)
    // sessionToken.then( function(res){
    //     setUserId( res.userId)
    // //    userIdArr = userId.split('')
    
    //     console.log(res)
    //     console.log("resID " + res.$id)
    //     console.log("user id" + res.userId)
    //     console.log("user id 2" + userId)
    // },function(err){
    //     console.log(err)
    // })
    }
    
     const login = async()=>{
    const session =  account.updatePhoneSession(
        phone,
        otp
    );
    session.then(function(res){
      console.log("resID login" +res.$id)
        console.log("user id login " + userId)
        console.log(res)
        navigate("");
        setIsLoggedIn(true)
    },function(err){
      
        console.log("user id" + userId)
        console.log(err)
    })
    }
    

  const handleSubmit = (e) => {
    e.preventDefault();
    // createService();
    

    if (!phone) {
      setEmailError("Email is required");
      return;
    }

    // if (!otp) {
    //   setPasswordError("Password is required");
    //   return;
    // }
  
    login()
    
    // Here, you would send the email and password to your backend for verification.
    // If the verification is successful, you would redirect the user to the home page.

    
  };

  return (
      <div>
        <div className="welcome-message">Welcome to decentralaised voting application</div>
    <div className="background1">
      <div className="login-container1">
        <label htmlFor="Phone Number">Enter Phone No.</label>
      {isLoggedIn ? (<>
      <form onSubmit={handleSubmit}>
        <input
          type="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input-field"
        />

        {emailError && <p className="error-message">{emailError}</p>}
        <button onClick={()=>{sendOtp() ;setDisabled(false)}} className="login-button1">Send OTP</button>
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="input-field"
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
        <button type="submit" className="login-button1">Login</button>
      </form></>):null}
      
    </div>
    </div>
    </div>
  );
};

export default Register;