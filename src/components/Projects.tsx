/* eslint-disable jsx-a11y/anchor-is-valid */
import CvGenerator from '../resources/Screenshot_CV-Generator.png';
import WeatherApp from '../resources/Screenshot_weather-app.png';
import WVSite from '../resources/Screenshot_Wahlverwandtschaften.png';
import RPS from '../resources/Screenshot_RPS.png';
import Calc from '../resources/Screenshot_calculator.png';
import TTT from '../resources/Screenshot_TTT.png';

export const Projects = () => {
	return (
		<div id='projects'>
			<h2 className='section-header'>Projects</h2>
			<div id='projects-content-container'>
				<div className='project-container'>
					<div className='project-container-image'>
						<img
							src={CvGenerator}
							alt='CV Generator App'
							id='cv-project'
						/>
					</div>
					<div className='project-container-text'>
						<h3 className='icon-caption'>CV Generator</h3>
						<p className='para-text'>
							Desktop app, built with React Typescript.
						</p>
						<div className='project-links-container'>
							<a
								href='cv-generator-project/index.html'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								Live Demo
							</a>
							<a
								href='https://github.com/zaffiroblu/CV-Generator'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
				<div className='project-container'>
					<div className='project-container-image'>
						<img
							src={WeatherApp}
							alt='Weather-App'
							id='weather-app'
						/>
					</div>
					<div className='project-container-text'>
						<h3 className='icon-caption'>Weather App</h3>
						<p className='para-text'>
							Responsive design, built with the OpenWeatherMap API
							and React.
						</p>
						<div className='project-links-container'>
							<a
								href='weather-app-project/index.html'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								Live Demo
							</a>
							<a
								href='https://github.com/zaffiroblu/react-weather-app'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
				<div className='project-container'>
					<div className='project-container-image'>
						<img
							src={WVSite}
							alt='Wahlverwandtschaften Website'
							id='wv-website'
						/>
					</div>
					<div className='project-container-text'>
						<h3 className='icon-caption'>WV Website</h3>
						<p className='para-text'>
							Responsive design for the "Wahlverwandtschaften"
							group in Berlin, built with JavaScript components.
						</p>
						<div className='project-links-container'>
							<a
								href='/portfolio-website/wv-project/index.html'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								Live Demo
							</a>
							<a
								href='https://github.com/zaffiroblu/wv-berlin/tree/main'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
				<div className='project-container'>
					<div className='project-container-image'>
						<img
							src={TTT}
							alt='Tic-Tac-Toe Project'
							id='ttt-project'
						/>
					</div>
					<div className='project-container-text'>
						<h3 className='icon-caption'>Tic-Tac-Toe</h3>
						<p className='para-text'>
							Built in simple JavaScript with IIFEs and factory
							functions.
						</p>
						<div className='project-links-container'>
							<a
								href='/portfolio-website/tic-tac-toe-project/index.html'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								Live Demo
							</a>
							<a
								href='https://github.com/zaffiroblu/tic-tac-toe-rebooted'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
				<div className='project-container'>
					<div className='project-container-image'>
						<img
							src={RPS}
							alt='Rock, Paper and Scissors Project'
							id='rps-project'
						/>
					</div>
					<div className='project-container-text'>
						<h3 className='icon-caption'>Rock, Paper, Scissors</h3>
						<p className='para-text'>
							An animated game designed for mobile devices, built
							in vanilla JavaScript.
						</p>
						<div className='project-links-container'>
							<a
								href='/portfolio-website/rock-paper-scissors-project/index.html'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								Live Demo
							</a>
							<a
								href='https://github.com/zaffiroblu/Rock-Paper-Scissors-Project/tree/RPS-UI'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
				<div className='project-container'>
					<div className='project-container-image'>
						<img
							src={Calc}
							alt='Calculator Project'
							id='calculator-project'
						/>
					</div>
					<div className='project-container-text'>
						<h3 className='icon-caption'>Calculator</h3>
						<p className='para-text'>Built in simple JavaScript.</p>
						<div className='project-links-container'>
							<a
								href='/portfolio-website/calculator-project/index.html'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								Live Demo
							</a>
							<a
								href='https://github.com/zaffiroblu/calculator-project'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
