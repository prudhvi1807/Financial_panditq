import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const whatsappMessage = `
📩 New Appointment Request

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

    const whatsappNumber = "919381871936"; // 🔁 your WhatsApp number (no +)

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0f26]">
      {/* Hero */}
      <div className="pt-20 pb-12 text-center px-4 bg-slate-900 border-b border-white/5">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Financialpandit
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Have questions about loans, taxes, or investments? We’re here to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-400 mr-4">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-white font-bold">Email Us</h4>
                  <p className="text-slate-400">financialpandit@zohomail.in</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-400 mr-4">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-white font-bold">Call Us</h4>
                  <p className="text-slate-400">+91 7038 790 377</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-400 mr-4">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-white font-bold">Visit Us</h4>
                  <p className="text-slate-400">
                    123 Financial District <br />
                    Tech City, India 500081
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            {submitted ? (
              <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-white font-bold text-xl mb-2">
                  Message Ready!
                </h4>
                <p className="text-slate-400">
                  WhatsApp has opened. Please click send.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-teal-400 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-[#0a0f26] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-[#0a0f26] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full bg-[#0a0f26] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
                />
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full bg-[#0a0f26] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
                ></textarea>

                <button className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl text-white font-bold flex justify-center items-center">
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
