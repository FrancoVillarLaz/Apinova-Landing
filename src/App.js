import React from 'react';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <><Header />
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />  
    <Footer />
    </>
  );
}

export default App;
