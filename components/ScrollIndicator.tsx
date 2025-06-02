import React from 'react';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
        <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;