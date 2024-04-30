import React from 'react';
import { useState } from 'react';
import Login from './Login';
import Header from './Header';
import backg from './back.gif';
import HeaderLogo from './HeaderLogo';

const CreateElection = (props) => {
	const [name, setName] = useState('');
	const [nameArray, setNameArray] = useState(null);

	async function handleAddCandidate(e) {
		setName(e.target.value);
	}
	async function handlecreateElection(e) {
		const candidatesArr = name.split(',').map((candidate) => candidate.strip());
		props.createElection(candidatesArr);
	}
	
	const addC = () => {
		props.addCandidate(name);
	};
	const showBalance = () => {
		props.showBalance();

		alert(props.contract_Balance);
	};

	return (
		<div>
			<HeaderLogo />
			<Header />
			<div className=' md:max-w-6xl md:mx-auto'>
				<Login
					connectWallet={props.connectWallet}
					isConnected={props.isConnected}
				/>
				{props.isOwner ? (
					<div className='space-y-4 mt-2 text-lg px-3 md:space-y-12'>
						<input
							type='text'
							placeholder='Enter Candidate Name'
							value={name}
							onChange={handleAddCandidate}
							className='border-b-2 w-2/3 mx-auto block text-center font-bold mb-2 md:max-w-xl md:mx-auto md:block md:my-4 md:mb-8'
						/>
						<button
							onClick={handlecreateElection}
							className='px-4 py-1 border-slate-50 border-2 rounded-md text-slate-50 button-shadow text-lg font-bold block mx-auto bg-blue-700'
						>
							Create
						</button>
					</div>
				) : (
					<h1 className='text-3xl font-semibold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
						You are not the Owner
					</h1>
				)}
			</div>
		</div>
	);
};

export default CreateElection;
