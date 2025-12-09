import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, send data to API
    console.log("Contact form submitted");
  };

  return (
    <div className="min-h-screen bg-[#0a0f26]">
      {/* Hero */}
      <div className="pt-20 pb-12 text-center px-4 bg-slate-900 border-b border-white/5">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Contact Financialpandit</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Have questions about loans, taxes, or investments? We're here to help you navigate your financial journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-400 flex-shrink-0 mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-400">support@financialpandit.com</p>
                  <p className="text-slate-400">info@financialpandit.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-400 flex-shrink-0 mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-slate-400">+91 7038 790 377</p>
                  <p className="text-slate-500 text-sm mt-1">Mon-Sat, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-400 flex-shrink-0 mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-slate-400">123 Financial District,<br/>Tech City, India 500081</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-slate-800 rounded-2xl overflow-hidden border border-white/10 relative group">
               <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors">
                  <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm">Interactive Map Loading...</span>
               </div>
               {/* Simulating map view */}
               <div className="w-full h-full bg-[#1e293b] flex items-center justify-center text-slate-600">
                  [Google Map Embed Area]
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            {submitted ? (
              <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-8 text-center">
                 <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <CheckCircle className="w-8 h-8"/>
                 </div>
                 <h4 className="text-white font-bold text-xl mb-2">Message Sent!</h4>
                 <p className="text-slate-400">Thank you for reaching out. Our team will respond within 24 hours.</p>
                 <button onClick={() => setSubmitted(false)} className="mt-6 text-teal-400 font-bold hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-slate-400 block mb-2">Name</label>
                  <input type="text" required className="w-full bg-[#0a0f26] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-400 block mb-2">Email</label>
                  <input type="email" required className="w-full bg-[#0a0f26] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-400 block mb-2">Phone</label>
                  <input type="tel" className="w-full bg-[#0a0f26] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none" placeholder="Mobile Number" />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-400 block mb-2">Message</label>
                  <textarea required rows={4} className="w-full bg-[#0a0f26] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl text-white font-bold hover:shadow-lg transition-all flex items-center justify-center">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;