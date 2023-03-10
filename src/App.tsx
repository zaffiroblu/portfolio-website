import React from 'react';
import './App.scss';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import CoverSection from './components/CoverSection';
// import Experience from './components/Experience';
import { NavBar } from './components/NavBar';
import Projects from './components/Projects';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<CoverSection />
			<AboutMe />
			<Skills />
			<Projects />
			{/* <Experience />*/}
			<Contact />
		</div>
	);
}

export default App;
