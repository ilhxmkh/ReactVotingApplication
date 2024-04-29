import React, { useState } from 'react';
import Header from './Header';

const Result = (props) => {
	const [showResult, setShowResult] = useState(false);
	function showResultHandler() {
		setShowResult(true);
	}
	return (
		<div className='mt-8'>
			<Header />
			<div className='text-lg text-center space-y-6'>
				<button
					onClick={showResultHandler}
					className='px-6 py-2 border-slate-50 border-2 rounded-md text-slate-50 button-shadow-big text-lg font-bold block mx-auto bg-blue-700 mb-4 absolute left-1/2 -translate-x-1/2 bottom-[5rem]'
				>
					Show Result
				</button>
				{props.votingStatus ? (
					<h1 className='text-lg'>Counting is Pending</h1>
				) : (
					<h1 className='text-lg'>
						{props.winnerName} won the election by {props.winnerVote} Votes
					</h1>
				)}
				{showResult ? (
					<h1 className='text-2xl font-medium'>
						{props.winnerName} is ahead by {props.winnerVote} Votes
					</h1>
				) : null}
			</div>
		</div>
	);
};

export default Result;
