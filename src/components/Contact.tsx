export const Contact = () => {
	return (
		<div
			className='d-flex flex-column justify-content-center align-items-center'
			id='contact'
		>
			<div className='animate-from-left-fade header-text'>Contact</div>
			<div className='contact-content'></div>
			<div className='contact-content-email'>
				<h2 className='subheading'>Email</h2>
				<a href='#' className='contact_button'>
					jen.shivel@vibrant-learning.online
				</a>
			</div>
			<div className='contact-content-social-media'>
				<h2 className='subheading'>Social Media</h2>
				<a
					href='https://www.linkedin.com/in/jen-shivel/'
					className='contact_button'
				>
					linkedin.com/in/jenshivel
				</a>
				<a
					href='https://www.xing.com/profile/Jennifer_Shivel/cv'
					className='contact_button'
				>
					xing.com/profile/Jennifer_Shivel/cv
				</a>
			</div>
			<a href='http://www.google.com' className='contact_button'>
				Impressum
			</a>
		</div>
	);
};

export default Contact;
