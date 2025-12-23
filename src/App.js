import './styles/index.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const getInitialTheme = () => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      // Default to dark SpaceX theme
      return true
    } catch (e) {
      return true
    }
  }

  const [dark, setDark] = useState(getInitialTheme)

  useEffect(() => {
    try {
      document.documentElement.classList.toggle('dark', dark)
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch (e) {
      // ignore
    }
  }, [dark]);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href !== '#') {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-spacex-black text-spacex-text transition-colors duration-300">
        <Navbar dark={dark} setDark={setDark} />
        <main className="container-max mt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
