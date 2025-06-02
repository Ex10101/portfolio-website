'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('#home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  // Check for scroll position to change header style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active link based on section in view
      const sections = ['#home', '#about', '#works', '#tech', '#contact'];
      for (const id of sections.reverse()) {
        const section = document.querySelector(id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          setActiveLink(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleClick = (href: string) => {
    setActiveLink(href);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-500 ${
        scrolled ? 'bg-[#0c0c14]/80 backdrop-blur-lg shadow-md py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center space-x-12">
          {[
            { href: '#about', label: 'ABOUT' },
            { href: '#works', label: 'WORKS' },
            { href: '#tech', label: 'TECH' },
            { href: '#contact', label: 'CONTACT' }
          ].map(({ href, label }) => (
            <a 
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(href);
              }}
              onMouseEnter={() => setHoveredLink(href)}
              onMouseLeave={() => setHoveredLink(null)}
              className="group relative py-2 px-1"
            >
              <span className={`relative z-10 ${
                activeLink === href ? 'text-blue-400' : 'text-white'
              } transition-colors duration-300 group-hover:text-blue-400`}>
                {label}
              </span>
              
              {/* Bottom line animation */}
              <span 
                className={`absolute left-0 bottom-0 w-full h-0.5 ${
                  activeLink === href ? 'bg-blue-400 scale-x-100' : 'bg-blue-400 scale-x-0'
                } origin-left transition-transform duration-300 group-hover:scale-x-100`}
              />
              
              {/* Background highlight animation */}
              <span 
                className={`absolute inset-0 rounded-md bg-blue-500/10 ${
                  hoveredLink === href || activeLink === href ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}
              />
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleClick('#contact');
            }}
            className="relative inline-block px-6 py-2 overflow-hidden group rounded-full border border-blue-600"
          >
            <span className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"/>
            <span className="relative text-blue-400 group-hover:text-white transition-colors duration-300">
              Get in Touch
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;