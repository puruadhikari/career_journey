export interface PortfolioNode {
  id: number;
  title: string;
  content: string;
  details?: string;
  position: 'left' | 'right';
  colorClass: string; // Tailwind class for the hexagon color
  textColorClass: string; // Tailwind class for the text color
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}