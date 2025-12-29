import React from 'react';

const Hero: React.FC = () => {
  const handleStart = () => {
    window.open('https://ai.studio/apps/drive/1lYL4iaQP368d0Gny_YmbU8Ru3DP_CAb2?fullscreenApplet=true', '_blank');
  };

  return (
    <section className="relative pt-44 pb-20 px-6 flex flex-col items-center text-center max-w-6xl mx-auto overflow-hidden">
      {/* Hiệu ứng hào quang đặc trưng One UI 8 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-[#3E7BFA]/10 blur-[180px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="text-6xl md:text-[6.5rem] font-black tracking-tighter mb-6 bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent leading-[0.9]">
          IVISION Studio
        </h1>
        
        <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          The future of AI-driven creative tools. Simplified for everyone.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center mb-24">
          <button 
            onClick={handleStart}
            className="btn-squircle bg-[#3E7BFA] text-white text-xl font-bold px-20 py-6 hover:brightness-110 active:scale-95 transition-all duration-400 flex items-center justify-center gap-4 shadow-[0_25px_60px_rgba(62,123,250,0.35)] group"
          >
            <span>Get Started</span>
            <svg 
              className="group-hover:translate-x-1.5 transition-transform duration-300" 
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mockup Giao diện AI Imagine (Non-interactive) */}
      <div className="w-full glass-panel squircle p-3 shadow-[0_50px_120px_rgba(0,0,0,0.9)] border border-white/10 relative overflow-hidden group animate-in zoom-in-95 duration-1000 delay-300">
        <div className="aspect-video w-full rounded-[40px] overflow-hidden bg-[#0A0A0A] flex border border-white/5 shadow-inner">
          
          {/* Sidebar Left */}
          <div className="w-[30%] border-r border-white/5 bg-[#0D0D0D] p-6 flex flex-col gap-6 text-left pointer-events-none select-none">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#3E7BFA] rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              </div>
              <span className="font-bold text-white tracking-tight">Studio</span>
            </div>

            <div className="flex gap-2 p-1 bg-white/5 rounded-2xl">
              <div className="flex-1 py-2 text-center text-xs font-bold bg-[#3E7BFA] text-white rounded-xl">Create</div>
              <div className="flex-1 py-2 text-center text-xs font-bold text-white/40">Angles</div>
              <div className="flex-1 py-2 text-center text-xs font-bold text-white/40">Edit</div>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-black text-white/20 tracking-widest uppercase">Reference Image</span>
              <div className="aspect-square w-full rounded-3xl border-2 border-dashed border-white/5 flex items-center justify-center bg-white/[0.02]">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Select Image</span>
              </div>
            </div>

            <div className="space-y-3 flex-1">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-white/20 tracking-widest uppercase">Prompt</span>
                <div className="px-2 py-1 bg-blue-500/10 rounded-md flex items-center gap-1">
                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                   <span className="text-[8px] font-bold text-blue-400 uppercase">Smart</span>
                </div>
              </div>
              <div className="w-full h-32 bg-white/[0.03] rounded-2xl border border-white/5 p-4">
                <span className="text-xs text-white/20 italic">Describe your vision...</span>
              </div>
            </div>
          </div>

          {/* Main Area Right */}
          <div className="flex-1 p-8 flex flex-col gap-6 text-left pointer-events-none select-none overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-black text-[#3E7BFA] tracking-[0.3em] uppercase">Creative Space</span>
                <h3 className="text-4xl font-black text-white tracking-tighter mt-1">AI Imagine</h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-white/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
            </div>

            <div className="flex-1 rounded-[32px] bg-[#121212] border border-white/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-20"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                <span className="text-sm font-medium text-white/20 tracking-widest uppercase">Ready to imagine</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold text-white tracking-tight">Recent</h4>
                <div className="px-3 py-1 bg-blue-500/10 rounded-full text-[10px] font-black text-blue-400 uppercase tracking-tighter">2 Sessions</div>
              </div>
              
              <div className="w-full bg-[#1A1A1A] rounded-2xl p-4 border border-white/5 flex items-center gap-4">
                <div className="w-16 h-12 bg-zinc-800 rounded-xl overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-white/80 font-medium truncate">An expansive, professionally designed luxury living room that exudes sophistication...</p>
                  <p className="text-[9px] text-white/30 mt-1 uppercase font-bold tracking-tighter">14:22 • 1 VARIANTS</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5"></div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Overlay nghệ thuật tăng độ sang trọng */}
        <div className="absolute inset-0 pointer-events-none rounded-[54px] border border-white/10 ring-1 ring-inset ring-white/5"></div>
      </div>
    </section>
  );
};

export default Hero;