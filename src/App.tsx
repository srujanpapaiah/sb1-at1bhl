import React from 'react';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Support Chat Demo</h1>
        <p className="text-lg text-gray-700 mb-4">
          This is a demo page showing our AI-powered support chatbot. Click the chat button in the bottom right corner to start a conversation.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Real-time AI-powered responses</li>
            <li>Beautiful, responsive design</li>
            <li>Minimizable chat window</li>
            <li>Message history</li>
            <li>Typing indicators</li>
            <li>Timestamp display</li>
          </ul>
        </div>
      </div>
      <ChatWidget />
    </div>
  );
}

export default App;