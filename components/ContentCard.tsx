import React from 'react';
import { PortfolioNode } from '../types';

interface ContentCardProps {
  node: PortfolioNode;
  align: 'left' | 'right';
}

const ContentCard: React.FC<ContentCardProps> = ({ node, align }) => {
  // Function to parse bold markdown for highlighting
  const renderContent = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className={`mb-8 md:mb-0 flex flex-col ${align === 'right' ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
      <h3 className={`${node.textColorClass} font-bold text-xl mb-2 uppercase tracking-wide`}>
        {node.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
        {renderContent(node.content)}
      </p>
    </div>
  );
};

export default ContentCard;