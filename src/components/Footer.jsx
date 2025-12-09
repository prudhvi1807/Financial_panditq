import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
               <img 
                 src="https://res.cloudinary.com/dwye1ye9z/image/upload/v1765286592/qwer123_jqv11y.jpg" 
                 alt="Financialpandit Logo" 
                 className="w-10 h-10 rounded-lg object-cover shadow-lg"
               />
               <span className="text-2xl font-heading font-bold text-white tracking-tight">
                 Financial<span className="text-teal-400">pandit</span>
               </span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Simplifying Finances for Every Indian. We provide expert assistance in Loans, Taxes, GST, Insurance, and Investments with a transparent and hassle-free process.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500