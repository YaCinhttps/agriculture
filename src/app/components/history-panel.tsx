import { Search, Wheat, Droplets, TestTube, Sprout, FileText, Clock } from 'lucide-react';

const mockConsultations = [
  { id: 1, icon: Wheat, title: 'Crop suggestion for clay soil', date: '2 hours ago' },
  { id: 2, icon: Droplets, title: 'Irrigation schedule advice', date: '5 hours ago' },
  { id: 3, icon: TestTube, title: 'Soil analysis - pH levels', date: 'Yesterday' },
  { id: 4, icon: Sprout, title: 'Increase wheat production', date: '2 days ago' },
  { id: 5, icon: Droplets, title: 'Water saving techniques', date: '3 days ago' },
  { id: 6, icon: Wheat, title: 'Best time to plant corn', date: '5 days ago' },
];

export function HistoryPanel() {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-900 mb-3">Previous Consultations</h2>
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search history..."
            className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e7d32] focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {mockConsultations.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className="w-full px-4 py-3 hover:bg-gray-50 border-b border-gray-100 flex items-start gap-3 text-left transition-colors"
            >
              <div className="w-8 h-8 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-[#2e7d32]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 font-medium truncate">{item.title}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <button className="m-4 px-4 py-2 bg-[#2e7d32] text-white rounded-lg hover:bg-[#1b5e20] transition-colors flex items-center justify-center gap-2">
        <FileText className="w-4 h-4" />
        New Consultation
      </button>
    </div>
  );
}
