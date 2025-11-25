import { useState } from 'react';
import { PORTFOLIO_NODES } from './constants';
import HexagonBadge from './components/HexagonBadge';
import ContentCard from './components/ContentCard';
import ChatWidget from './components/ChatWidget';
import BubblePopup from './components/BubblePopup';
import ProfileAvatar from './components/ProfileAvatar';

const App = () => {
  const [activeNodeId, setActiveNodeId] = useState(null as number | null);

  // Filter nodes based on left or right position
  const leftNodes = [
    PORTFOLIO_NODES.find(n => n.id === 1)!,
    PORTFOLIO_NODES.find(n => n.id === 6)!,
    PORTFOLIO_NODES.find(n => n.id === 5)!,
  ];

  const rightNodes = [
    PORTFOLIO_NODES.find(n => n.id === 2)!,
    PORTFOLIO_NODES.find(n => n.id === 3)!,
    PORTFOLIO_NODES.find(n => n.id === 4)!,
  ];

  const handleNodeClick = (id: number) => {
    setActiveNodeId(id);
  };

  const handleClosePopup = () => {
    setActiveNodeId(null);
  };

  const activeNode = PORTFOLIO_NODES.find(n => n.id === activeNodeId);

  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden pb-20 font-sans">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto pt-12 pb-2 px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0078D4] tracking-tight mb-2">
          Architecting the Future: 23 Years of Technology Leadership
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#0078D4] to-[#2CB1BC] mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-[#0078D4] font-medium text-sm md:text-base animate-pulse">
          Click on the numbered hexagons below to explore details
        </p>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto relative px-4 pt-2 pb-12">
        
        {/* Grid Layout: Left Content | Center Visual | Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (Text) - Hidden on mobile, shown on LG */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-16 justify-between h-full py-12">
            {leftNodes.map((node) => (
              <ContentCard key={node.id} node={node} align="left" />
            ))}
          </div>

          {/* Center Column (The Visualization) */}
          <div className="col-span-1 lg:col-span-6 relative flex justify-center items-center min-h-[600px]">
            
            {/* Decorative Circle Rings */}
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-2 border-[#0078D4]/20 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-[#2CB1BC]/30 animate-[spin_40s_linear_infinite_reverse]" />

            {/* Central Profile Image */}
            <div className="relative z-20">
               <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl overflow-hidden relative z-20 ring-4 ring-[#0078D4]/10">
                 <ProfileAvatar className="w-full h-full hover:scale-110 transition-transform duration-500" />
               </div>
               {/* Inner glow behind image */}
               <div className="absolute inset-0 rounded-full bg-blue-400 blur-3xl opacity-20 -z-10"></div>
            </div>

            {/* Positioning Hexagons - Absolute positioning for Radial Layout on Desktop */}
            {/* Hex 1: Top Left */}
            <div className="absolute top-[5%] left-[15%] md:top-[10%] md:left-[20%] z-30">
               <HexagonBadge 
                 number={1} 
                 colorClass={PORTFOLIO_NODES[0].colorClass} 
                 onClick={() => handleNodeClick(1)}
                 isActive={activeNodeId === 1}
               />
               <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 text-center pointer-events-none">
                  <h3 className="font-bold text-[#0078D4]">Experience</h3>
               </div>
            </div>

            {/* Hex 2: Top Right */}
            <div className="absolute top-[5%] right-[15%] md:top-[10%] md:right-[20%] z-30">
               <HexagonBadge 
                 number={2} 
                 colorClass={PORTFOLIO_NODES[1].colorClass} 
                 onClick={() => handleNodeClick(2)}
                 isActive={activeNodeId === 2}
               />
                <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 text-center pointer-events-none">
                  <h3 className="font-bold text-[#17a2b8]">Technologies</h3>
               </div>
            </div>

            {/* Hex 3: Mid Right */}
            <div className="absolute top-[50%] right-[2%] md:right-[5%] -translate-y-1/2 z-30">
               <HexagonBadge 
                 number={3} 
                 colorClass={PORTFOLIO_NODES[2].colorClass} 
                 onClick={() => handleNodeClick(3)}
                 isActive={activeNodeId === 3}
               />
               <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 text-center pointer-events-none">
                  <h3 className="font-bold text-[#4a6fa5]">Domain</h3>
               </div>
            </div>

            {/* Hex 4: Bottom Right */}
            <div className="absolute bottom-[5%] right-[15%] md:bottom-[10%] md:right-[20%] z-30">
               <HexagonBadge 
                 number={4} 
                 colorClass={PORTFOLIO_NODES[3].colorClass} 
                 onClick={() => handleNodeClick(4)}
                 isActive={activeNodeId === 4}
               />
               <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 text-center pointer-events-none">
                  <h3 className="font-bold text-[#1f2937]">Maturity</h3>
               </div>
            </div>

             {/* Hex 5: Bottom Left */}
             <div className="absolute bottom-[5%] left-[15%] md:bottom-[10%] md:left-[20%] z-30">
               <HexagonBadge 
                 number={5} 
                 colorClass={PORTFOLIO_NODES[4].colorClass} 
                 onClick={() => handleNodeClick(5)}
                 isActive={activeNodeId === 5}
               />
                <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 text-center pointer-events-none">
                  <h3 className="font-bold text-[#38bdf8]">Certifications</h3>
               </div>
            </div>

             {/* Hex 6: Mid Left */}
             <div className="absolute top-[50%] left-[2%] md:left-[5%] -translate-y-1/2 z-30">
               <HexagonBadge 
                 number={6} 
                 colorClass={PORTFOLIO_NODES[5].colorClass} 
                 onClick={() => handleNodeClick(6)}
                 isActive={activeNodeId === 6}
               />
                <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 text-center pointer-events-none">
                  <h3 className="font-bold text-[#0f4c75]">Patents</h3>
               </div>
            </div>

            {/* Connecting Lines (Decorative, SVG behind everything) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30 hidden md:block" viewBox="0 0 600 600">
               {/* Lines radiating from center to approximate hex locations */}
               <line x1="300" y1="300" x2="180" y2="150" stroke="#0078D4" strokeWidth="2" strokeDasharray="5,5" /> {/* To 1 */}
               <line x1="300" y1="300" x2="420" y2="150" stroke="#17a2b8" strokeWidth="2" strokeDasharray="5,5" /> {/* To 2 */}
               <line x1="300" y1="300" x2="500" y2="300" stroke="#4a6fa5" strokeWidth="2" strokeDasharray="5,5" /> {/* To 3 */}
               <line x1="300" y1="300" x2="420" y2="450" stroke="#1f2937" strokeWidth="2" strokeDasharray="5,5" /> {/* To 4 */}
               <line x1="300" y1="300" x2="180" y2="450" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5,5" /> {/* To 5 */}
               <line x1="300" y1="300" x2="100" y2="300" stroke="#0f4c75" strokeWidth="2" strokeDasharray="5,5" /> {/* To 6 */}
            </svg>
          </div>

          {/* Right Column (Text) - Hidden on mobile, shown on LG */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-16 justify-between h-full py-12">
             {rightNodes.map((node) => (
              <ContentCard key={node.id} node={node} align="right" />
            ))}
          </div>
        </div>

        {/* Mobile Content List View */}
        <div className="lg:hidden grid gap-8 mt-12">
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Detailed Profile</h2>
              {PORTFOLIO_NODES.map((node) => (
                 <div key={node.id} className="mb-6 last:mb-0" onClick={() => handleNodeClick(node.id)}>
                    <div className="flex items-center gap-3 mb-2">
                       <div className={`w-8 h-8 rounded-full ${node.colorClass} flex items-center justify-center text-white font-bold text-sm`}>
                          {node.id}
                       </div>
                       <h3 className={`font-bold uppercase text-sm ${node.textColorClass}`}>{node.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm pl-11">{node.content.replace(/\*\*/g, '')}</p>
                 </div>
              ))}
           </div>
        </div>
      </main>
      
      <ChatWidget />
      
      {/* Popup Bubble */}
      {activeNode && (
        <BubblePopup node={activeNode} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default App;