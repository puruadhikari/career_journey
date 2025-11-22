import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! Welcome to the static version of my portfolio. Feel free to explore the interactive elements on the page." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Simulate network delay for local static version
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const responseText = "Thank you for your interest! This is a static version of the portfolio running locally, so the live AI features are disabled. Please refer to the 'Experience' and 'Contact' sections for more details.";
      
      const modelMsg: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#0078D4] to-[#2CB1BC] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-2"
        >
          <MessageCircle size={24} />
          <span className="font-semibold hidden md:inline">Chat with my AI</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[350px] md:w-[400px] h-[500px] flex flex-col border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0078D4] to-[#2CB1BC] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={18} />
              <h3 className="font-bold">Architect AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#0078D4] text-white rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm">
                  <Loader2 size={20} className="animate-spin text-[#0078D4]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-slate-100 border-transparent focus:bg-white focus:border-[#0078D4] focus:ring-0 rounded-xl px-4 py-2 text-sm transition-all outline-none border"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-[#0078D4] text-white p-2 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;