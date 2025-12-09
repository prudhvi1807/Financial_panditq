import React from 'react';
import { Dumbbell, Heart, Music, Wifi, Wind, ShieldCheck } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    { icon: Dumbbell, title: "Heavy Weights Zone", desc: "Professional grade hammer strength equipment and free weights up to 150lbs." },
    { icon: Heart, title: "Cardio Deck", desc: "Dedicated floor with treadmills, ellipticals, and rowers overlooking the city." },
    { icon: Music, title: "Immersive Audio", desc: "Club-standard sound system to keep your adrenaline pumping." },
    { icon: Wind, title: "Climate Control", desc: "Centralized air conditioning and air purification for peak performance." },
    { icon: Wifi, title: "High-Speed WiFi", desc: "Stay connected while you disconnect from the world." },
    { icon: ShieldCheck, title: "Safe Lockers", desc: "Secure digital lockers and changing rooms with showers." },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="min-h-screen bg-[#050816] pb-20 animate-fade-in">
      {/* Header */}
      <div className="relative py-20 bg-[#02030a] overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter font-montserrat mb-4">
                World Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Facilities</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Built for those who refuse to compromise. 3 Floors of elite equipment.
            </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-12 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
                <div key={i} className="bg-[#0a0f26] p-8 rounded-3xl border border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-cyan-900/20 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                        <f.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-black text-white uppercase mb-3">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black text-white uppercase mb-8 border-l-4 border-green-500 pl-4">The Vibe</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-square">
                    <img src={src} alt="Gym Facility" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Facilities;