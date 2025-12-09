import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-gradient-to-tr from-teal-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                 F
               </div>
               <span className="text-2xl font-heading font-bold text-white tracking-tight">
                 Financial<span className="text-teal-400">pandit</span>
               </span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Simplifying Finances for Every Indian. We provide expert assistance in Loans, Taxes, GST, Insurance, and Investments with a transparent and hassle-free process.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" className="hover:text-teal-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Financialpandit. All rights reserved.</p>
          <p className="text-sm flex items-center">Made with <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" /> for India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;