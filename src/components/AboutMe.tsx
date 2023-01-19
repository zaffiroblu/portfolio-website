/* eslint-disable jsx-a11y/anchor-is-valid */
import JenBnW from '../resources/Jen_BnW_cropped.jpg';

export const AboutMe = () => {
	return (
		<>
			<div id='about-me'>
				<div className='about-me-img'>
					<img src={JenBnW} alt='Jen Shivel' />
				</div>
				<div className='about-me-content'>
					<h2 className='section-header'>About me</h2>
					<p className='para-text'>
						I'm a software trainer who is transitioning into a
						career in web development. I work with a mentor and use
						resources available online to learn the ropes in my
						spare time. After teaching hundreds of people how to use
						software applications, I am excited to become one of the
						people building them for the web!
						<br />
						<br />
						I feel empowered while programming, because it allows me
						to create something of value out of essentially nothing
						-- just through writing some good, clean code.
						<br />
						<br />I am looking for a frontend internship to gain
						real-world experience while I continue with the online
						coursework. As my knowledge grows, I will be able to
						take on more responsibility and soon become a full-time,
						fullstack developer.
					</p>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
