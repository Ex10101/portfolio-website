'use client';

import React, { useState } from 'react';

const Logo: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a 
      href="#home" 
      className="flex items-center group"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-blue-600 rounded-lg w-10 h-10 flex items-center justify-center transition-transform duration-300 hover:scale-105">
        <span className={`font-bold text-white text-xl transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>D</span>
        <span className={`absolute inset-0 bg-blue-500 transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}></span>
      </div>
      <span className="font-bold text-white text-xl ml-2 transition-colors duration-300 group-hover:text-blue-400">DevDuo</span>
    </a>
  );
};

export default Logo;