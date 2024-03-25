// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {

    struct Candidate {
        string name;
        uint256 voteCount;
    }

    Candidate[] public candidates;
    address owner;
    uint256 public electionCount = 1;
    mapping(uint256 => mapping(address => bool)) public voters;
    // mapping(address => bool) public voters;
    mapping(uint256 => mapping(address => bool)) public tokenTaken;
    // mapping(address => bool) public tokenTaken;

    uint256 public votingStart;
    uint256 public votingEnd;

constructor(string[] memory _candidateNames, uint256 _durationInMinutes) {
    for (uint256 i = 0; i < _candidateNames.length; i++) {
        candidates.push(Candidate({
            name: _candidateNames[i],
            voteCount: 0
        }));
    }
    owner = msg.sender;
    votingStart = block.timestamp;
    votingEnd = block.timestamp + (_durationInMinutes * 1 minutes);
}

receive() external payable {
    
}

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function addCandidate(string memory _name) public onlyOwner {
        candidates.push(Candidate({
                name: _name,
                voteCount: 0
        }));
    }

    function createElection(string[] memory _candidate_Names) public onlyOwner {
        delete candidates;
        electionCount +=1;
        for (uint256 i = 0; i < _candidate_Names.length; i++) {
        candidates.push(Candidate({
            name: _candidate_Names[i],
            voteCount: 0
        }));
    }
    }

   

    function vote(uint256 _candidateIndex) public {
        require(!voters[electionCount][msg.sender], "You have already voted.");
        require(_candidateIndex < candidates.length, "Invalid candidate index.");

        candidates[_candidateIndex].voteCount++;
        voters[electionCount][msg.sender] = true;
    }


    
   function getToken() public payable returns(bool) {
     uint amount = 10000000000000000;
        require(!tokenTaken[electionCount][msg.sender], "You have already Taken token.");
         require(amount <= address(this).balance, "Insufficient balance");
        // require(_candidateIndex < candidates.length, "Invalid candidate index.");
        bool sent = payable (msg.sender).send(amount);
        require(sent, "Failed to send Ether");
      
        tokenTaken[electionCount][msg.sender] = true;
        return tokenTaken[electionCount][msg.sender];
    }

    function canVoteStatus(address signer) public view returns (bool){
    return tokenTaken[electionCount][signer];
  }
  function showBalance(address) public view returns (uint){
    return address(this).balance;
  }
  function getElectionCount() public view returns (uint){
    return electionCount;
  }
 function getResult() public view returns(Candidate memory){
        uint256 highestVote =0;
        Candidate memory winner;
        // Candidate storage winner;
        for(uint i=0; i<candidates.length; i++){ 
            
            if(candidates[i].voteCount>highestVote){
                highestVote = candidates[i].voteCount;
                winner = candidates[i];

            }
           
        }
        return winner;

        }
    

    function getAllVotesOfCandiates() public view returns (Candidate[] memory){
        return candidates;
    }
    function getOwner() public view returns (address){
        return owner;
    }

    function getVotingStatus() public view returns (bool) {
        return (block.timestamp >= votingStart && block.timestamp < votingEnd);
    }

    function getRemainingTime() public view returns (uint256) {
        require(block.timestamp >= votingStart, "Voting has not started yet.");
        if (block.timestamp >= votingEnd) {
            return 0;
    }
        return votingEnd - block.timestamp;
    }
}
