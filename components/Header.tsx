'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('#home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  
  const navItems = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#tech', label: 'TECH' }, 
    { href: '#contact', label: 'CONTACT' }
  ];
  
  const handleClick = useCallback((href: string) => {
    if (isScrolling) return; 
    
    setActiveLink(href);
    setMobileMenuOpen(false);
    setIsScrolling(true);
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    } else {
      setIsScrolling(false); 
    }
  }, [isScrolling]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      if (isScrolling) return;
      
      const sections = navItems.map(item => item.href.substring(1));
      
      let maxVisibleSection = '';
      let maxVisiblePercentage = 0;
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const topOffset = rect.top + window.scrollY;
          const bottomOffset = topOffset + section.offsetHeight;
          
          if (scrollPosition >= topOffset && scrollPosition <= bottomOffset) {
            const visiblePercentage = 
              (Math.min(scrollPosition, bottomOffset) - Math.max(topOffset, window.scrollY)) / 
              section.offsetHeight;
            
            if (visiblePercentage > maxVisiblePercentage) {
              maxVisiblePercentage = visiblePercentage;
              maxVisibleSection = sectionId;
            }
          }
        }
      });
      
      if (maxVisibleSection) {
        setActiveLink(`#${maxVisibleSection}`);
      }
    };

    let timeout: NodeJS.Timeout;
    
    const throttledScrollHandler = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleScroll();
          timeout = null;
        }, 100);
      }
    };

    window.addEventListener('scroll', throttledScrollHandler);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      clearTimeout(timeout);
    };
  }, [navItems, isScrolling]);
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        mobileMenuOpen && 
        !target.closest('button[aria-label="Toggle menu"]') && 
        !target.closest('.mobile-menu-container')
      ) {
        setMobileMenuOpen(false);
      }
    };
    
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0c0c14]/90 backdrop-blur-lg shadow-md py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navItems.slice(1).map(({ href, label }) => ( 
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
              aria-current={activeLink === href ? 'page' : undefined}
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
                aria-hidden="true"
              />
              
              {/* Background highlight animation */}
              <span 
                className={`absolute inset-0 rounded-md bg-blue-500/10 ${
                  hoveredLink === href || activeLink === href ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleClick('#contact');
            }}
            className="relative inline-block px-6 py-2 overflow-hidden group rounded-full border border-blue-600"
          >
            <span className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true"/>
            <span className="relative text-blue-400 group-hover:text-white transition-colors duration-300">
              Get in Touch
            </span>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 p-2 z-50"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} aria-hidden="true"></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} aria-hidden="true"></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} aria-hidden="true"></span>
        </button>
        
        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-[#0c0c14]/95 z-40 flex items-center justify-center transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden mobile-menu-container`}
          aria-hidden={!mobileMenuOpen}
        >
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map(({ href, label }) => (
              <a 
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(href);
                }}
                className={`text-2xl font-medium ${
                  activeLink === href ? 'text-blue-400' : 'text-white'
                } hover:text-blue-400 transition-colors duration-300`}
                aria-current={activeLink === href ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
            
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick('#contact');
              }}
              className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;