import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HeroSection from './components/hero-section';
import Skills from './components/skills-section';
import Projects from './components/projects';
import ProjectDetails from './components/project-detail';
import Contact from './components/contacts';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <Skills />
              <Projects />
              <Contact/>
            </>
          } 
        />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
