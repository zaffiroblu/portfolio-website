import React from 'react';
import './App.scss';
import Abilities from './components/Abilities';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import CoverPage from './components/CoverPage';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
	return (
		<div className='App'>
			<CoverPage />
			<AboutMe />
			<Abilities />
			<Projects />
			<Experience />
			<Contact />
		</div>
	);
}

export default App;
