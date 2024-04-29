import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const HeaderLogo = (props) => {
	return (
		<div className='flex w-full justify-between px-4 md:max-w-5xl mx-auto  py-4'>
			<div className='flex items-center gap-2'>
				<img
					src='Logo.svg'
					alt='CryptoCast'
				/>
				<h1 className='font-black text-lg '>CryptoCast</h1>
			</div>
		</div>
	);
};

export default HeaderLogo;
