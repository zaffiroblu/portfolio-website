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
							Built with React Typescript.
						</p>
						<div className='project-links-container'>
							<a href='#' className='project-link'>
								Live Demo
							</a>
							<a href='#' className='project-link'>
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
							<a href='#' className='project-link'>
								Live Demo
							</a>
							<a href='#' className='project-link'>
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
							For the 'Wahlverwandtschaften' group in Berlin,
							built with JavaScript components.
						</p>
						<div className='project-links-container'>
							<a href='#' className='project-link'>
								Live Demo
							</a>
							<a href='#' className='project-link'>
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
							Can you beat this mobile game, built in vanilla
							JavaScript?
						</p>
						<div className='project-links-container'>
							<a href='#' className='project-link'>
								Live Demo
							</a>
							<a href='#' className='project-link'>
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
							A JavaScript game to play with a friend when you
							don't have spare paper.
						</p>
						<div className='project-links-container'>
							<a href='#' className='project-link'>
								Live Demo
							</a>
							<a href='#' className='project-link'>
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
						<p className='para-text'>
							A pretty nifty calculator, built in simple
							JavaScript.
						</p>
						<div className='project-links-container'>
							<a href='#' className='project-link'>
								Live Demo
							</a>
							<a href='#' className='project-link'>
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
