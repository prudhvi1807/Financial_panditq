import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../context/Store';
import { Menu, X, User as UserIcon, LogOut } from 'lucide-react';
import ChatBot from './ChatBot';

// Placeholder for the Logo. Replace this URL with your actual image path
const LOGO_URL = "https://res.cloudinary.com/dwye1ye9z/image/upload/v1765004598/Screenshot_2025-12-06_123250_gt8zzp.png";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-[#050816] text-slate-200 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#050816]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Area */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
              <img 
                src={LOGO_URL} 
                alt="PUB FITNESS" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]" 
              />
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-black italic tracking-tighter text-white leading-none font-montserrat group-hover:text-green-400 transition-colors">
                  PUB <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">FITNESS</span>
                </span>
                <span className="text-[9px] tracking-[0.3em] text-slate-400 font-bold uppercase group-hover:text-cyan-400 transition-colors">
                  Studio
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link to="/" className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:text-green-400 ${isActive('/') ? 'text-green-500' : 'text-slate-300'}`}>Home</Link>
                <Link to="/plans" className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:text-green-400 ${isActive('/plans') ? 'text-green-500' : 'text-slate-300'}`}>Plans</Link>
                <Link to="/contact" className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:text-green-400 ${isActive('/contact') ? 'text-green-500' : 'text-slate-300'}`}>Contact</Link>

                {user ? (
                  <div className="flex items-center ml-4 space-x-6 border-l border-white/10 pl-6">
                    <Link 
                      to={user.role === 'admin' ? '/admin' : '/member'} 
                      className="flex items-center text-sm font-bold text-white hover:text-cyan-400 transition-colors group"
                    >
                      <div className="p-1.5 bg-white/5 rounded-full mr-2 group-hover:bg-cyan-500/20 transition-colors">
                        <UserIcon className="h-4 w-4" />
                      </div>
                      DASHBOARD
                    </Link>
                    <button onClick={handleLogout} className="text-slate-400 hover:text-red-400 transition-colors">
                      <LogOut className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <Link to="/login" className="ml-4 px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-extrabold uppercase tracking-wide rounded hover:from-green-500 hover:to-emerald-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-0.5">
                    Join Now
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-400 hover:text-white transition-colors">
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0f26] border-b border-white/10 animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-bold text-white hover:bg-white/5 hover:text-green-400 border-l-2 border-transparent hover:border-green-500">HOME</Link>
              <Link to="/plans" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-bold text-white hover:bg-white/5 hover:text-green-400 border-l-2 border-transparent hover:border-green-500">PLANS</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-bold text-white hover:bg-white/5 hover:text-green-400 border-l-2 border-transparent hover:border-green-500">CONTACT</Link>
              {user ? (
                <>
                  <Link to={user.role === 'admin' ? '/admin' : '/member'} onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-bold text-cyan-400 bg-white/5">DASHBOARD</Link>
                  <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-3 rounded-md text-base font-bold text-red-400 hover:bg-white/5">LOGOUT</button>
                </>
              ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block mt-4 text-center px-3 py-3 rounded text-base font-black bg-gradient-to-r from-green-600 to-emerald-600 text-black uppercase shadow-lg">LOGIN / JOIN</Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#02030a] text-slate-400 py-12 border-t border-white/5 relative overflow-hidden">
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-green-900/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={LOGO_URL} alt="PUB FITNESS" className="h-10 w-auto opacity-90" />
                <div>
                   <span className="block text-xl font-black italic text-white leading-none font-montserrat">
                    PUB <span className="text-green-500">FITNESS</span>
                   </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-sm text-slate-500">
                The ultimate fusion of nightlife energy and elite fitness training. 
                We don't just train; we perform. Join the movement that owns the night.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-6">Explore</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/plans" className="hover:text-green-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Memberships</Link></li>
                <li><Link to="/facilities" className="hover:text-green-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>The Club</Link></li>
                <li><Link to="/contact" className="hover:text-green-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>Location</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-6">Connect</h3>
              <p className="text-sm mb-2 text-slate-300">123 Neon Ave, Night City</p>
              <p className="text-sm mb-2 text-cyan-400 font-bold flex items-center gap-2"><div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div> OPEN 24/7</p>
              <p className="text-sm mt-4 hover:text-white cursor-pointer transition-colors">support@pubfitness.com</p>
              <p className="text-sm mt-1 hover:text-white cursor-pointer transition-colors">+1 (555) 000-NIGHT</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-slate-700 uppercase tracking-widest">
            © {new Date().getFullYear()} PUB FITNESS. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default Layout;