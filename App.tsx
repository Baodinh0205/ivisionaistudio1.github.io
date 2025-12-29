import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-blue-600/30">
      <Header />
      <main className="relative">
        <Hero />
        <Features />
        
        {/* Bottom Banner */}
        <section className="py-24 px-6 flex justify-center">
          <div className="max-w-4xl w-full glass-panel squircle p-12 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] -z-10 group-hover:bg-blue-600/30 transition-all"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create?</h2>
            <p className="text-white/60 mb-8 text-lg">Join IVISION AI Studio to push the boundaries of digital art.</p>
            <button 
              onClick={() => window.open('https://ai.studio/apps/drive/1lYL4iaQP368d0Gny_YmbU8Ru3DP_CAb2?fullscreenApplet=true', '_blank')}
              className="btn-squircle bg-white text-black font-semibold px-10 py-4 hover:scale-105 transition-transform"
            >
              Get Started
            </button>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-white/30 text-sm">
        <p>© 2024 IVISION Studio by Bao Dinh.</p>
      </footer>
    </div>
  );
};

export default App;