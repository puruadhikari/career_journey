export interface PortfolioNode {
  id: number;
  title: string;
  content: string;
  details?: string;
  position: 'left' | 'right';
  colorClass: string; // Tailwind class for the hexagon color
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}