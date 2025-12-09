import React, { useState } from 'react';
import { LuckyMoneyResult } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: LuckyMoneyResult | null;
  loading: boolean;
}

const LuckyMoneyModal: React.FC<Props> = ({ isOpen, onClose, data, loading }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (data?.code) {
      navigator.clipboard.writeText(data.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 font-sans">
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={!loading ? onClose : undefined}
      />

      {/* Main Modal Content */}
      <div className="relative w-full max-w-sm md:max-w-2xl transform transition-all animate-[float_4s_ease-in-out_infinite] z-50">
        
        {loading ? (
           <div className="bg-nedu-red rounded-3xl p-8 flex flex-col items-center justify-center min-h-[300px] shadow-2xl border-4 border-nedu-yellow mx-auto max-w-xs md:max-w-md">
             <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-white border-t-nedu-yellow rounded-full animate-spin mb-4"></div>
             <p className="font-bold text-lg md:text-xl text-white animate-pulse text-center uppercase tracking-widest font-sans">Đang kết nối thần tài...</p>
           </div>
        ) : (
          <div className="relative bg-[#A91B0D] rounded-3xl overflow-visible shadow-2xl border-4 border-[#FFD700]">
             
             {/* Background Fireworks (CSS) */}
             <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
                {/* SVG Firework Bursts */}
                <svg className="absolute top-4 left-4 w-12 h-12 md:w-16 md:h-16 text-[#FFD700] animate-[spin_3s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
                <svg className="absolute top-10 right-10 w-10 h-10 md:w-12 md:h-12 text-[#FFD700] animate-[spin_4s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
             </div>

             {/* Close Button */}
             <button 
               onClick={onClose}
               className="absolute top-2 right-2 md:top-4 md:right-4 text-white/80 hover:text-white z-50 p-2 bg-black/10 rounded-full"
             >
               <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
             </button>

             {/* Content Layout */}
             <div className="relative z-10 flex flex-col items-center pt-12 pb-8 px-4 md:pt-16 md:pb-12 md:px-8">
                
                {/* Envelope Flap Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-16 md:h-24 bg-[#C62828] rounded-b-[40px] shadow-lg border-b-2 border-[#FFD700]/30">
                  <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 border-2 border-[#FFD700] rounded-full flex items-center justify-center">
                    <span className="text-[#FFD700] text-[10px] md:text-xs">福</span>
                  </div>
                </div>

                {/* Golden Ticket Container */}
                <div className="relative bg-gradient-to-b from-[#FFF9C4] to-[#FFD54F] w-full md:w-[90%] max-w-sm rounded-xl p-4 md:p-6 shadow-xl border-4 border-[#FFD700] flex flex-col items-center mb-6 transform -rotate-1 mt-4 md:mt-6">
                  {/* Confetti over ticket */}
                  <div className="absolute -top-3 -right-3 text-3xl md:text-4xl animate-bounce">🧧</div>
                  <div className="absolute -bottom-3 -left-3 text-3xl md:text-4xl animate-bounce delay-75">🌸</div>

                  {/* Code Area */}
                  <div className="border-2 border-dashed border-red-800/30 w-full p-3 md:p-4 text-center bg-white/50 rounded-lg">
                    <p className="text-[10px] md:text-xs font-bold text-nedu-charcoal/60 uppercase tracking-widest mb-1 font-sans">Mã Quà Tặng</p>
                    <h3 className="text-[#B71C1C] text-3xl md:text-5xl font-black font-sans tracking-tight drop-shadow-sm break-all">
                      {data?.code || "SANDEAL22"}
                    </h3>
                  </div>

                  {/* PERSONALIZED WISH SECTION */}
                  <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-[#B71C1C]/10 w-full text-center">
                     <p className="text-[#8B0000] font-sans italic font-medium text-base md:text-xl leading-relaxed px-1">
                        "{data?.wish || "Chúc bạn một năm mới bản lĩnh, tự tin và rực rỡ như chính con người bạn!"}"
                     </p>
                  </div>
                  
                  {/* Decorative Ticket Punches */}
                  <div className="absolute top-1/2 -left-3 w-4 h-4 md:w-6 md:h-6 bg-[#A91B0D] rounded-full"></div>
                  <div className="absolute top-1/2 -right-3 w-4 h-4 md:w-6 md:h-6 bg-[#A91B0D] rounded-full"></div>
                </div>

                {/* Text & Actions Section */}
                <div className="text-center w-full mb-6">
                  <h2 className="text-[#FFE082] text-xl md:text-2xl font-black shadow-black drop-shadow-md font-sans uppercase">
                    MUA LÀ CHÍNH MÌNH
                  </h2>
                  <p className="text-[#FFD700] text-lg font-bold mt-1 font-sans drop-shadow-sm">
                    + Tặng lớp Thương hiệu của bạn
                  </p>
                  <div className="inline-block bg-[#FFD700] px-4 py-1 mt-3 rounded-full transform -rotate-2 border border-white/50 shadow-lg">
                    <p className="text-[#B71C1C] text-sm md:text-base font-black uppercase tracking-wider font-sans">
                      Duy nhất 1 ngày
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <button 
                    onClick={handleCopy}
                    className="bg-[#8D1515] hover:bg-[#a51919] text-[#FFD700] border-2 border-[#FFD700] w-full py-2 md:py-3 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:translate-y-0 font-sans"
                  >
                    {copied ? 'Đã Sao Chép!' : 'Sao Chép Mã Ngay'}
                  </button>

                  <a 
                    href="https://nedu.nhi.sg/program-offline/la-chinh-minh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFD700] hover:bg-[#FFC107] text-[#8D1515] border-2 border-[#8D1515] w-full py-2 md:py-3 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:translate-y-0 font-sans flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    Thanh Toán Ngay
                  </a>
                </div>

                <div className="mt-4 text-white/60 text-xs md:text-sm font-medium underline decoration-dotted underline-offset-4 cursor-pointer hover:text-white font-sans">
                  Dùng cho Flash Deal 2/2
                </div>

             </div>

             {/* Bottom Envelope Curve */}
             <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-[#B71C1C] rounded-t-[50%] opacity-50 -z-0"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LuckyMoneyModal;