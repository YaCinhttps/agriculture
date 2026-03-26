import { Wheat, Droplets, TestTube, Clock } from 'lucide-react';
import { Link } from 'react-router';

const mockConsultations = [
  { id: 1, icon: Wheat, title: 'Crop suggestion for clay soil', date: '2h ago', color: 'from-orange-500 to-amber-500' },
  { id: 2, icon: Droplets, title: 'Irrigation schedule advice', date: '5h ago', color: 'from-blue-500 to-cyan-500' },
  { id: 3, icon: TestTube, title: 'Soil analysis - pH levels', date: '1d ago', color: 'from-purple-500 to-pink-500' },
  { id: 4, icon: Wheat, title: 'Best time to plant corn', date: '5d ago', color: 'from-green-500 to-emerald-500' },
];

export function HistoryPanelPremium() {
  return (
    <div className="w-80 bg-white/50 backdrop-blur-xl border-r border-gray-100 flex flex-col h-full">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">History</h2>
        <p className="text-xs text-gray-500">Your Recent Consultations</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {mockConsultations.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className="w-full p-4 hover:bg-white rounded-2xl border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300 text-left group"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 font-medium truncate mb-1">{item.title}</p>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="p-4 space-y-2">
        <Link 
          to="/history" 
          className="w-full px-4 py-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-medium text-center block"
        >
          View All History
        </Link>
        <button className="w-full px-4 py-3 bg-gradient-to-r from-[#2e7d32] to-[#1b5e20] text-white rounded-xl hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 font-medium">
          New Consultation
        </button>
      </div>
    </div>
  );
}