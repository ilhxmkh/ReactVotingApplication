import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import landingImage from './../assets/hero-image.png';

const LandingPage = (props) => {
	return (
		<div className='px-2 py-6 pb-8 space-y-4 text-slate-50 h-svh relative flex flex-col justify-between md:max-w-7xl md:mx-auto md:py-12'>
			<div className='flex w-full justify-between px-4 md:max-w-5xl mx-auto'>
				<div className='flex items-center gap-2'>
					<img
						src='Logo.svg'
						alt='CryptoCast'
						className='md:w-12'
					/>
					<h1 className='font-black text-lg '>CryptoCast</h1>
				</div>
				<div>
					{props.isConnected ? (
						<button className='px-3 py-1 border-slate-50 border-2 rounded-md text-slate-50 button-shadow md:text-xl'>
							<Link to='adminPage'>Admin</Link>
						</button>
					) : null}
				</div>
			</div>
			<div className='text-center'>
				<h3 className='-mb-0.5 md:text-xl'>Welcome to</h3>
				<h2 className='text-4xl font-semibold -mt-1 md:text-5xl'>CryptoCast</h2>
			</div>
			<div className='md:flex md:mx-auto items-center justify-center gap-12 md:w-3/4'>
				<img
					src={landingImage}
					alt='blockchain illustration'
					className='md:max-h-[60svh] md:object-contain'
				/>
				<div className='-space-y-2.5 md:pb-8'>
					<Login
						connectWallet={props.connectWallet}
						isConnected={props.isConnected}
					/>
					{props.isConnected ? (
						<button className='px-6 py-2 border-slate-50 border-2 rounded-md text-slate-50 button-shadow-big text-lg font-bold block mx-auto bg-blue-700'>
							<Link
								to='vote'
								className='bg-transparent'
							>
								Vote
							</Link>
						</button>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
