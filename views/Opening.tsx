import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';

interface OpeningProps {
  onEnter: () => void;
}

export const Opening: React.FC<OpeningProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-earth-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1474447976065-67d23accb1e3?q=80&w=1920&auto=format&fit=crop"
          alt="Organic Grains Texture"
          className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex justify-center mb-8">
          <div className="bg-nature-700/80 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border border-nature-500/30 ring-4 ring-nature-900/20">
            <Leaf className="h-16 w-16 text-white" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-6 text-white drop-shadow-xl">
          GrainSource
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8 opacity-80">
          <div className="h-px w-12 bg-nature-400" />
          <span className="text-nature-300 font-serif italic text-lg">Est. 2018</span>
          <div className="h-px w-12 bg-nature-400" />
        </div>

        <p className="text-xl md:text-2xl text-earth-100 font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Connecting conscientious buyers with the world's finest, fully traceable certified organic farms.
        </p>

        <button
          onClick={onEnter}
          className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-earth-900 rounded-full text-lg font-bold tracking-wide transition-all duration-300 hover:bg-nature-50 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] ring-offset-2 ring-offset-earth-900 focus:ring-2 focus:ring-white"
        >
          <span>Enter Platform</span>
          <div className="bg-earth-900 text-white rounded-full p-1.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-nature-700">
            <ArrowRight className="h-5 w-5" />
          </div>
        </button>

        {/* Footer info absolute bottom */}
        <div className="absolute bottom-12 left-0 right-0 text-center">
             <p className="text-earth-400 text-xs tracking-[0.2em] uppercase mb-2">Premium Organic Sourcing</p>
             <div className="flex justify-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-nature-500"></span>
               <span className="w-1.5 h-1.5 rounded-full bg-nature-500/50"></span>
               <span className="w-1.5 h-1.5 rounded-full bg-nature-500/20"></span>
             </div>
        </div>
      </div>
    </div>
  );
};