/* eslint-disable jsx-a11y/anchor-is-valid */
import JenBnW from '../resources/Jen_BnW_cropped.jpg';
import { MoreAboutMe } from './MoreAboutMe';
import { useState } from 'react';

export const AboutMe = () => {
	const [showReadMore, setShowReadMore] = useState(false);

	function handleClick() {
		setShowReadMore(!showReadMore);
	}
	return (
		<>
			<div id='about-me'>
				<div className='about-me-img'>
					<img src={JenBnW} alt='Jen Shivel' />
				</div>
				<div className='about-me-content'>
					<h2 className='about-me-title'>About me</h2>
					<p className='about-me-para'>
						I'm an eLearning expert transitioning into a career in
						web development. I work with a mentor and use resources
						available on Youtube, Udemy, and the Odin Project to
						learn the ropes in my spare time.
						<br />
						<br />I am looking for an internship in frontend
						development to gain real-world experience while I
						continue with the online coursework. If you have a niche
						system in need of an expert, I am the perfect candidate,
						since I willing to go through the training to learn that
						system! As my knowledge grows, I will be able to take on
						more responsibility and soon become a full-time,
						fullstack developer.
					</p>
					<button className='about-me-link' onClick={handleClick}>
						Read more
					</button>
				</div>
			</div>
			{showReadMore ? <MoreAboutMe /> : null}
		</>
	);
};

export default AboutMe;
