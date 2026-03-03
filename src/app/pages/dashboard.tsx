import { useState } from 'react';
import { HistoryPanelPremium } from '../components/history-panel-premium';
import { MapLocationPremium } from '../components/map-location-premium';
import { AskAIPremium } from '../components/ask-ai-premium';
import { AIResponsePremium } from '../components/ai-response-premium';
import { Menu, X, Info } from 'lucide-react';

export default function Dashboard() {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="flex">
      {/* Mobile History Toggle Button */}
      <button
        onClick={() => setShowHistory(!showHistory)}
        className="lg:hidden fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] text-white rounded-2xl shadow-2xl shadow-green-500/40 flex items-center justify-center hover:scale-110 transition-transform"
      >
        {showHistory ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Left Sidebar - History Panel */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 h-screen
        transform transition-transform duration-500 ease-out
        ${showHistory ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <HistoryPanelPremium />
      </div>

      {/* Overlay for mobile */}
      {showHistory && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden transition-opacity"
          onClick={() => setShowHistory(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
          {/* Map Location Section */}
          <div className="animate-fade-in">
            <MapLocationPremium />
          </div>

          {/* Ask AI Section */}
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <AskAIPremium />
          </div>

          {/* AI Response Section */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <AIResponsePremium />
          </div>

          {/* Footer */}
          <footer className="text-center py-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
              <Info className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">
                AI recommendations are advisory and based on environmental data
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
