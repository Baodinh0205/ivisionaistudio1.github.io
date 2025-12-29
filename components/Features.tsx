
import React from 'react';

const FeatureCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="glass-panel squircle p-8 flex flex-col items-start gap-4 hover:bg-white/10 transition-colors group">
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform text-blue-400">
      {icon}
    </div>
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-white/50 leading-relaxed text-sm">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18"/></svg>}
          title="Instant Creation"
          desc="Generate stunning visuals from text prompts in seconds using our highly optimized diffusion models."
        />
        <FeatureCard 
          icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>}
          title="Advanced Editing"
          desc="Intelligent in-painting and out-painting tools allow you to modify or expand any image seamlessly."
        />
        <FeatureCard 
          icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
          title="Free Forever"
          desc="Access high-tier AI tools without subscription fees. Our mission is to democratize high-end creative software."
        />
      </div>
    </section>
  );
};

export default Features;
