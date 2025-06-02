'use client';

import React from 'react';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ href, variant = 'primary', children, onClick }) => {
  const styles = {
    primary: 'bg-blue-600 text-white hover:shadow-lg hover:shadow-blue-600/20',
    secondary: 'bg-transparent border border-white/20 text-white hover:border-white/40'
  };
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`relative overflow-hidden group rounded-full ${styles[variant]} px-8 py-3 transition-all duration-300 inline-block`}
    >
      <span className={`absolute inset-0 ${variant === 'primary' ? 'bg-blue-700' : 'bg-blue-600/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
      <span className="relative z-10">{children}</span>
    </a>
  );
};

export default Button;