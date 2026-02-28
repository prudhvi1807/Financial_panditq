import React from 'react';

const CibilConsultation: React.FC = () => {
  return (
    <div className="bg-[#0a0f26] text-white">
      {/* 1. Hero Section Improvement */}
      <section className="pt-24 pb-16 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight">
          Fix Your CIBIL Score <br className="hidden md:block" /> Legally &amp; Professionally
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Loan Rejected? Low CIBIL Score? Business Funding Stuck? <br className="hidden md:block" />
          Get a Professional Credit Diagnosis Today.
        </p>

        {/* Visually stronger ₹1500 highlight */}
        <div className="inline-block bg-[#02031e] border border-teal-500/30 rounded-full px-8 py-3 mb-10 shadow-[0_0_15px_rgba(45,212,191,0.15)]">
          <span className="font-bold text-teal-400 tracking-wide text-lg">CIBIL Consultation – ₹1500 Only</span>
        </div>

        {/* Two-column bullet alignment on desktop */}
        <div className="max-w-2xl mx-auto mb-10">
          <ul className="text-left text-sm text-slate-300 grid sm:grid-cols-2 gap-4">
            <li className="flex items-center">
              <span className="text-teal-400 mr-3 text-lg">✔</span> Expert Credit Report Analysis
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-3 text-lg">✔</span> Step-by-Step Action Plan
            </li>
            <li className="flex items-center sm:col-span-2 sm:justify-center">
              <span className="text-teal-400 mr-3 text-lg">✔</span> Funding Readiness Guidance
            </li>
          </ul>
        </div>

        <p className="text-xs text-slate-500 mb-8 font-medium">
          *Dispute Resolution Fees Quoted Separately Based on Case Complexity
        </p>

        <div className="flex flex-col items-center">
          <a
            href="https://wa.me/917038790377?text=I%20want%20to%20book%20CIBIL%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-teal-500 text-black font-bold text-lg rounded-xl hover:bg-teal-400 transition-colors shadow-lg hover:shadow-teal-500/25 transform hover:-translate-y-0.5"
          >
            Book via WhatsApp
          </a>
          {/* Subtle credibility micro-line */}
          <span className="text-xs text-slate-400 mt-4 font-medium tracking-wide">
            RBI-compliant. Structured Process. No False Guarantees.
          </span>
        </div>
      </section>

      {/* 2. Authority Micro-Block */}
      <section className="py-8 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
            Trusted by Salaried Professionals, MSMEs &amp; Business Owners
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm text-slate-300">
            <div className="flex items-center"><span className="text-teal-500 mr-2">✔</span> Structured Legal Process</div>
            <div className="flex items-center"><span className="text-teal-500 mr-2">✔</span> Commercial CIBIL Expertise</div>
            <div className="flex items-center"><span className="text-teal-500 mr-2">✔</span> Transparent Fee Model</div>
          </div>
        </div>
      </section>

      {/* 3. Who We Help Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Who We Help</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Designed for individuals and businesses serious about credit improvement.
            </p>
          </div>
          <ul className="max-w-md mx-auto space-y-4 text-lg text-slate-300">
            <li className="flex items-start bg-white/5 p-4 rounded-xl border border-white/5"><span className="text-teal-400 mr-4 mt-1 leading-none text-xl">✔</span> <span>Home Loan Aspirants</span></li>
            <li className="flex items-start bg-white/5 p-4 rounded-xl border border-white/5"><span className="text-teal-400 mr-4 mt-1 leading-none text-xl">✔</span> <span>Business Owners (MSME / Pvt Ltd / LLP)</span></li>
            <li className="flex items-start bg-white/5 p-4 rounded-xl border border-white/5"><span className="text-teal-400 mr-4 mt-1 leading-none text-xl">✔</span> <span>Working Capital Seekers</span></li>
            <li className="flex items-start bg-white/5 p-4 rounded-xl border border-white/5"><span className="text-teal-400 mr-4 mt-1 leading-none text-xl">✔</span> <span>Loan Rejected Applicants</span></li>
            <li className="flex items-start bg-white/5 p-4 rounded-xl border border-white/5"><span className="text-teal-400 mr-4 mt-1 leading-none text-xl">✔</span> <span>NRI Profile Correction Cases</span></li>
          </ul>
        </div>
      </section>

      {/* 4. Our Process Section (Premium Touch) */}
      <section className="py-20 border-t border-white/5 bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Process</h2>
            <p className="text-slate-400">A clear, transparent path to restoring your credit health.</p>
          </div>

          <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active pb-12">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-teal-500/30 bg-slate-900 text-teal-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold text-sm">1</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#0f172a] p-6 rounded-2xl border border-white/5 group-hover:border-teal-500/30 transition-colors">
                <h3 className="text-xl font-bold mb-2 text-white">Professional Audit</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  Comprehensive evaluation of your financial history.
                </p>
                <div className="text-slate-300 text-sm bg-white/5 p-3 rounded-lg">
                  We analyze your full CIBIL / Commercial report line-by-line.
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active pb-12">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-teal-500/30 bg-slate-900 text-teal-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold text-sm">2</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#0f172a] p-6 rounded-2xl border border-white/5 group-hover:border-teal-500/30 transition-colors">
                <h3 className="text-xl font-bold mb-2 text-white">Error Identification</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  Pinpointing the exact factors pulling your score down.
                </p>
                <ul className="text-slate-300 text-sm space-y-2 bg-white/5 p-4 rounded-lg">
                  <li className="flex items-start"><span className="text-teal-500 mr-2 mt-0.5">•</span> Incorrect DPD entries</li>
                  <li className="flex items-start"><span className="text-teal-500 mr-2 mt-0.5">•</span> Settled/Written-off remarks</li>
                  <li className="flex items-start"><span className="text-teal-500 mr-2 mt-0.5">•</span> High utilization risks</li>
                  <li className="flex items-start"><span className="text-teal-500 mr-2 mt-0.5">•</span> Fraudulent or mismatched accounts</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-teal-500/30 bg-slate-900 text-teal-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold text-sm">3</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#0f172a] p-6 rounded-2xl border border-white/5 group-hover:border-teal-500/30 transition-colors">
                <h3 className="text-xl font-bold mb-2 text-white">Strategic Plan</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  A documented roadmap sent to you for structured resolution.
                </p>
                <div className="text-slate-300 text-sm bg-white/5 p-4 rounded-lg space-y-2 text-left">
                  <div className="flex items-center"><span className="text-teal-400 mr-2 text-xs">✔</span> Clear correction roadmap</div>
                  <div className="flex items-center"><span className="text-teal-400 mr-2 text-xs">✔</span> Timeline guidance</div>
                  <div className="flex items-center"><span className="text-teal-400 mr-2 text-xs">✔</span> Escalation process (if needed)</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Understanding CIBIL Score Impact Section (New Premium Block) */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Understanding CIBIL Score Impact</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Your credit profile is the bedrock of your financial credibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0f172a] p-8 rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold text-teal-400 mb-3">Access to Funding</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Institutions rely on your CIBIL score to determine risk. A compromised profile directly leads to loan rejections, higher interest rates, or restricted business working capital lines.
              </p>
            </div>

            <div className="bg-[#0f172a] p-8 rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold text-teal-400 mb-3">The Need for Structure</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Credit bureaus process millions of records. Correcting erroneous data requires formal disputes, exact documentation, and adherence to specific banking protocols to be successful.
              </p>
            </div>

            <div className="bg-[#0f172a] p-8 rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold text-teal-400 mb-3">Discipline is Key</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Beyond error correction, maintaining a healthy mix of credit and keeping utilization low over months demonstrates the financial discipline lenders demand.
              </p>
            </div>

            <div className="bg-[#0f172a] p-8 rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold text-teal-400 mb-3">No "Overnight" Fixes</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Instant score boosts are unrealistic and often violate compliance standards. True credit repair is a steady, legal process of updating bureau records systematically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Case Results Section */}
      <section className="py-20 border-t border-white/5 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Recent Case Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#0f172a] to-slate-900 p-8 rounded-2xl border border-white/10 text-center shadow-lg">
              <span className="block text-sm text-teal-500 font-bold mb-2 uppercase tracking-wider">Retail / Personal</span>
              <p className="font-bold text-2xl text-white mb-3">612 <span className="text-slate-500 font-normal mx-2">→</span> 742</p>
              <p className="text-slate-400 text-sm">After Structured Correction</p>
            </div>
            <div className="bg-gradient-to-br from-[#0f172a] to-slate-900 p-8 rounded-2xl border border-white/10 text-center shadow-lg">
              <span className="block text-sm text-teal-500 font-bold mb-2 uppercase tracking-wider">Business / MSME</span>
              <p className="font-bold text-2xl text-white mb-3">Rank 8 <span className="text-slate-500 font-normal mx-2">→</span> Rank 4</p>
              <p className="text-slate-400 text-sm">After 9 Months Discipline</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-8 text-center italic">
            * Individual outcomes vary based on profile history, specific errors, and ongoing financial discipline.
          </p>
        </div>
      </section>

      {/* 7. Disclaimer Section */}
      <section className="py-12 border-t border-white/5 bg-[#0a0f26]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-6 text-center shadow-inner">
            <h4 className="text-slate-300 font-bold mb-2 text-sm uppercase tracking-widest">Important Disclaimer</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              We do not delete genuine defaults. We correct reporting errors and provide structured compliance-based guidance. All changes to credit profiles are made strictly by the bureaus based on valid documentation provided to your banking institutions.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Final CTA (Premium Conversion Finish) */}
      <section className="py-24 border-t border-white/5 text-center relative overflow-hidden">
        {/* Subtle background glow for urgency */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-teal-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight">
            Don’t Wait for Another <br className="hidden md:block" /> Loan Rejection.
          </h2>
          <p className="text-xl text-slate-300 mb-4">
            Book Your ₹1500 CIBIL Consultation Today.
          </p>
          <p className="text-teal-400 font-medium mb-10 text-sm uppercase tracking-widest">
            Delay today can cost you funding tomorrow.
          </p>
          <a
            href="https://wa.me/917038790377?text=I%20want%20to%20book%20CIBIL%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-5 bg-teal-500 text-black font-bold text-lg rounded-xl hover:bg-teal-400 transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transform hover:-translate-y-1"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default CibilConsultation;
