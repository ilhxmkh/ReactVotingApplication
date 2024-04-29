import React from 'react';
import { useState } from 'react';
import Login from './Login';
import Header from './Header';
import HeaderLogo from './HeaderLogo';

const AdminPage = (props) => {
	const [name, setName] = useState('');

	async function handleAddCandidate(e) {
		setName(e.target.value);
	}

	const addC = () => {
		props.addCandidate(name);
	};
	const showBalance = () => {
		props.showStatus();

		alert(props.contract_Balance);
	};

	return (
		<div className='px-2 h-svh'>
			<HeaderLogo />
			<Header />
			<div className='login-container'>
				<Login
					connectWallet={props.connectWallet}
					isConnected={props.isConnected}
				/>
				{props.isOwner ? (
					<div className='space-y-4 mt-2 text-lg px-3'>
						<div className='space-y-4 '>
							<input
								type='text'
								placeholder='Enter Candidate Name'
								value={name}
								onChange={handleAddCandidate}
								className='border-b-2 w-full text-center font-medium mb-2'
							/>
							<div className='flex gap-4 justify-center'>
								<div className='flex gap-2 justify-end'>
									<button
										className='px-4 py-1 border-slate-50 border-2 rounded-md text-slate-50 button-shadow text-lg font-bold block mx-auto bg-blue-700'
										onClick={addC}
									>
										Add +
									</button>
								</div>
								<button
									className='px-4 py-2 border-slate-50 border-2 rounded-md text-slate-50 button-shadow text-lg font-bold bg-blue-800'
									onClick={showBalance}
								>
									Show Balance
								</button>
							</div>
						</div>
						<table
							id='myTable'
							className='text-lg w-full'
						>
							<thead>
								<tr className='flex justify-between w-full'>
									<th className='border-b-2'>Index</th>
									<th className='border-b-2'>Candidate name</th>
									<th className='border-b-2'>Candidate votes</th>
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
				) : (
					<h1 className='text-3xl font-semibold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
						You are not the Owner
					</h1>
				)}
			</div>
		</div>
	);
};

export default AdminPage;
