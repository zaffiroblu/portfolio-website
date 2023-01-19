/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

export const NavBar = () => {
	const [showSideNavBar, setShowSideNavBar] = useState(false);

	function handleClick() {
		setShowSideNavBar(!showSideNavBar);
	}

	return (
		<header id='header'>
			<nav
				id='header_main-nav'
				className={`${showSideNavBar ? 'clicked' : ''}`}
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
					<li className={`${showSideNavBar ? 'clicked' : ''}`}>
						<a href='#cover-section'>Home</a>
					</li>
					<li className={`${showSideNavBar ? 'clicked' : ''}`}>
						<a href='#about-me'>About Me</a>
					</li>
					<li className={`${showSideNavBar ? 'clicked' : ''}`}>
						<a href='#skills'>Skills</a>
					</li>
					<li className={`${showSideNavBar ? 'clicked' : ''}`}>
						<a href='#projects'>Projects</a>
					</li>
					<li className={`${showSideNavBar ? 'clicked' : ''}`}>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
