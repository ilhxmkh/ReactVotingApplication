import React, { useState } from 'react';
import Login from './Login';
import Header from './Header';

const Connected = (props) => {
	// const [tokenStatus, setTokenStatus] = useState()
	// function tokenStatusHandler(){

	//     setTokenStatus(props.tokenStatus)
	//     }
	return (
		<div className='pt-8 px-4 h-svh overflow-clip'>
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
											<p className='px-2 py-4 capitalize bg-green-800 rounded-md mb-8 block md:w-max md:mx-auto md:px-6'>
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

							<div className='max-w-5xl mx-auto md:mt-16'>
								<table
									id='myTable'
									className='text-lg w-full'
								>
									<thead>
										<tr className='flex justify-between w-full text-center'>
											<th className='border-b-2 md:text-2xl'>Index</th>
											<th className='border-b-2 md:text-2xl'>Candidate name</th>
											<th className='border-b-2 md:text-2xl'>
												Candidate votes
											</th>
										</tr>
									</thead>
									<tbody className='flex justify-between w-full'>
										{props.candidates?.map((candidate, index) => (
											<tr
												key={index}
												className='flex justify-between w-full mt-2'
											>
												<td className='md:text-xl'>{candidate.index}</td>
												<td className='md:text-xl'>{candidate.name}</td>
												<td className='md:text-xl'>{candidate.voteCount}</td>
											</tr>
										))}
										{/* <tr className='flex justify-between w-full mt-2'>
											<td className='md:text-xl'>01</td>
											<td className='md:text-xl'>Danish Asad</td>
											<td className='md:text-xl'>69420</td>
										</tr> */}
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
