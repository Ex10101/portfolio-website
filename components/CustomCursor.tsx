'use client';

import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Direct positioning without any lerp for zero lag
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleLinkHover = () => {
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') || 
          target.closest('button')
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };
      
      document.addEventListener('mouseover', handleMouseOver);
      return () => document.removeEventListener('mouseover', handleMouseOver);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    const cleanup = handleLinkHover();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cleanup();
    };
  }, []);

  return (
    <>
      {/* Simple blue circle cursor */}
      <div 
        className={`fixed pointer-events-none z-50 rounded-full bg-none border-2 border-blue-500
                   transition-transform duration-150
                   ${isClicking ? 'scale-75' : 'scale-100'}
                   ${isHovering ? 'w-16 h-16 opacity-40' : 'w-8 h-8 opacity-60'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        
        a, button, [role="button"], input[type="submit"], select {
          cursor: none !important;
        }
        
        @media (max-width: 768px) {
          body {
            cursor: auto !important;
          }
          
          .fixed.pointer-events-none {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;