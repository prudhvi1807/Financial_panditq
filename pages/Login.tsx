import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/Store';

// Placeholder for the Logo. Replace with your actual image path.
const LOGO_URL = "https://res.cloudinary.com/dwye1ye9z/image/upload/v1765004598/Screenshot_2025-12-06_123250_gt8zzp.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'member' | 'admin'>('member');
  const { login } = useStore();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, role);
    if (role === 'admin') navigate('/admin');
    else navigate('/member');
  };

  const fillDemo = (type: 'admin' | 'member') => {
    if (type === 'admin') {
      setEmail('admin@gym.com');
      setRole('admin');
    } else {
      setEmail('john@example.com');
      setRole('member');
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 bg-[#050816] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-md w-full bg-[#0a0f26]/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/10 relative z-10">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-6">
             <img 
               src={LOGO_URL} 
               alt="PUB FITNESS" 
               className="h-14 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
             />
             <div className="text-left">
                <h1 className="text-3xl font-black italic text-white leading-none font-montserrat">
                  PUB <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">FITNESS</span>
                </h1>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold ml-1">Studio</p>
             </div>
          </div>
          
          <h2 className="text-xl font-bold text-white font-montserrat uppercase tracking-wide">Access The Club</h2>
          <p className="text-slate-400 mt-2 text-sm">Sign in to manage your membership</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#050816] border border-white/10 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all text-white placeholder-slate-700 font-medium"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Role</label>
            <div className="flex bg-[#050816] p-1.5 rounded-xl border border-white/10">
              <button
                type="button"
                className={`flex-1 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 ${role === 'member' ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-black shadow-lg' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
                onClick={() => setRole('member')}
              >
                Member
              </button>
              <button
                type="button"
                className={`flex-1 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 ${role === 'admin' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
                onClick={() => setRole('admin')}
              >
                Admin
              </button>
            </div>
          </div>

          <button type="submit" className="w-full bg-white text-black py-4 rounded-xl font-black uppercase tracking-widest hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] transform hover:-translate-y-1">
            Enter Club
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-[10px] text-center text-slate-600 uppercase tracking-widest mb-4">Quick Access (Demo)</p>
          <div className="flex gap-3">
            <button onClick={() => fillDemo('member')} className="flex-1 py-2 text-[10px] font-bold border border-white/10 rounded-lg text-slate-400 hover:bg-green-500/10 hover:text-green-400 hover:border-green-500/30 transition-all uppercase">Member</button>
            <button onClick={() => fillDemo('admin')} className="flex-1 py-2 text-[10px] font-bold border border-white/10 rounded-lg text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all uppercase">Admin</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;