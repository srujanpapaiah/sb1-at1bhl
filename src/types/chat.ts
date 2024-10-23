export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatConfig {
  apiKey?: string;
  theme?: {
    primary: string;
    secondary: string;
  };
  initialMessage?: string;
  position?: 'bottom-right' | 'bottom-left';
}