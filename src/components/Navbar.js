import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import data from '../data/data.json'

function Navbar({ dark, setDark }) {
  const { fullName, email, phone, socialLinks } = data.data
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useTransform(scrollY, [0, 100], ['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.95)'])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleHireMeClick = (e) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 bg-spacex-black border-b border-spacex-gray z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      style={{ 
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.8)'
      }}
    >
      <div className="container-max flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-spacex-text text-spacex-black flex items-center justify-center font-semibold">{fullName.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
          <span className="font-semibold text-spacex-text">{fullName}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {['About', 'Skills', 'Experience', 'Education', 'Certifications', 'Projects', 'Contact'].map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-spacex-text-gray hover:text-spacex-text transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 + 0.3, duration: 0.3 }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.3 }}
          >
            <Link to="/projects" className="text-sm text-spacex-text-gray hover:text-spacex-text transition-colors">All Projects</Link>
          </motion.div>
          <motion.a 
            href="#contact" 
            onClick={handleHireMeClick}
            className="ml-2 inline-flex items-center px-4 py-2 bg-spacex-text text-spacex-black rounded spacex-glow"
            title={`Contact me: ${email}${phone ? ` | ${phone}` : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
          <button
            onClick={() => setDark(!dark)}
            className="ml-3 p-2 rounded bg-spacex-gray hover:bg-spacex-light-gray transition text-spacex-text"
            aria-label="Toggle color theme"
            title="Theme toggle (SpaceX theme is always dark)"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM10 16a.75.75 0 01.75.75V18a.75.75 0 01-1.5 0v-1.25A.75.75 0 0110 16zM4.22 4.22a.75.75 0 011.06 0l.88.88a.75.75 0 11-1.06 1.06l-.88-.88a.75.75 0 010-1.06zM13.84 13.84a.75.75 0 011.06 0l.88.88a.75.75 0 11-1.06 1.06l-.88-.88a.75.75 0 010-1.06zM2 10a.75.75 0 01.75-.75H4a.75.75 0 010 1.5H2.75A.75.75 0 012 10zM16 10a.75.75 0 01.75-.75H18a.75.75 0 010 1.5h-1.25A.75.75 0 0116 10zM4.22 15.78a.75.75 0 010-1.06l.88-.88a.75.75 0 011.06 1.06l-.88.88a.75.75 0 01-1.06 0zM13.84 6.16a.75.75 0 010-1.06l.88-.88a.75.75 0 011.06 1.06l-.88.88a.75.75 0 01-1.06 0zM10 5.5A4.5 4.5 0 1010 14.5 4.5 4.5 0 0010 5.5z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
              </svg>
            )}
          </button>
        </nav>

        <div className="md:hidden relative">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-spacex-text" 
            aria-label="open menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          {mobileMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-spacex-gray border border-spacex-light-gray rounded-lg shadow-lg py-2 z-50">
              {['About', 'Skills', 'Experience', 'Education', 'Certifications', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block px-4 py-2 text-sm text-spacex-text-gray hover:bg-spacex-light-gray hover:text-spacex-text transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={handleHireMeClick}
                className="block mx-2 mt-2 px-4 py-2 text-sm text-center bg-spacex-text text-spacex-black rounded hover:bg-spacex-text-gray transition-colors"
                title={`Contact me: ${email}${phone ? ` | ${phone}` : ''}`}
              >
                Hire Me
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar
