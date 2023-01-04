import CvGenerator from '../resources/Screenshot_CV-Generator.png';

export const Projects = () => {
	return (
		<div
			className='d-flex flex-column justify-content-center align-items-center'
			id='projects'
		>
			<div className='animate-from-left-fade cover-header-text'>
				Projects
			</div>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<div className='projects-container'>
					<div className='container'>
						<img
							src={CvGenerator}
							alt='CV-Project'
							id='cv-project'
						/>
						<div className='overlay cover-subheader-text'>
							CV Generator
						</div>
					</div>
					<div className='container'>
						<img
							src={CvGenerator}
							alt='CV-Project'
							id='cv-project'
						/>
						<div className='overlay cover-subheader-text'>
							Weather App
						</div>
					</div>
					<div className='container'>
						<img
							src={CvGenerator}
							alt='CV-Project'
							id='cv-project'
						/>
						<div className='overlay cover-subheader-text'>
							Wahlverwandtschaften Website
						</div>
					</div>
				</div>
				<div className='projects-container'>
					<div className='container'>
						<img
							src={CvGenerator}
							alt='CV-Project'
							id='cv-project'
						/>
						<div className='overlay cover-subheader-text'>
							Rock, Paper, Scissors
						</div>
					</div>
					<div className='container'>
						<img
							src={CvGenerator}
							alt='CV-Project'
							id='cv-project'
						/>
						<div className='overlay cover-subheader-text'>
							Calculator
						</div>
					</div>
					<div className='container'>
						<img
							src={CvGenerator}
							alt='CV-Project'
							id='cv-project'
						/>
						<div className='overlay cover-subheader-text'>
							Tic-Tac-Toe
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
