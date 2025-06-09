'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  'aria-label': ariaLabel,
}) => {
  const baseStyles = "inline-block px-6 py-3 font-medium rounded-full text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";
  
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10",
    outline: "bg-transparent border border-white/30 text-white hover:border-white"
  };
  
  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-blue-700 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></span>
      )}
    </>
  );
  
  // Use a real button for onClick without href
  if (!href && onClick) {
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} relative overflow-hidden ${className}`}
        disabled={disabled}
        type={type}
        aria-label={ariaLabel}
      >
        {buttonContent}
      </button>
    );
  }
  
  // Use anchor with href
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        if (onClick && !disabled) onClick();
      }}
      className={`${baseStyles} ${variantStyles[variant]} relative overflow-hidden ${disabled ? 'opacity-60 pointer-events-none' : ''} ${className}`}
      role="button"
      aria-disabled={disabled}
      aria-label={ariaLabel}
    >
      {buttonContent}
    </a>
  );
};

export default Button;