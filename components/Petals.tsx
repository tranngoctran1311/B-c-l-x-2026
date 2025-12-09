import React from 'react';

const Petals: React.FC = () => {
  // Create an array of 20 petals/confetti
  const petals = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    opacity: 0.4 + Math.random() * 0.6,
    scale: 0.3 + Math.random() * 0.7,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute text-[#FFD700] animate-float"
          style={{
            left: petal.left,
            top: '-40px',
            animationDelay: petal.animationDelay,
            opacity: petal.opacity,
            transform: `scale(${petal.scale}) rotate(${petal.rotation}deg)`,
            animationDuration: `${5 + Math.random() * 5}s`,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
          }}
        >
          {/* Yellow Apricot Blossom SVG */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9L22 9L16 14L18.5 21L12 17L5.5 21L8 14L2 9L9.5 9L12 2Z" />
            <circle cx="12" cy="13" r="2" fill="#B71C1C" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Petals;