export const AboutMe = () => {
	return (
		<div className='d-flex flex-column align-items-center m-4'>
			<div className='animate-from-left-fade header-text'>About me</div>
			<div className='d-flex justify-content-center align-items-center'>
				<div className='about-me-content-left'>
					<p>
						Hi! I am an eLearning expert transitioning into a career
						as a fullstack web developer. I'm using resources
						available on Youtube, Udemy, and the Odin Project to
						teach myself the ropes in my spare time. My next goal is
						to land a part-time internship as a frontend developer
						while I continue through the fullstack curriculum.
						During my internship, I would like to become familiar
						with a code base and handle small tickets, then as my
						coding and codebase knowledge grows, start handling
						larger tasks, and transition from an intern to a
						full-time employee.
					</p>
				</div>
				<div className='about-me-content-right'>
					<img
						id='about-me-image'
						src={require('../resources/Screenshot-2022_jen-mit-farben.png')}
						alt='Jen Shivel'
						height='250'
						width='235'
					/>
					<h3>Personal Details</h3>
					<p className='v3'>
						<b>Age:</b> 34
						<br></br>
						<b>Languages:</b>
						English (native) German (fluent)
					</p>
				</div>
			</div>
			<div className='animate-from-left-fade header-text'>
				My Approach
			</div>
			<div className='d-flex justify-content-end align-items-center'>
				<p id='approach'>
					I have sure learned a great deal over the last few months,
					but the biggest lesson of all for me has been this: Having
					the right attitude is the basis for everything else. That
					means that it's important to stay curious and to celebrate
					the little victories in coding. It also involves knowing
					when it's best to take a 10-minute break, walk away, and
					come back with fresh eyes. It helps me to do something
					totally unrelated, like chopping vetegables or playing the
					piano. I have come to say: The more complex a task is, the
					more patience I bring to the task, and the more satisfied I
					feel while solving it!
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
