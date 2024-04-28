import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
	return (
		<>
			<button
				className='px-6 py-2 border-slate-50 border-2 rounded-md text-slate-50 button-shadow-big text-lg font-semibold block mx-auto'
				id='st'
				onClick={props.connectWallet}
			>
				{props.isConnected ? 'Metamask Connected' : 'Login Metamask'}
			</button>
			<button
				className='login-button'
				onClick={props.connectWallet}
			></button>
		</>
	);
};

export default Login;
