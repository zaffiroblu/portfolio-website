/* eslint-disable jsx-a11y/anchor-is-valid */
import JenBnW from '../resources/Jen_BnW_cropped.jpg';

export const AboutMe = () => {
	return (
		<div id='about-me'>
			<div className='about-me-img'>
				<img src={JenBnW} alt='Jen Shivel' />
			</div>
			<div className='about-me-content'>
				<h2 className='about-me-title'>About me</h2>
				<p className='about-me-para'>
					I'm an eLearning expert transitioning into a career in web
					development. I work with a mentor and use resources
					available on Youtube, Udemy, and the Odin Project to learn
					the ropes in my spare time.
					<br />
					<br />I am looking for an internship in frontend development
					to gain real-world experience while I continue with the
					online coursework. As my knowledge grows, I will be able to
					take on more responsibility and soon become a full-time,
					fullstack developer.
				</p>
				<a href='#' className='about-me-link'>
					Read more
				</a>
			</div>
		</div>
	);
};

export default AboutMe;
