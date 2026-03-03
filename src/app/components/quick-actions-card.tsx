import { Wheat, TrendingUp, Droplets, Sparkles } from 'lucide-react';

const quickActions = [
  { id: 1, icon: Wheat, label: 'Recommend Crop', color: 'bg-orange-50 text-orange-600 hover:bg-orange-100' },
  { id: 2, icon: TrendingUp, label: 'Increase Production', color: 'bg-blue-50 text-blue-600 hover:bg-blue-100' },
  { id: 3, icon: Droplets, label: 'Irrigation Plan', color: 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100' },
  { id: 4, icon: Sparkles, label: 'Soil Fertility', color: 'bg-purple-50 text-purple-600 hover:bg-purple-100' },
];

export function QuickActionsCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="font-semibold text-gray-900 mb-4">Quick Actions</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${action.color}`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
