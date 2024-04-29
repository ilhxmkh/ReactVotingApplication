import React, { useState } from 'react';
import Login from './Login';
import Header from './Header';

const Connected = (props) => {
	// const [tokenStatus, setTokenStatus] = useState()
	// function tokenStatusHandler(){

	//     setTokenStatus(props.tokenStatus)
	//     }
	return (
		<div className='pt-8 px-4 h-svh'>
			{props.isConnected && <Header />}
			<Login
				connectWallet={props.connectWallet}
				isConnected={props.isConnected}
			/>
			<div className='connected-container'>
				<div className='connected-info text-2xl text-center font-semibold'>
					{props.isConnected ? (
						<div>
							<button
								className='px-6 py-2 border-slate-50 border-2 rounded-md text-slate-50 button-shadow-big text-lg font-bold block mx-auto bg-blue-700 mb-4'
								onClick={props.getToken}
							>
								Get Token
							</button>
							<p className='mb-4'>
								Remaining Time:{' '}
								<span className='text-3xl'>
									{props.remainingTime || '11:22:98'}{' '}
								</span>
							</p>
							<div>
								{(() => {
									if (props.showButton) {
										return (
											<p className='px-2 py-4 capitalize bg-green-800 rounded-md mb-8'>
												You have already voted
											</p>
										);
									} else if (!props.tokenStatus) {
										return (
											<p className='px-2 py-4 capitalize bg-red-800 rounded-md mb-8'>
												No Voting Token
											</p>
										);
									} else {
										return (
											<div>
												<input
													type='number'
													placeholder='Enter Candidate Index'
													value={props.number}
													onChange={props.handleNumberChange}
												/>
												<br />
												<button
													className='login-button'
													onClick={props.voteFunction}
												>
													Vote
												</button>
											</div>
										);
									}
								})()}
							</div>

							<div className='candidates-table-container'>
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
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Connected;
