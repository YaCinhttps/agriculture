import { Mic, Send } from 'lucide-react';
import { useState } from 'react';

export function AskAICard() {
  const [question, setQuestion] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="font-semibold text-gray-900 mb-4">Ask the Farming Assistant</h2>
      
      <div className="relative">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Example: What is the best crop for this land?"
          className="w-full px-4 py-3 pr-24 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e7d32] focus:border-transparent resize-none"
          rows={4}
        />
        
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            title="Voice input"
          >
            <Mic className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            disabled={!question.trim()}
            className="p-2 bg-[#2e7d32] text-white rounded-lg hover:bg-[#1b5e20] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            title="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
