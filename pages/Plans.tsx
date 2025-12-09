import React from 'react';
import { useStore } from '../context/Store';
import { Check, ArrowLeft, Trophy, Users, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Plans: React.FC = () => {
  const { plans, user } = useStore();

  const handlePurchase = (planName: string, amount: number) => {
    // In a real app, this redirects to Stripe/Razorpay
    const confirm = window.confirm(`Proceed to pay ₹${amount} for ${planName}?`);
    if (confirm) {
      alert("Payment Successful! Welcome to PUB FITNESS.");
      if(!user) {
        window.location.href = '#/login';
      }
    }
  };

  return (
    <div className="bg-[#050816] min-h-screen pb-20 animate-fade-in">
      
      {/* Announcement Banner */}
      <div 
        className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 text-black py-4 overflow-hidden shadow-[0_0_20px_rgba(234,179,8,0.4)] relative z-20"
      >
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-center">
            <div className="flex items-center mb-2 md:mb-0">
                <Trophy className="h-6 w-6 mr-3 animate-pulse text-black fill-current" />
                <span className="font-black uppercase tracking-widest text-lg md:text-xl">
                   PUB FITNESS STUDIO EXPANDS TO 3 FLOORS!
                </span>
            </div>
            <span className="hidden md:block mx-4 h-6 w-px bg-black/20"></span>
            <span className="font-bold text-sm md:text-base">Now with a SEPARATE FLOOR FOR CARDIO!</span>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="mb-8">
             <Link to="/" className="text-slate-400 hover:text-white flex items-center text-sm font-bold uppercase tracking-widest transition-colors"><ArrowLeft className="h-4 w-4 mr-2"/> Back Home</Link>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -z-10"></div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter font-montserrat leading-none">
            Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Gym Plans</span>
          </h2>
          
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 mt-4 backdrop-blur-sm">
             <div className="flex items-center text-slate-300">
                <Clock className="h-5 w-5 mr-2 text-green-500" />
                <span className="font-bold uppercase text-sm tracking-wide">Timings: 5-9 AM & 4-9 PM</span>
             </div>
             <div className="hidden md:block w-px h-6 bg-white/10"></div>
             <div className="flex items-center text-slate-300">
                <MapPin className="h-5 w-5 mr-2 text-green-500" />
                <span className="font-bold uppercase text-sm tracking-wide">Jodimettla</span>
             </div>
          </div>
        </div>

        {/* Highlight Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
                "3 Floors of Power",
                "Certified Trainers",
                "Separate Cardio Floor",
                "Air-Conditioned Hall"
            ].map((feat, i) => (
                <div 
                    key={i} 
                    className="bg-[#0a0f26] border border-white/5 p-4 rounded-xl text-center"
                >
                    <p className="text-green-500 font-bold uppercase text-xs md:text-sm">{feat}</p>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const isMegaPromo = plan.promo?.includes('6+6');
            const isSuperPromo = plan.promo?.includes('4+2');
            
            return (
              <div 
                key={plan.id} 
                className={`group relative rounded-3xl p-6 flex flex-col transition-all duration-500 hover:-translate-y-2
                  ${isMegaPromo 
                    ? 'bg-gradient-to-b from-yellow-900/40 to-[#0a0f26] border border-yellow-500/50 shadow-[0_0_40px_rgba(234,179,8,0.15)]' 
                    : isSuperPromo
                      ? 'bg-gradient-to-b from-green-900/40 to-[#0a0f26] border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.15)]'
                      : 'bg-[#0a0f26] border border-white/10 hover:border-white/20'
                  }
                `}
              >
                {/* Promo Badges */}
                {plan.promo && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl whitespace-nowrap z-10 border
                    ${isMegaPromo 
                        ? 'bg-yellow-500 text-black border-yellow-400 animate-pulse' 
                        : 'bg-green-600 text-black border-green-500'
                    }
                  `}>
                    {plan.promo}
                  </div>
                )}

                {/* Card Header */}
                <div className="mb-6 text-center border-b border-white/5 pb-6 pt-2">
                  <h3 className={`text-2xl font-black uppercase italic font-montserrat mb-4 ${isMegaPromo ? 'text-yellow-500' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex justify-center items-baseline">
                    <span className="text-xl font-bold text-slate-500 mr-1">₹</span>
                    <span className="text-5xl font-black text-white tracking-tighter">
                        {plan.price}
                    </span>
                  </div>
                  {plan.promo && (
                    <p className="text-green-400 text-[10px] uppercase font-bold mt-3 tracking-widest bg-green-500/10 py-1 px-2 rounded inline-block">
                        Best Deal
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className={`h-4 w-4 mr-3 flex-shrink-0 ${isMegaPromo ? 'text-yellow-500' : 'text-green-500'}`} />
                        <span className="text-slate-300 text-sm font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                </div>

                {/* Action Button */}
                <button 
                  onClick={() => handlePurchase(plan.name, plan.price)}
                  className={`w-full py-4 rounded-xl font-black uppercase tracking-wide transition-all relative overflow-hidden
                    ${isMegaPromo 
                        ? 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.4)]' 
                        : isSuperPromo
                            ? 'bg-green-600 text-black hover:bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]'
                            : 'bg-white/10 text-white hover:bg-white hover:text-black'
                    }
                  `}
                >
                   {isMegaPromo ? 'Claim Offer' : 'Join Now'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div 
          className="mt-20 bg-[#0a0f26] rounded-3xl p-8 md:p-12 border border-white/5 text-center relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-[60px]"></div>
            
            <h4 className="text-2xl font-black text-white uppercase mb-4 font-montserrat">Visit Headquarters</h4>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-slate-300 font-bold uppercase">PUB FITNESS STUDIO, JODIMETTLA</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-white/10"></div>
                <div className="flex items-center">
                    <Users className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-slate-300 font-bold uppercase">SPECIAL GROUP DISCOUNT AVAILABLE</span>
                </div>
            </div>
            
            <div className="inline-block p-4 border border-green-500/30 rounded-2xl bg-green-500/5">
                <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">Call or WhatsApp</p>
                <p className="text-3xl md:text-5xl font-black text-white tracking-widest font-mono">8331833252</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;