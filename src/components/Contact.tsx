/* eslint-disable jsx-a11y/anchor-is-valid */
export const Contact = () => {
	return (
		<div id='contact'>
			<div id='contact-section-content'>
				<h2 className='section-header'>Contact Me!</h2>
				<a
					href='mailto:jenshivel+developer@gmail.com'
					className='contact-content-link'
				>
					Email
				</a>
				<a
					href='https://www.linkedin.com/in/jen-shivel/'
					target='_blank'
					rel='noopener noreferrer'
					className='contact-content-link'
				>
					LinkedIn
				</a>
				<a
					href='https://github.com/zaffiroblu'
					target='_blank'
					rel='noopener noreferrer'
					className='contact-content-link'
				>
					GitHub
				</a>
				<a
					href='files/JenShivel_CV_02-2023_English.pdf'
					download='JenShivel_CV_02-2023_English'
					className='contact-content-link'
				>
					Download CV (Eng)
				</a>
				<a
					href='files/JenShivel_CV_02-2023_Deutsch.pdf'
					download='JenShivel_CV_02-2023_Deutsch'
					className='contact-content-link'
				>
					Download CV (Deu)
				</a>
				{/* <a href='#' className='contact-content-link'>
					Impressum
				</a> */}
			</div>
		</div>
	);
};

export default Contact;
