import React from 'react';
import { PortfolioNode } from '../types';
import { X } from 'lucide-react';

interface BubblePopupProps {
  node: PortfolioNode;
  onClose: () => void;
}

const BubblePopup: React.FC<BubblePopupProps> = ({ node, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white text-slate-800 rounded-[2.5rem] shadow-2xl max-w-4xl w-full p-8 relative transform transition-all animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 border-[6px] border-white ring-4 ring-[#0078D4]/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background decoration */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${node.colorClass} opacity-10 blur-3xl`}></div>
        <div className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full ${node.colorClass} opacity-10 blur-3xl`}></div>

        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 rounded-full transition-colors z-10"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        
        <div className="relative z-0">
          <div className="flex items-center gap-4 mb-5">
            {/* Profile Image instead of Number Badge */}
             <div className="w-16 h-16 rounded-full border-2 border-white shadow-lg overflow-hidden ring-2 ring-slate-100 shrink-0">
                 <img 
                   src="/profile/profile.jpeg" 
                   alt="Profile" 
                   className="w-full h-full object-cover"
                 />
             </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Detail View</span>
              <h2 className="text-2xl font-bold text-slate-800 leading-tight">{node.title}</h2>
            </div>
          </div>
          
          <div className="prose prose-slate prose-sm md:prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed">
              {node.details || node.content}
            </p>
          </div>

          <div className="mt-8 flex justify-end">
             <button 
                onClick={onClose}
                className={`px-6 py-2 rounded-full text-white font-medium text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 ${node.colorClass}`}
             >
               Close
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubblePopup;