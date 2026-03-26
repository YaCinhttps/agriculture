import { Mic, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface AskAIPremiumProps {
  onAsk?: (question: string) => void;
  loading?: boolean;
  locationSelected?: boolean;
}

export function AskAIPremium({ onAsk, loading, locationSelected }: AskAIPremiumProps) {
  const [question, setQuestion] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (question.trim() && onAsk) {
      onAsk(question.trim());
    }
  };

  return (
    <div className="group">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Ask Your Question</h1>
        <p className="text-gray-500">Get AI-powered agricultural insights in seconds</p>
      </div>

      <div className={`bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border transition-all duration-300 ${
        isFocused ? 'border-[#2e7d32] shadow-2xl shadow-green-500/10' : 'border-gray-100'
      }`}>
        <div className="p-8">
          <div className="relative">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="What would you like to know about your farm?"
              className="w-full px-0 py-0 text-lg border-none focus:outline-none focus:ring-0 resize-none text-gray-900 placeholder:text-gray-400"
              rows={3}
            />
          </div>

          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors group/mic">
              <div className="w-9 h-9 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover/mic:shadow-md transition-all">
                <Mic className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-sm text-gray-600">Voice input</span>
            </button>

            <button
              onClick={handleSubmit}
              disabled={!question.trim() || loading || !locationSelected}
              className="group/btn px-6 py-3 bg-gradient-to-r from-[#2e7d32] to-[#1b5e20] text-white rounded-xl hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              title={!locationSelected ? 'Select a location on the map first' : ''}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="font-medium">Analyzing...</span>
                </>
              ) : (
                <>
                  <span className="font-medium">Get Answer</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Suggestions */}
        <div className="px-8 pb-8">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Quick suggestions</p>
          <div className="flex flex-wrap gap-2">
            {['Best crop for my soil', 'Irrigation schedule', 'Soil fertility tips'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setQuestion(suggestion)}
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm rounded-xl transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
