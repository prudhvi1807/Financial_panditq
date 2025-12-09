import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Headphones, ChevronRight, Banknote, FileText, TrendingUp, Shield, BarChart3, Upload, UserCheck, Clock, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
              Simplifying Finances for Every Indian
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[1.1] mb-6">
              Your One-Stop <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Financial Partner!</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              We handle your Loans, Income Tax, GST, Insurance, and Investments so you can focus on growing your wealth. 100% compliant, transparent, and fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-teal-500/25 transition-all transform hover:-translate-y-1 flex items-center justify-center">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                View Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-slate-400 border-t border-white/10 pt-8">
              <div className="flex items-center gap-2"><ShieldCheck className="text-teal-400 w-5 h-5" /> 100% Secure</div>
              <div className="flex items-center gap-2"><Zap className="text-teal-400 w-5 h-5" /> Fast Processing</div>
              <div className="flex items-center gap-2"><Headphones className="text-teal-400 w-5 h-5" /> Expert Support</div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
             <div className="relative z-10 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                {/* Visual Header */}
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <span className="text-white font-bold text-sm uppercase tracking-wider pl-2">Platform Features</span>
                  <div className="flex gap-1.5 pr-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                </div>

                {/* Cards List */}
                <div className="space-y-4">
                  {/* Card 1: Secure */}
                  <div className="rounded-xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 flex items-start p-4 gap-4 backdrop-blur-md">
                     <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-teal-500/20">
                        <ShieldCheck className="w-5 h-5"/>
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-sm mb-1">Secure & Verified Processes</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">All financial services follow RBI and ITD compliance with full data protection.</p>
                     </div>
                  </div>

                  {/* Card 2: Upload */}
                  <div className="rounded-xl bg-white/5 border border-white/10 flex items-start p-4 gap-4 backdrop-blur-md hover:bg-white/10 transition-colors">
                     <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-500/20">
                        <Upload className="w-5 h-5"/>
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-sm mb-1">Simple Document Upload</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">Upload PAN, Aadhaar, Form-16, or business documents in one click.</p>
                     </div>
                  </div>

                  {/* Card 3: Real-Time Status */}
                  <div className="rounded-xl bg-white/5 border border-white/10 flex items-start p-4 gap-4 backdrop-blur-md hover:bg-white/10 transition-colors">
                     <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                        <Zap className="w-5 h-5"/>
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-sm mb-1">Real-Time Status Updates</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">Track your loan, tax filing, or GST service progress instantly.</p>
                     </div>
                  </div>
                </div>
             </div>
             
             {/* Decor Elements */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-600 rounded-full opacity-30 blur-2xl animate-pulse"></div>
             <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#0a0f26] relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Our Core Services</h2>
              <p className="text-slate-400">Everything you need to manage your finances in one place.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Loan Services", icon: Banknote, desc: "Personal, Business, Home & Car Loans with quick approvals." },
                { title: "Income Tax Filing", icon: FileText, desc: "Accurate ITR filing, tax planning and refund tracking." },
                { title: "Mutual Funds", icon: TrendingUp, desc: "Expert advice on SIPs and goal-based investing." },
                { title: "Insurance", icon: Shield, desc: "Comprehensive Health, Life, Term and General insurance plans." },
                { title: "GST Services", icon: BarChart3, desc: "Hassle-free GST registration and monthly filing." },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-900 border border-white/5 p-8 rounded-3xl hover:border-teal-500/30 transition-all group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-6">{service.desc}</p>
                  <Link to="/services" className="text-teal-400 font-bold flex items-center text-sm hover:underline">Learn More <ChevronRight className="w-4 h-4 ml-1"/></Link>
                </motion.div>
              ))}
              
              {/* CTA Card */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-teal-600 to-blue-700 p-8 rounded-3xl flex flex-col justify-center items-center text-center text-white shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-4">Need Custom Help?</h3>
                  <p className="text-white/80 mb-6">Talk to our financial experts today.</p>
                  <Link to="/contact" className="px-6 py-3 bg-white text-teal-600 rounded-xl font-bold hover:bg-slate-100 transition-colors w-full">Contact Us</Link>
              </motion.div>
            </div>
         </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-950">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-4xl font-heading font-bold text-white mb-6">Why Financialpandit?</h2>
                 <p className="text-slate-400 text-lg">We combine technology with human expertise to deliver a seamless financial experience.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Personalized Guidance", desc: "Solutions tailored to your specific financial goals." },
                { title: "Transparent Process", desc: "No hidden fees. Live tracking of your applications." },
                { title: "Registered & Compliant", desc: "We adhere to all regulatory standards and data privacy laws." },
                { title: "All-in-One Support", desc: "From filing taxes to getting loans, we handle it all." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#0f172a] border border-white/5 p-6 rounded-2xl hover:border-teal-500/30 transition-all text-center group"
                >
                  <div className="w-12 h-12 mx-auto bg-teal-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                     <CheckCircle className="w-6 h-6 text-teal-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#0a0f26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">How It Works</h2>
            <p className="text-slate-400">Simple steps to financial freedom.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Choose Service", icon: UserCheck, desc: "Select the service you need from our dashboard." },
              { title: "Upload Docs", icon: Upload, desc: "Submit necessary documents securely online." },
              { title: "Expert Assigned", icon: Headphones, desc: "A dedicated financial expert reviews your case." },
              { title: "Get Results", icon: Clock, desc: "Receive your loan, tax refund, or policy quickly." },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-teal-400 mb-6 border border-white/10 relative z-10">
                  <step.icon className="w-8 h-8" />
                </div>
                {/* Connector Line */}
                {idx < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-white/10 z-0"></div>}
                
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-blue-900/40 z-0"></div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-8">Ready to simplify your finances?</h2>
            <p className="text-xl text-slate-300 mb-10">Join thousands of Indians who trust Financialpandit for their financial needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/services" className="px-8 py-4 bg-teal-500 text-black font-bold text-lg rounded-xl hover:bg-teal-400 transition-colors shadow-lg">Get Started Today</Link>
               <Link to="/contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/5 transition-colors">Contact Support</Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;