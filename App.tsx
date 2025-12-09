import React from 'react';
import Hero from './components/Hero';
import Petals from './components/Petals';

const App: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen bg-[#A91B0D] text-white overflow-hidden font-sans selection:bg-[#FFD700] selection:text-[#A91B0D]">
      
      {/* 1. Base Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000] via-[#A91B0D] to-[#B71C1C]"></div>

      {/* 2. Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }}></div>

      {/* 3. Artistic White Cloud Flow (Bottom Curve) */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-90 z-0">
        <svg viewBox="0 0 1440 800" className="w-full h-full preserve-3d" preserveAspectRatio="xMidYMax slice">
          <path fill="#FDFBF7" fillOpacity="0.1" d="M0,800 C300,700 400,300 800,400 C1200,500 1440,200 1440,200 L1440,800 L0,800 Z" />
          <path fill="#FDFBF7" fillOpacity="0.15" d="M0,800 C200,750 600,600 900,650 C1200,700 1440,500 1440,500 L1440,800 L0,800 Z" transform="translate(0, 50)" />
        </svg>
      </div>

      {/* 4. Decorative Birds (Swallows) */}
      <div className="absolute top-20 left-10 w-24 h-24 text-white/80 animate-float opacity-80 hidden md:block">
        <svg viewBox="0 0 100 100" fill="currentColor" className="drop-shadow-lg">
           <path d="M10,50 Q30,40 50,50 Q70,60 90,30 Q60,50 50,60 Q40,70 10,50 Z" />
           <path d="M50,50 Q60,40 80,40" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute top-40 right-20 w-16 h-16 text-white/60 animate-float opacity-60 delay-1000 hidden md:block">
        <svg viewBox="0 0 100 100" fill="currentColor" style={{transform: 'scaleX(-1)'}}>
           <path d="M10,50 Q30,40 50,50 Q70,60 90,30 Q60,50 50,60 Q40,70 10,50 Z" />
        </svg>
      </div>

      {/* Background Atmosphere */}
      <Petals />
      
      {/* Main Content */}
      <Hero />
      
      {/* Footer / Copyright */}
      <footer className="absolute bottom-2 w-full text-center text-xs text-[#FFD700]/60 font-bold z-10">
        © 2026 Nedu Tet Campaign. Designed with ❤️ & Gemini.
      </footer>
    </main>
  );
};

export default App;