import React from 'react';
import { useState } from 'react';
import Login from './Login';
import Header from './Header';
import backg from './back.gif';

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
		<div className='pt-8'>
			<Header />
			<div className='login-container'>
				<Login
					connectWallet={props.connectWallet}
					isConnected={props.isConnected}
				/>
				{props.isOwner ? (
					<>
						<input
							type='text'
							placeholder='Enter Candidate Name'
							value={name}
							onChange={handleAddCandidate}
						></input>
						<button
							className='login-button'
							onClick={addC}
						>
							Add
						</button>
						<button
							className='login-button'
							onClick={showBalance}
						>
							Show Balance
						</button>

						<table
							id='myTable'
							className='candidates-table'
						>
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
					</>
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
