import React, { useState } from 'react';
import { generateMascotImage } from '../services/geminiService';

const MascotDisplay: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = async () => {
    if (loading) return;
    setLoading(true);
    const result = await generateMascotImage();
    if (result) {
      setImageUrl(result);
      setGenerated(true);
    }
    setLoading(false);
  };

  return (
    <div className="relative w-full max-w-md aspect-square flex items-center justify-center animate-float z-20">
      {/* Background Glow / Shadow */}
      <div className="absolute bottom-5 w-2/3 h-8 bg-black/20 rounded-full blur-xl transform translate-y-4 scale-90 -z-10" />

      {/* Main Mascot Container */}
      <div className={`relative w-full h-full transition-all duration-700 ${loading ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
        
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt="Bé Hành Mascot" 
            className="w-full h-full object-contain drop-shadow-2xl rounded-3xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-4">
            {/* 3D-Style SVG Mascot: Bé Hành (Matched to Image) */}
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl overflow-visible">
              <defs>
                <radialGradient id="skinGrad" cx="35%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#FFEB3B" /> {/* Highlight */}
                  <stop offset="50%" stopColor="#FFC107" /> {/* Base Yellow */}
                  <stop offset="100%" stopColor="#FF9800" /> {/* Shadow Orange */}
                </radialGradient>
                <linearGradient id="hairGrad" x1="0%" y1="100%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#7CB342" />
                  <stop offset="100%" stopColor="#AED581" />
                </linearGradient>
                <filter id="softGlow">
                   <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                   <feMerge>
                       <feMergeNode in="coloredBlur"/>
                       <feMergeNode in="SourceGraphic"/>
                   </feMerge>
                </filter>
              </defs>

              <g transform="translate(0, 10)">
                {/* HAIR (Sprouts) */}
                <path d="M100,35 Q90,10 75,10 Q85,25 95,40" fill="url(#hairGrad)" stroke="#558B2F" strokeWidth="1" />
                <path d="M100,35 Q110,5 125,5 Q115,25 105,40" fill="url(#hairGrad)" stroke="#558B2F" strokeWidth="1" />
                <path d="M100,35 Q100,0 100,15" fill="none" stroke="#689F38" strokeWidth="6" strokeLinecap="round" />

                {/* LEFT ARM (Salute/Touching Glasses) */}
                <path d="M55,90 Q30,80 35,65 Q45,55 65,75" fill="url(#skinGrad)" stroke="#FFA000" strokeWidth="1" />
                {/* Hand Nub */}
                <circle cx="40" cy="65" r="10" fill="url(#skinGrad)" />

                {/* RIGHT ARM (Down) */}
                <path d="M145,90 Q170,100 170,130 Q150,130 140,110" fill="url(#skinGrad)" stroke="#FFA000" strokeWidth="1" />
                <circle cx="170" cy="130" r="10" fill="url(#skinGrad)" />

                {/* BODY (Onion Shape) */}
                <path d="M100,35 C60,35 35,75 35,120 C35,160 55,185 100,185 C145,185 165,160 165,120 C165,75 140,35 100,35" fill="url(#skinGrad)" />
                
                {/* LEGS */}
                <path d="M80,180 L80,195 L65,195 Q60,185 65,180 Z" fill="#FF9800" />
                <path d="M120,180 L120,195 L135,195 Q140,185 135,180 Z" fill="#FF9800" />

                {/* SCARF (Red Neckerchief) */}
                <path d="M45,135 Q100,165 155,135 C155,135 150,155 100,165 C50,155 45,135 45,135 Z" fill="#D32F2F" />
                {/* Knot */}
                <path d="M85,145 Q100,135 115,145 L110,165 Q100,155 90,165 Z" fill="#B71C1C" />
                <path d="M90,155 L80,175 Q90,180 100,165" fill="#D32F2F" />
                <path d="M110,155 L120,175 Q110,180 100,165" fill="#D32F2F" />

                {/* FACE DETAILS */}
                {/* Cheeks */}
                <ellipse cx="60" cy="105" rx="10" ry="6" fill="#FF5252" opacity="0.4" />
                <ellipse cx="140" cy="105" rx="10" ry="6" fill="#FF5252" opacity="0.4" />

                {/* Mouth (Happy Open) */}
                <path d="M88,115 Q100,128 112,115 Q112,115 100,140 88,115" fill="#4E342E" />
                <path d="M95,130 Q100,135 105,130" fill="#E57373" /> {/* Tongue */}

                {/* EYES (Big Round Black) */}
                <circle cx="75" cy="90" r="10" fill="#212121" />
                <circle cx="125" cy="90" r="10" fill="#212121" />
                {/* Eye Sparkle */}
                <circle cx="78" cy="87" r="3" fill="white" />
                <circle cx="128" cy="87" r="3" fill="white" />

                {/* GLASSES (Thick Black Rims) */}
                <circle cx="75" cy="90" r="22" fill="none" stroke="#1a1a1a" strokeWidth="5" />
                <circle cx="125" cy="90" r="22" fill="none" stroke="#1a1a1a" strokeWidth="5" />
                <line x1="97" y1="90" x2="103" y2="90" stroke="#1a1a1a" strokeWidth="5" />
              </g>
            </svg>
          </div>
        )}
      </div>

      {/* Generator Button */}
      {!generated && process.env.API_KEY && (
        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="absolute bottom-0 right-0 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-xs font-bold text-nedu-charcoal hover:bg-nedu-red hover:text-white transition-all border-2 border-nedu-yellow"
          title="Make Bé Hành Real (AI Gen)"
        >
          {loading ? (
             <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
             </svg>
          ) : (
            <span className="flex items-center gap-1">
              📷 3D
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default MascotDisplay;