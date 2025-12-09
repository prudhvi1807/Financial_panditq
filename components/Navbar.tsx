import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
             <div className="w-10 h-10 bg-gradient-to-tr from-teal-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-teal-500/20 transition-all">
               F
             </div>
             <span className="text-2xl font-heading font-bold text-white tracking-tight">
               Financial<span className="text-teal-400">pandit</span>
             </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`text-sm font-medium transition-colors duration-300 ${isActive(link.path) ? 'text-teal-400' : 'text-slate-300 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full text-white font-bold text-sm shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-1"
            >
              Get Started <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 absolute w-full left-0 top-20 shadow-2xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium ${isActive(link.path) ? 'bg-teal-500/10 text-teal-400' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl text-white font-bold shadow-lg"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;