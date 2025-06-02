'use client'; // Add this to mark it as a client component

import React from 'react';
import Header from './Header';
import NetworkBackground from './NetworkBackground';
import ScrollIndicator from './ScrollIndicator';
import Button from './Button';

const HeroSection: React.FC = () => {
  // Add scroll handling function directly in the component
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#0c0c14]">
      <NetworkBackground />
      <Header />
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-white">
          We craft <span className="text-blue-500">digital</span>
          <br />experiences
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl">
          Transforming ideas into stunning, functional websites and applications
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <Button 
            href="#works" 
            variant="primary"
            onClick={() => handleScroll('#works')}
          >
            View Our Work
          </Button>
          <Button 
            href="#contact"
            variant="secondary"
            onClick={() => handleScroll('#contact')}
          >
            Get in Touch
          </Button>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;