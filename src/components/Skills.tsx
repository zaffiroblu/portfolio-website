import HTMLicon from '../resources/HTML5.svg';
import CSSicon from '../resources/CSS3.svg';
import JavaScriptIcon from '../resources/JavaScript.svg';
import TypeScriptIcon from '../resources/typescript.svg';
import ReactIcon from '../resources/react.svg';
import BootstrapIcon from '../resources/bootstrap.svg';
import GitIcon from '../resources/git.svg';
import GitHubIcon from '../resources/github.svg';
import npmIcon from '../resources/npm.svg';
import webpackIcon from '../resources/webpack.svg';
import FigmaIcon from '../resources/figma.svg';
import AdobeXDIcon from '../resources/adobexd.svg';
import Skills2 from './Skills2';

const Skills = () => {
	return (
		<div id='skills'>
			<h2 className='section-header'>Skills</h2>
			<div id='skills-container-1'>
				<div id='skills-column-1'>
					<div className='section-subheader'>
						Languages and Frameworks
					</div>
					<div id='skills-languages-frameworks'>
						<div className='skills-icon-container'>
							<img
								src={HTMLicon}
								alt='HTML icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>HTML5</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={CSSicon}
								alt='CSS icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>CSS3</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={JavaScriptIcon}
								alt='JavaScript icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>
								JavaScript
							</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={TypeScriptIcon}
								alt='TypeScript icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>
								Typescript
							</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={ReactIcon}
								alt='React icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>React</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={BootstrapIcon}
								alt='Bootstrap icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>
								Bootstrap
							</div>
						</div>
					</div>
				</div>
				<div id='skills-column-2'>
					<div className='section-subheader'>Development Tools</div>
					<div id='skills-development-tools'>
						<div className='skills-icon-container'>
							<img
								src={GitIcon}
								alt='Git icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>git</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={GitHubIcon}
								alt='GitHub icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>GitHub</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={npmIcon}
								alt='npm icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>npm</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={webpackIcon}
								alt='webpack icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>webpack</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={FigmaIcon}
								alt='Figma icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>Figma</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={AdobeXDIcon}
								alt='AdobeXD icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>Adobe XD</div>
						</div>
					</div>
				</div>
			</div>
			<Skills2 />
		</div>
	);
};

export default Skills;
