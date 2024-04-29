import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();

	const navItems = [
		{ name: 'Home', slug: '/', active: true },
		{ name: 'Vote', slug: '/vote', active: true },
		{ name: 'Admin', slug: '/adminPage', active: true },
		{ name: 'Result', slug: '/result', active: true },
	];

	// Filter the navItems to keep only the first four
	const filteredNavItems = navItems.slice(0, 4);

	return (
		<header className='absolute w-full bottom-0 left-0 bg-zinc-500'>
			<nav>
				<ul className='flex justify-between '>
					{filteredNavItems.map((item) => (
						<li
							key={item.name}
							className='inline-bock font-semibold text-xl py-3 px-2.5 cursor-pointer basis-1/4 text-center bg-zinc-950'
						>
							<button
								onClick={() => navigate(item.slug)}
								className=''
							>
								{item.name}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
