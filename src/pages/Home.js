import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import SpacexEarth from '../components/SpacexEarth'

const Home = () => {
  return (
    <div className="relative">
      {/* Global SpaceX planet background */}
      <div className="fixed top-6 right-0 w-64 h-64 md:w-80 md:h-80 opacity-90 pointer-events-none z-0">
        <SpacexEarth />
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects limit={4} />
        <Contact />
      </div>
    </div>
  )
}

export default Home
