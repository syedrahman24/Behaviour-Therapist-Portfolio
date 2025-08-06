import React from 'react';
import './App.css';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stories from './components/Stories';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -11 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Stories />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
