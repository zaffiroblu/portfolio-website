import HTMLicon from '../resources/HTML5.svg';
import CSSicon from '../resources/CSS3.svg';
import JavaScriptIcon from '../resources/JavaScript.svg';
import TypeScriptIcon from '../resources/typescript.svg';
import ReactIcon from '../resources/react.svg';
import BootstrapIcon from '../resources/bootstrap.svg';
import SassIcon from '../resources/sass.svg';
import GitIcon from '../resources/git.svg';
import GitHubIcon from '../resources/github.svg';
import npmIcon from '../resources/npm.svg';
import webpackIcon from '../resources/webpack.svg';
import FigmaIcon from '../resources/figma.svg';
import AdobeXDIcon from '../resources/adobexd.svg';

export const Abilities = () => {
	return (
		<div
			className='d-flex flex-column justify-content-center align-items-center'
			id='abilities'
		>
			<div className='animate-from-left-fade m-4 header-text'>
				Abilities
			</div>
			<div className='d-flex justify-content-center align-items-center'>
				<div className='d-flex flex-column align-items-center m-3'>
					<div>Languages and Frameworks</div>
					<div>
						<div className='d-flex'>
							<div className='d-flex flex-column justify-content-center align-items-center'>
								<img
									src={HTMLicon}
									alt='HTML icon'
									className='icon'
								/>
								<div>HTML5</div>
							</div>
							<div className='d-flex flex-column justify-content-center align-items-center'>
								<img
									src={CSSicon}
									alt='CSS icon'
									className='icon'
								/>
								<div>CSS3</div>
							</div>
						</div>
						<div className='d-flex'>
							<div className='d-flex flex-column justify-content-center align-items-center'>
								<img
									src={JavaScriptIcon}
									alt='JavaScript icon'
									className='icon'
								/>
								<div>JavaScript</div>
							</div>
							<div className='d-flex flex-column justify-content-center align-items-center'>
								<img
									src={TypeScriptIcon}
									alt='TypeScript icon'
									className='icon'
								/>
								<div>Typescript</div>
							</div>
							<div className='d-flex flex-column justify-content-center align-items-center'>
								<img
									src={ReactIcon}
									alt='React icon'
									className='icon'
								/>
								<div>React</div>
							</div>
						</div>
						<div className='d-flex'>
							<div className='d-flex flex-column justify-content-center align-items-center'>
								<img
									src={SassIcon}
									alt='Sass icon'
									className='icon'
								/>
								<div>SASS</div>
							</div>
							<div className='d-flex flex-column justify-content-center align-items-center'>
								<img
									src={BootstrapIcon}
									alt='Bootstrap icon'
									className='icon'
								/>
								<div>Bootstrap</div>
							</div>
						</div>
					</div>
				</div>
				<div className='d-flex flex-column align-items-center  m-3'>
					<div>Development Tools</div>
					<div className='d-flex'>
						<div className='d-flex flex-column justify-content-center align-items-center'>
							<img
								src={GitIcon}
								alt='Git icon'
								className='icon'
							/>
							<div>git</div>
						</div>
						<div className='d-flex flex-column justify-content-center align-items-center'>
							<img
								src={GitHubIcon}
								alt='GitHub icon'
								className='icon'
							/>
							<div>GitHub</div>
						</div>
					</div>
					<div className='d-flex'>
						<div className='d-flex flex-column justify-content-center align-items-center'>
							<img
								src={npmIcon}
								alt='npm icon'
								className='icon'
							/>
							<div>npm</div>
						</div>
						<div className='d-flex flex-column justify-content-center align-items-center'>
							<img
								src={webpackIcon}
								alt='webpack icon'
								className='icon'
							/>
							<div>webpack</div>
						</div>
					</div>
					<div className='d-flex'>
						<div className='d-flex flex-column justify-content-center align-items-center'>
							<img
								src={FigmaIcon}
								alt='Figma icon'
								className='icon'
							/>
							<div>Figma</div>
						</div>
						<div className='d-flex flex-column justify-content-center align-items-center'>
							<img
								src={AdobeXDIcon}
								alt='AdobeXD icon'
								className='icon'
							/>
							<div>Adobe XD</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Abilities;
