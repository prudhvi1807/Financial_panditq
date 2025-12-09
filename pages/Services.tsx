import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Banknote, FileText, TrendingUp, Shield, BarChart3, CheckCircle, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: ''
  });
  const [status, setStatus] = useState<'idle' | 'redirecting'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `New Appointment Request:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not Provided"}
Date: ${formData.date}
Time: ${formData.time}`;

    const whatsappURL = "https://wa.me/917038790377?text=" + encodeURIComponent(message);
    
    setStatus('redirecting');
    window.open(whatsappURL, "_blank");

    // Reset form after a delay
    setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', date: '', time: '' });
    }, 3000);
  };

  const services = [
    {
      id: "loans",
      title: "Loan Services",
      icon: Banknote,
      tags: ["Personal Loan", "Business Loan", "Home Loan", "Car Loan"],
      points: ["Upload documents", "Fill basic info", "Quick approval", "Real-time tracking application"],
      cta: "Apply for a Loan",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "tax",
      title: "Income Tax Filing",
      icon: FileText,
      tags: ["File ITR", "Tax Planning", "Refund Tracking"],
      points: ["Upload PAN & Form-16", "Quick calculation", "Submit securely", "Avoid penalties"],
      cta: "File My Taxes",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "mf",
      title: "Mutual Funds",
      icon: TrendingUp,
      tags: ["SIP Plans", "Goal-Based Investing", "Expert Advice"],
      points: ["Select your goal", "Get fund suggestions", "Start investing", "Portfolio tracking"],
      cta: "Start Investing",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: "insurance",
      title: "Insurance",
      icon: Shield,
      tags: ["Health", "Life", "Term Plans", "General Insurance"],
      points: ["Get Quotes", "Compare Plans", "Buy Online", "Free expert consultation"],
      cta: "Get Insured",
      color: "from-orange-500 to-red-600"
    },
    {
      id: "gst",
      title: "GST Services",
      icon: BarChart3,
      tags: ["GST Registration", "Monthly Filing", "Notice Handling"],
      points: ["Upload docs", "Expert assigned", "Stay compliant", "Timely reminders"],
      cta: "Manage My GST",
      color: "from-cyan-500 to-teal-600"
    }
  ];

  return (
    <div className="bg-[#0a0f26]">
      {/* Header */}
      <section className="pt-12 pb-20 text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            Financialpandit<br/>
            <span className="text-teal-400 text-2xl md:text-4xl block mt-2">Your One-Stop Financial Partner!</span>
          </h1>
          <p className="text-slate-400 text-lg bg-white/5 inline-block px-6 py-3 rounded-full border border-white/10">
            🚀 Get Started Now! Select the service you need below:
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden hover:border-teal-500/30 transition-all group flex flex-col"
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-bold text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">✓ {tag}</span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-8">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Footer CTA */}
              <div className="p-4 bg-black/20 border-t border-white/5">
                <button onClick={() => document.getElementById('appointment-form')?.scrollIntoView({behavior: 'smooth'})} className="w-full py-3 rounded-xl bg-white/5 hover:bg-teal-600 hover:text-white text-teal-400 font-bold transition-all flex items-center justify-center group-hover:shadow-lg">
                  {service.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="appointment-form" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-900 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
               <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-400">
                 <Calendar className="w-8 h-8" />
               </div>
               <h2 className="text-3xl font-heading font-bold text-white mb-2">Book an Appointment</h2>
               <p className="text-slate-400">Schedule a free consultation with our financial experts.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none transition-colors"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2">Date <span className="text-red-500">*</span></label>
                    <input 
                       type="date"
                       required
                       className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none transition-colors text-sm"
                       value={formData.date}
                       onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2">Time <span className="text-red-500">*</span></label>
                    <input 
                       type="time"
                       required
                       className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none transition-colors text-sm"
                       value={formData.time}
                       onChange={e => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-xl transition-all shadow-lg text-lg flex items-center justify-center">
                 {status === 'redirecting' ? <><MessageCircle className="mr-2"/> Redirecting to WhatsApp...</> : 'Request Appointment'}
              </button>
            </form>
          </div>

          {/* Help Box */}
          <div className="mt-12 text-center">
             <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-left">
                   <h4 className="text-white font-bold">Need Immediate Help?</h4>
                   <p className="text-slate-400 text-sm">Chat with us directly on WhatsApp for quick answers.</p>
                </div>
                <a href="https://wa.me/917038790377" target="_blank" className="px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-colors flex items-center">
                   <MessageCircle className="w-5 h-5 mr-2" /> Chat
                </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;