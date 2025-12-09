import React, { useState } from 'react';
import LuckyMoneyModal from './LuckyMoneyModal';
import { generateLuckyMoneyWish } from '../services/geminiService';
import { LuckyMoneyResult } from '../types';

const Hero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingResult, setLoadingResult] = useState(false);
  const [result, setResult] = useState<LuckyMoneyResult | null>(null);

  const handleKnock = async () => {
    setModalOpen(true);
    setLoadingResult(true);
    const data = await generateLuckyMoneyWish();
    setResult(data);
    setLoadingResult(false);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-8 md:py-12 overflow-hidden z-10 font-sans">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Content (Text) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 order-1 relative z-20 pt-8 md:pt-0">
          
          <div className="inline-block bg-[#FFD700] px-4 md:px-6 py-2 rounded-full border-2 border-white/50 shadow-lg mb-2 transform -rotate-1">
            <span className="text-[#8B0000] font-black tracking-widest text-xs md:text-sm uppercase font-sans">Nedu Flash Deal 2026</span>
          </div>
          
          {/* Main Slogan */}
          <div className="relative transform hover:scale-105 transition-transform duration-500 origin-center md:origin-left">
             <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] drop-shadow-xl stroke-text-gold font-sans">
              LÊN ĐỒ <br/>
              <span className="text-[#FFD700]">ĐI SĂN THÔI!!!</span>
             </h1>
          </div>
          
          <h2 className="text-lg md:text-3xl font-bold text-white/90 mt-4 max-w-lg drop-shadow-md tracking-wide px-2 md:px-0 font-sans">
            TẾT NÀY KHÔNG CHỈ CÓ BÁNH CHƯNG
          </h2>

          <p className="text-white/80 font-medium text-base md:text-lg max-w-md bg-[#8B0000]/30 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 mt-4 shadow-inner font-sans">
            Mạnh dạn đoán xem sắp tới N-EDU mang gì đến cho bạn? <br/>
            <span className="text-[#FFD700] font-bold block mt-2 animate-pulse">👉 Nhấn vào bao lì xì để nhận quà ngay!</span>
          </p>
        </div>

        {/* Right Content (Year of the Horse Red Envelope) */}
        <div className="flex justify-center items-center order-2 h-[400px] md:h-[500px] relative perspective-1000 pb-12 md:pb-0">
           
           {/* Glow Effect behind envelope */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FFD700] rounded-full blur-[80px] md:blur-[100px] opacity-30 animate-pulse"></div>

           {/* The Giant Envelope Container */}
           <div 
             onClick={handleKnock}
             className="relative w-64 h-[380px] md:w-80 md:h-[500px] cursor-pointer group z-30 animate-float"
           >
             {/* Animation Wrapper */}
             <div className="w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:animate-hover-shake origin-center">
               
               {/* Envelope Body */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[2px] border-[#FFD700] overflow-hidden">
                  
                  {/* Texture/Pattern Overlay */}
                  <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'}}></div>
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#FFC107 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

                  {/* 1. Golden Mountains (Top Background) */}
                  <svg className="absolute top-0 left-0 w-full h-1/2 pointer-events-none opacity-90" viewBox="0 0 100 50" preserveAspectRatio="none">
                     <defs>
                       <linearGradient id="mtnGrad" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6"/>
                         <stop offset="100%" stopColor="#D32F2F" stopOpacity="0"/>
                       </linearGradient>
                     </defs>
                     <path d="M0,50 L20,10 L40,40 L60,0 L80,30 L100,10 L100,50 Z" fill="url(#mtnGrad)" />
                     <path d="M0,20 L30,50 L50,20 L70,40 L100,0" fill="none" stroke="#FFD700" strokeWidth="0.2" opacity="0.5"/>
                  </svg>

                  {/* 2. CENTER TEXT: CHUC MUNG NAM MOI */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-20 flex flex-col items-center justify-center space-y-2">
                     {/* Circle Frame */}
                     <div className="absolute w-48 h-48 border-[1px] border-[#FFD700]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                     
                     <h3 className="text-[#FFD700] font-black text-4xl md:text-5xl uppercase leading-none drop-shadow-md font-sans tracking-tight">
                        CHÚC<br/>
                        MỪNG<br/>
                        NĂM<br/>
                        MỚI
                     </h3>
                     <div className="w-12 h-1 bg-[#FFD700] rounded-full mt-2"></div>
                  </div>

                  {/* 3. Golden Clouds/Waves (Bottom) */}
                  <svg className="absolute bottom-0 left-0 w-full h-24 md:h-32 text-[#FFD700]" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0,40 L0,20 Q10,10 20,20 Q30,30 40,20 Q50,10 60,20 Q70,30 80,20 Q90,10 100,20 L100,40 Z" fill="#FFA000" opacity="0.4" />
                      <path d="M0,40 L0,25 Q25,5 50,25 Q75,45 100,25 L100,40 Z" fill="#FFD700" opacity="0.7" />
                      <path d="M0,40 Q25,30 50,35 Q75,40 100,30 L100,40 Z" fill="#FFECB3" opacity="0.9" />
                  </svg>

                  {/* Top Flap of Envelope */}
                  <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#B71C1C] to-transparent opacity-50 z-10"></div>
               </div>
             </div>
           </div>
        </div>
      </div>

      <LuckyMoneyModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        data={result}
        loading={loadingResult}
      />
    </section>
  );
};

export default Hero;