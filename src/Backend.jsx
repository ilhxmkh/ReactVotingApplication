import { useState, useEffect, useReducer } from 'react';
import {ethers} from 'ethers';
import {contractAbi, contractAddress} from './Constant/constant';
import Login from './Components/Login';
import Result from './Components/Result';
import Connected from './Components/Connected';
import './App.css';
import LandingPage from './Components/LandingPage';
import { useNavigate } from 'react-router-dom';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App';
import AdminPage from './Components/AdminPage';
// import { useDispatch,useSelector} from 'react-redux'
import {connectMeta} from './Store/authSlice'
import { Outlet } from 'react-router-dom';
import Register from './Components/Register';

function Backend(props) {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [votingStatus, setVotingStatus] = useState(true);
  const [remainingTime, setremainingTime] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [number, setNumber] = useState('');
  const [CanVote, setCanVote] = useState(true);
  const [added, setAdded] = useState(0);
  const [owner,setOwner] = useState("")
  const [signer,setSigner] = useState({})
  const [isOwner,setIsOwner] = useState(false)
  // const navigate = useNavigate()
  const [winnerName,setWinnerName] = useState('')
  const [winnerVote,setWinnerVote] = useState(0)
  



  useEffect( () => {
    getCandidates();
    getRemainingTime();
    getCurrentStatus();
    getOwner();
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return() => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    }
  },[added]);

  useEffect(()=>{
    if(votingStatus==false)
    getResult()
  },[votingStatus])


  async function vote() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );

      const tx = await contractInstance.vote(number);
      await tx.wait();
      canVote();
  }


  async function canVote() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const voteStatus = await contractInstance.voters(await signer.getAddress());
      setCanVote(voteStatus);

  }

  async function getCandidates() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const candidatesList = await contractInstance.getAllVotesOfCandiates();
      const formattedCandidates = candidatesList.map((candidate, index) => {
        return {
          index: index,
          name: candidate.name,
          voteCount: candidate.voteCount.toNumber()
        }
      });
      setCandidates(formattedCandidates);
  }


  

  async function addCandidate(name) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract (
          contractAddress, contractAbi, signer
        );
    
        const add_candidate = await contractInstance.addCandidate(name);
        await add_candidate.wait();
        setAdded(added+1)
        }

        async function getOwner() {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const contractInstance = new ethers.Contract (
            contractAddress, contractAbi, signer
          );
          const owner = await contractInstance.getOwner();
          
          setOwner(owner)
          
      }
      async function isThisOwner(){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
       
       
       
        if(owner === address){
          setIsOwner(true)
          
        }
        else{
          setIsOwner(false)
        }
      }


  async function getCurrentStatus() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const status = await contractInstance.getVotingStatus();
      console.log(status);
      setVotingStatus(status);
  }

  async function getRemainingTime() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const time = await contractInstance.getRemainingTime();
      setremainingTime(parseInt(time, 16));
  }

  async function getResult() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract (
      contractAddress, contractAbi, signer
    );
    const winner = await contractInstance.getResult();
    console.log(winner);

        setWinnerName(winner.name)
         setWinnerVote(winner.voteCount.toNumber())  
   
}

  function handleAccountsChanged(accounts) {
    if (accounts.length > 0 && account !== accounts[0]) {
      setAccount(accounts[0]);
      canVote();
      isThisOwner();
    } else {
      setIsConnected(false);
      setAccount(null);
    }
  }

  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log("Metamask Connected : " + address);
        setIsConnected(true);
        canVote();
        
        isThisOwner();
        getResult();
        // setVotingStatus(false)
        console.log(winnerName,winnerVote)
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error("Metamask is not detected in the browser")
    }
  }


  async function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element ={<App/>}>
        <Route path='login' element={<Register connectWallet = {connectToMetamask}
                                                isConnected = {isConnected}
                                               />}/>
        <Route path='result' element={<Result votingStatus = {votingStatus}
                                                winnerName={winnerName}
                                                winnerVote = {winnerVote}/>}/>
        <Route path='' element={<LandingPage connectWallet = {connectToMetamask}
                                                isConnected = {isConnected}
                                               />}/>
        <Route path='vote' element={<Connected  account = {account}
                        candidates = {candidates}
                        isConnected ={isConnected}
                        connectWallet = {connectToMetamask}
                        remainingTime = {remainingTime}
                        number= {number}
                        handleNumberChange = {handleNumberChange}
                        voteFunction = {vote}
                        showButton = {CanVote}/>}/>
        <Route path='adminPage' element={<AdminPage addCandidate = {addCandidate}
                                                    candidates = {candidates}
                                                    isOwner = {isOwner}
                                                    connectWallet = {connectToMetamask}
                                                   isConnected= {isConnected}
                                                    />}/>
      
      
      </Route>
    )
  )
  
return (
  < RouterProvider router ={router} /> 
  
)
  
}

export default Backend