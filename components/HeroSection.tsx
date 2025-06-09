'use client';

import React, { useEffect, useState } from 'react';
import Header from './Header';
import NetworkBackground from './NetworkBackground';
import ScrollIndicator from './ScrollIndicator';
import Button from './Button';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [bgReady, setBgReady] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerHeight = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  useEffect(() => {
    const preloadImages = ['/images/hero-bg.jpg'];
    let loadedCount = 0;
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === preloadImages.length) {
          setImagesLoaded(true);
        }
      };
    });
    
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setBgReady(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-[#0c0c14]"
    >
      <div className={`absolute inset-0 transition-opacity duration-1000 ${bgReady ? 'opacity-100' : 'opacity-0'}`}>
        <NetworkBackground />
      </div>
      
      <Header />
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-4 leading-tight text-white animate-fade-in`}
          style={{animationDelay: '200ms'}}
        >
          We craft <span className="text-blue-500">digital</span>
          <br />experiences
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl animate-fade-in`}
          style={{animationDelay: '400ms'}}
        >
          Transforming ideas into stunning, functional websites and applications
        </p>
        
        <div 
          className={`flex flex-col md:flex-row gap-4 animate-fade-in`}
          style={{animationDelay: '600ms'}}
        >
          <Button 
            href="#projects"
            variant="primary"
            onClick={() => handleScroll('#projects')}
            aria-label="View our project portfolio"
          >
            View Our Work
          </Button>
          <Button 
            href="#contact"
            variant="secondary"
            onClick={() => handleScroll('#contact')}
            aria-label="Contact us about your project"
          >
            Get in Touch
          </Button>
        </div>
      </div>
      
      <ScrollIndicator targetId="about" />
    </section>
  );
};

export default HeroSection;