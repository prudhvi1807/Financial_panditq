import React from 'react';

const Terms = () => {
  return (
    <div className="bg-[#0a0f26] min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-slate-900 p-8 md:p-12 rounded-3xl border border-white/5">
        <h1 className="text-3xl font-heading font-bold text-white mb-8 border-b border-white/10 pb-6">Terms & Conditions</h1>
        
        <div className="space-y-8 text-slate-300 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. Introduction</h2>
            <p>Welcome to Financialpandit. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you differ from any part of these terms, you may not use our services.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. Services Offered</h2>
            <p>Financialpandit provides assistance and consultancy for Loans, Income Tax Filing, GST Registration/Filing, Insurance, and Mutual Fund Investments. We act as a facilitator between users and financial institutions/government bodies.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. No Guarantee of Outcome</h2>
            <p>While we strive for the best results, Financialpandit does not guarantee loan approvals, specific tax refund amounts, or investment returns. These outcomes depend on third-party institutions (banks, IT department, AMCs) and your eligibility.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. User Responsibilities</h2>
            <p>You agree to provide accurate, current, and complete information during the registration and application process. Financialpandit is not responsible for penalties or rejections caused by incorrect data provided by the user.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">5. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Financialpandit shall not be liable for any indirect, incidental, special, or consequential damages arising out of the use or inability to use the services.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">6. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts in India.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">7. Contact Information</h2>
            <p>For any questions regarding these terms, please contact us at support@financialpandit.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;