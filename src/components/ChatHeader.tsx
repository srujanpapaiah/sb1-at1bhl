import React from 'react';
import { Bot, Minimize2, Maximize2, X } from 'lucide-react';

interface ChatHeaderProps {
  isMinimized: boolean;
  onMinimize: () => void;
  onClose: () => void;
}

export default function ChatHeader({ isMinimized, onMinimize, onClose }: ChatHeaderProps) {
  return (
    <div className="bg-indigo-600 p-4 rounded-t-lg flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Bot className="w-6 h-6 text-white" />
        <h2 className="text-white font-semibold">AI Support</h2>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onMinimize}
          className="text-white hover:text-indigo-200 transition-colors"
          aria-label={isMinimized ? 'Maximize' : 'Minimize'}
        >
          {isMinimized ? <Maximize2 className="w-5 h-5" /> : <Minimize2 className="w-5 h-5" />}
        </button>
        <button
          onClick={onClose}
          className="text-white hover:text-indigo-200 transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}