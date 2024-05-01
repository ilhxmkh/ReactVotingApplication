import React from 'react';
import { useState } from 'react';
import Login from './Login';
import Header from './Header';
import HeaderLogo from './HeaderLogo';
import { Link } from 'react-router-dom';

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
			<div className='flex justify-between items-center pr-4 md:max-w-6xl md:mx-auto'>
				{props.isOwner ? (
					<button className='px-3 py-1 border-slate-50 border-2 rounded-md text-slate-50 button-shadow font-semibold '>
						<Link to='/createElection'>Create</Link>
					</button>
				) : null}
			</div>
			<Header />
			<div className='login-container'>
				<Login
					connectWallet={props.connectWallet}
					isConnected={props.isConnected}
				/>
				{props.isOwner ? (
					<div className='space-y-4 mt-2 text-lg px-3 md:space-y-12'>
						<div className='space-y-4'>
							<input
								type='text'
								placeholder='Enter Candidate Name'
								value={name}
								onChange={handleAddCandidate}
								className='border-b-2 w-full text-center font-bold mb-2 md:max-w-xl md:mx-auto md:block md:my-4 md:mb-8'
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
						<div className='max-w-5xl mx-auto md:mt-16'>
							<table
								id='myTable'
								className='text-lg w-full'
							>
								<thead>
									<tr className='flex justify-between w-full text-center'>
										<th className='border-b-2 md:text-2xl'>Index</th>
										<th className='border-b-2 md:text-2xl'>Candidate name</th>
										<th className='border-b-2 md:text-2xl'>Candidate votes</th>
									</tr>
								</thead>
								<tbody className='w-full'>
									{props.candidates?.map((candidate, index) => (
										<tr
											key={index}
											className='flex justify-between w-full mt-2'
										>
											<td className='md:text-xl font-bold'>
												{candidate.index}
											</td>
											<td className='md:text-xl font-bold'>{candidate.name}</td>
											<td className='md:text-xl font-bold'>
												{candidate.voteCount}
											</td>
										</tr>
									))}
									{/* <tr className='flex justify-between w-full mt-2'>
										<td className='md:text-xl font-bold'>01</td>
										<td className='md:text-xl font-bold'>Danish Asad</td>
										<td className='md:text-xl font-bold'>69420</td>
									</tr>
									<tr className='flex justify-between w-full mt-2'>
										<td className='md:text-xl font-bold'>01</td>
										<td className='md:text-xl font-bold'>Danish Asad</td>
										<td className='md:text-xl font-bold'>69420</td>
									</tr> */}
								</tbody>
							</table>
						</div>
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
