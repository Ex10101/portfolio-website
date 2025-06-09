'use client';

import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile for SSR
  
  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Run once on mount
    checkMobile();
    
    // If not mobile, set up cursor events
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        // Direct DOM manipulation for smoother cursor movement
        if (cursorRef.current) {
          cursorRef.current.style.left = `${e.clientX}px`;
          cursorRef.current.style.top = `${e.clientY}px`;
        }
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
            target.closest('button') ||
            target.hasAttribute('role') && target.getAttribute('role') === 'button'
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
    }
    
    // Also add resize listener to detect device changes
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  // Don't render custom cursor on mobile
  if (isMobile) return null;

  return (
    <>
      <div 
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] rounded-full bg-none border-2 border-blue-500
                   ${isClicking ? 'scale-75' : 'scale-100'}
                   ${isHovering ? 'w-16 h-16 opacity-40' : 'w-8 h-8 opacity-60'}`}
        style={{
          transform: 'translate(-50%, -50%)',
          willChange: 'left, top',
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
        }
      `}</style>
    </>
  );
};

export default CustomCursor;