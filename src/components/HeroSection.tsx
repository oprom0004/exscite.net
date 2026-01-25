import React from 'react';
import { Hash } from 'lucide-react';
import { TechnicalIllustration } from './TechnicalIllustration';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageAlt: string;
  illustrationVariant?: 'power-supply' | 'safety' | 'application' | 'circuit';
  videoSrc?: string;
  useVideo?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  imageAlt, 
  illustrationVariant = "power-supply",
  videoSrc,
  useVideo = false
}) => {
  return (
    <div className="relative bg-gray-950 border-b border-gray-800 overflow-hidden group">
      {/* Background Pattern: Technical Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-gray-950/50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="md:w-1/2 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-hv-yellow uppercase bg-yellow-900/10 border border-yellow-900/30 rounded-sm">
            <span className="w-2 h-2 bg-hv-yellow rounded-sm animate-pulse"></span>
            2026 Engineering Guide
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-6 font-mono">
            {title.split(':')[0]}
            <span className="block text-gray-500 text-2xl md:text-3xl mt-2 font-sans font-medium tracking-normal border-l-4 border-hv-red pl-4">
              {title.split(':')[1] || ""}
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed font-light border-l border-gray-800 pl-4">
            {subtitle}
          </p>
        </div>
        
        {/* Image/Visual Area */}
        <div className="md:w-1/2 relative z-10">
          <div className="relative bg-gray-900 rounded-sm border border-gray-700 p-2 shadow-2xl">
            {/* Technical Markers */}
            <div className="absolute top-4 right-4 text-[10px] font-mono text-hv-yellow flex flex-col items-end gap-1 z-20">
              <span>V_IN: 380-480 VAC</span>
              <span>V_OUT: 1000 VDC</span>
              <Hash size={12} />
            </div>
            
            <div className="relative overflow-hidden border border-gray-800 transition-all duration-700 group-hover:scale-[1.01] bg-black">
              <div className="absolute top-0 left-0 w-full h-1 hazard-stripe z-20 opacity-50"></div>
              
              {useVideo && videoSrc ? (
                <video 
                  className="w-full h-auto opacity-90"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="/video-poster.jpg"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <TechnicalIllustration 
                  variant={illustrationVariant}
                  className="w-full h-auto opacity-90"
                />
              )}
              
              {/* Overlay Data */}
              <div className="absolute bottom-0 left-0 w-full bg-black/90 text-gray-400 text-[10px] px-4 py-2 font-mono flex justify-between items-center border-t border-gray-700">
                <span>FIG 2.0-HV / {useVideo ? 'VIDEO DEMO' : 'SERIES_X'}</span>
                <span className="flex items-center gap-1 text-hv-red">
                  <div className="w-2 h-2 bg-hv-red rounded-full animate-pulse"></div> 
                  {useVideo ? 'RECORDING' : 'LIVE'}
                </span>
              </div>
            </div>
          </div>
          
          {/* Decorative Backing */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-gray-800 -z-10 bg-hv-stripe opacity-10"></div>
        </div>
      </div>
    </div>
  );
};
