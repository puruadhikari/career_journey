import React from 'react';

interface HexagonBadgeProps {
  number: number;
  colorClass: string;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const HexagonBadge: React.FC<HexagonBadgeProps> = ({ number, colorClass, className = '', onClick, isActive = false }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative w-20 h-20 flex items-center justify-center transition-all duration-300 outline-none cursor-pointer group
        ${isActive 
          ? 'scale-110 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)] z-40' 
          : 'drop-shadow-lg hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]'} 
        ${className}`}
      aria-label={`View details for item ${number}`}
    >
       {/* CSS Hexagon Shape using clip-path */}
      <div 
        className={`absolute inset-0 ${colorClass} transition-colors duration-300 ${isActive ? 'brightness-110' : ''}`}
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      />
      <div 
        className={`absolute inset-[4px] bg-white/10 backdrop-blur-sm border transition-all duration-300
          ${isActive ? 'border-white/60 bg-white/20' : 'border-white/20 group-hover:border-white/40'}`}
        style={{
           clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      />
      <span className="relative text-3xl font-bold text-white z-10 drop-shadow-md">
        {number}
      </span>
    </button>
  );
};

export default HexagonBadge;