import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import TimeLine from './TimeLine';
import Hobbies from './Hobbies';
import Footer from './Footer';


function App() {
  return (
    <>
      <NavBar/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <TimeLine/>
      <Hobbies/>
      <Footer/>
    </>
  );
}

export default App;
