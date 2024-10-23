import React from 'react';
import { createRoot } from 'react-dom/client';
import ChatWidget from './components/ChatWidget';
import { ChatConfig } from './types/chat';
import './index.css';

class AIChat {
  private config: ChatConfig;
  private container: HTMLElement;

  constructor(config: ChatConfig = {}) {
    this.config = config;
    this.container = document.createElement('div');
    this.container.id = 'ai-chat-widget';
    document.body.appendChild(this.container);
    
    const root = createRoot(this.container);
    root.render(<ChatWidget config={this.config} />);
  }

  public destroy() {
    if (this.container) {
      document.body.removeChild(this.container);
    }
  }
}

// Make it available globally
declare global {
  interface Window {
    AIChat: typeof AIChat;
  }
}

window.AIChat = AIChat;

export default AIChat;