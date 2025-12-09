import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Zap } from 'lucide-react';
import { useStore } from '../context/Store';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'bot' | 'user' }[]>([
    { text: "Yo! Welcome to PUB FITNESS. How can I help you crush your goals?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // User message
    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');

    // Bot response logic (Rule based)
    setTimeout(() => {
      let botResponse = "Not sure about that. Try asking about 'plans', 'hours', or 'location'.";
      const lowerInput = userMsg.toLowerCase();

      if (lowerInput.includes('plan') || lowerInput.includes('price') || lowerInput.includes('cost')) {
        botResponse = "We've got Monthly ($49), Quarterly ($129), and Yearly ($450) options. Check the Plans page to join the squad.";
      } else if (lowerInput.includes('time') || lowerInput.includes('open') || lowerInput.includes('hour')) {
        botResponse = "We never sleep. 24/7 access for members. Staffed 6 AM - 10 PM.";
      } else if (lowerInput.includes('location') || lowerInput.includes('address') || lowerInput.includes('where')) {
        botResponse = "Find us at 123 Neon Ave, Night City. Follow the bass.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('email')) {
        botResponse = "Hit us up at +1 (555) 000-NIGHT or support@pubfitness.com.";
      } else if (lowerInput.includes('expire') || lowerInput.includes('renew')) {
        if (user) {
          botResponse = "Check your Dashboard for expiry details and instant renewal.";
        } else {
          botResponse = "Login first to see your membership status.";
        }
      }

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 600);
  };

  const quickOptions = ["Plans", "Hours", "Location", "My Expiry"];

  const handleQuickOption = (opt: string) => {
    setInput(opt);
    if (opt === "Plans") setInput("What are the plans?");
    else if (opt === "Hours") setInput("What are the timings?");
    else if (opt === "Location") setInput("Where is the gym?");
    else if (opt === "My Expiry") setInput("When does my plan expire?");
    
    setTimeout(() => {
       const btn = document.getElementById('chat-send-btn');
       if(btn) btn.click();
    }, 100);
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-green-600 text-black rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-500 transition-all z-40 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 h-[500px] bg-[#0a0f26] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-white/10">
          {/* Header */}
          <div className="bg-green-600 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center mr-3">
                <Zap className="h-5 w-5 text-black fill-current" />
              </div>
              <div>
                <h3 className="font-black text-black text-sm uppercase tracking-wide">PUB Support</h3>
                <p className="text-xs text-black/70 font-bold">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black/60 hover:text-black">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 bg-[#050816] space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-green-600 text-black font-medium rounded-br-none' : 'bg-[#1e293b] text-slate-200 border border-white/5 rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          <div className="p-3 bg-[#0a0f26] border-t border-white/5 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {quickOptions.map((opt) => (
              <button 
                key={opt}
                onClick={() => handleQuickOption(opt)}
                className="px-3 py-1 bg-[#1e293b] border border-white/10 text-green-500 text-xs font-bold uppercase tracking-wide rounded-full hover:bg-green-500/10 transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-[#0a0f26] flex items-center gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-grow px-4 py-2 bg-[#050816] border border-white/10 rounded-full text-sm text-white focus:outline-none focus:border-green-500 placeholder-slate-600"
            />
            <button 
              id="chat-send-btn"
              onClick={handleSend}
              className="p-2 bg-green-600 text-black rounded-full hover:bg-green-500 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;