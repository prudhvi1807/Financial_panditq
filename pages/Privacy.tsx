import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-[#0a0f26] min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-slate-900 p-8 md:p-12 rounded-3xl border border-white/5">
        <h1 className="text-3xl font-heading font-bold text-white mb-8 border-b border-white/10 pb-6">Privacy Policy</h1>
        
        <div className="space-y-8 text-slate-300 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. Information We Collect</h2>
            <p>We collect personal information necessary to provide our services, including Name, Email, Phone Number, PAN, Aadhar details, and financial documents required for tax filing or loan processing.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. How We Use Your Data</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To process your service requests (Loans, ITR, GST).</li>
              <li>To communicate with you regarding updates and offers.</li>
              <li>To comply with legal obligations and regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. Data Sharing</h2>
            <p>We share your data only with trusted partners (Banks, CAs, Insurance Companies) strictly for the purpose of fulfilling your service request. We do not sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction. However, no internet transmission is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">5. Cookies</h2>
            <p>Our website uses cookies to enhance user experience and analyze traffic. You can choose to disable cookies through your browser settings, though this may affect site functionality.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information held by us. Please contact our support team to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">7. Updates to Policy</h2>
            <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and will be effective as soon as it is accessible.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;