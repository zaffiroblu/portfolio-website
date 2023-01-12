/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

export const NavBar = () => {
	const [showNavBar, setShowNavBar] = useState(false);

	function handleClick() {
		setShowNavBar(!showNavBar);
	}

	return (
		<header id='header'>
			<nav
				id='header_main-nav'
				className={`${showNavBar ? 'clicked' : ''}`}
			>
				<div
					className='header_main-nav-hamburger'
					onClick={handleClick}
				>
					<div className='line line1'></div>
					<div className='line line2'></div>
					<div className='line line3'></div>
				</div>
				<ul className='header_main-nav-links'>
					<li className={`${showNavBar ? 'clicked' : ''}`}>
						<a href='#'>Home</a>
					</li>
					<li className={`${showNavBar ? 'clicked' : ''}`}>
						<a href='#'>About Me</a>
					</li>
					<li className={`${showNavBar ? 'clicked' : ''}`}>
						<a href='#'>Abilities</a>
					</li>
					<li className={`${showNavBar ? 'clicked' : ''}`}>
						<a href='#'>Projects</a>
					</li>
					<li className={`${showNavBar ? 'clicked' : ''}`}>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};