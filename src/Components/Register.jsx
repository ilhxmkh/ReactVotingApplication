import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account, ID } from '../lib/appwrite';
import HeaderLogo from './HeaderLogo';

// PAGE ROUTE IS /LOGIN

const Register = (props) => {
	const [phone, setPhone] = useState('');
	const [otp, setOtp] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [userId, setUserId] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const navigate = useNavigate();

	const sendOtp = async () => {
		const sessionToken = await account.createPhoneSession(phone, '+91' + phone);

		const userid = await sessionToken.userId;
		setUserId(userid);

		console.log(sessionToken);
		console.log(userid);
		console.log(userId);
		// sessionToken.then( function(res){
		//     setUserId( res.userId)
		// //    userIdArr = userId.split('')

		//     console.log(res)
		//     console.log("resID " + res.$id)
		//     console.log("user id" + res.userId)
		//     console.log("user id 2" + userId)
		// },function(err){
		//     console.log(err)
		// })
	};

	const login = async () => {
		const session = account.updatePhoneSession(phone, otp);
		session.then(
			function (res) {
				console.log('resID login' + res.$id);
				console.log('user id login ' + userId);
				console.log(res);
				navigate('');
				setIsLoggedIn(true);
			},
			function (err) {
				console.log('user id' + userId);
				console.log(err);
			}
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// createService();

		if (!phone) {
			setEmailError('Phone Number is Required!');
			return;
		}

		// if (!otp) {
		//   setPasswordError("Password is required");
		//   return;
		// }

		login();

		// Here, you would send the email and password to your backend for verification.
		// If the verification is successful, you would redirect the user to the home page.
	};

	return (
		<div className='px-2 space-y-4 pt-2'>
			<HeaderLogo />
			<div className='text-center pt-16'>
				<h3 className='-mb-0.5 md:text-xl'>Welcome to</h3>
				<h2 className='text-4xl font-semibold -mt-1 md:text-5xl'>CryptoCast</h2>
			</div>
			<div className='px-3 space-y-4 text-lg '>
				{isLoggedIn ? (
					<form
						onSubmit={handleSubmit}
						className='px-6 top-1/2 absolute -translate-y-1/2 left-1/2 -translate-x-1/2 w-full md:w-1/4 md:mt-8'
					>
						<div className='flex gap-3 justify-between space-y-4'>
							<input
								type='phone'
								placeholder='Phone'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className='border-b-2 pl-1 font-bold mt-4'
							/>
							{emailError && (
								<p className='absolute top-80 left-1/2 -translate-x-1/2 text-xl text-blue-200 font-medium w-full text-center'>
									{emailError}
								</p>
							)}
							<button
								onClick={() => {
									sendOtp();
									setDisabled(false);
								}}
								className='px-3 py-1 border-slate-50 border-2 rounded-md text-slate-50 button-shadow text-base font-semibold shrink-0'
							>
								Get OTP
							</button>
						</div>
						<div className=' space-y-8 mt-6'>
							<input
								type='text'
								placeholder='OTP'
								value={otp}
								onChange={(e) => setOtp(e.target.value)}
								className='block border-b-2 w-full text-xl text-center'
							/>
							{passwordError && (
								<p className='error-message'>{passwordError}</p>
							)}
							<button
								type='submit'
								className='px-4 py-1 border-slate-50 border-2 rounded-md text-slate-50 button-shadow text-base font-semibold bg-blue-700 mt-4 block mx-auto w-28'
							>
								Login
							</button>
						</div>
					</form>
				) : null}
			</div>
		</div>
	);
};

export default Register;
