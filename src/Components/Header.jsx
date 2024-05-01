import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';
import hamburgerIcon from './../assets/menu.svg';
import closeIcon from './../assets/closeIcon.svg';

function Header() {
	const navigate = useNavigate();

	const navItems = [
		{ name: 'Home', slug: '/', active: true },
		{ name: 'Vote', slug: '/vote', active: true },
		{ name: 'Admin', slug: '/adminPage', active: true },
		{ name: 'Result', slug: '/result', active: true },
	];

	const [openMenu, setOpenMenu] = useState(false);

	function toggleMenu() {
		setOpenMenu(!openMenu);
		console.log('menu is open ?', openMenu);
	}

	// Filter the navItems to keep only the first four
	const filteredNavItems = navItems.slice(0, 4);

	return (
		<div className='relative flex md:max-w-6xl md:mx-auto items-center justify-between md:py-4 md:mb-4'>
			<HeaderLogo />
			<header className=''>
				<nav className=''>
					<ul
						className={`justify-between md:gap-4 md:flex ${
							openMenu
								? 'flex absolute top-0 left-0 flex-col w-full bg-zinc-950 pb-4'
								: 'hidden'
						}`}
					>
						{openMenu && (
							<button
								className=' ml-auto mr-3 mt-5 '
								onClick={toggleMenu}
							>
								<img
									src={closeIcon}
									alt='close menu icon'
									className='md:hidden w-8'
								/>
							</button>
						)}
						{filteredNavItems.map((item) => (
							<li
								key={item.name}
								className='inline-bock font-semibold text-2xl py-3 px-2.5 cursor-pointer basis-1/4 text-center bg-inherit'
							>
								<button
									onClick={() => navigate(item.slug)}
									className='md:text-[1.42rem]  md:hover:underline underline-offset-8'
								>
									{item.name}
								</button>
							</li>
						))}
					</ul>
				</nav>
				<button
					className='p-2'
					onClick={toggleMenu}
				>
					<img
						src={hamburgerIcon}
						alt='menu icon'
						className='md:hidden w-8'
					/>
				</button>
			</header>
		</div>
	);
}

export default Header;
