import { Volume2, Download, Sparkles } from 'lucide-react';

export function AIResponsePremium() {
  return (
    <div className="group">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">AI Recommendation</h1>
        <p className="text-gray-500">Based on your location and environmental data</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="p-8 pb-6 bg-gradient-to-br from-emerald-50 via-green-50 to-white border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/30">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Wheat (Hard Red Winter)</h3>
              <p className="text-gray-600 mt-1">Optimal for your land conditions</p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="p-8 space-y-6">
          {/* Why Section */}
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Why This Crop</h4>
            <div className="space-y-2">
              {[
                'Perfect match for clay-loam soil composition',
                'Thrives in Mediterranean climate conditions',
                'February is the ideal planting season',
                'Strong market demand in your region'
              ].map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3 group/item">
                  <div className="w-1.5 h-1.5 bg-[#2e7d32] rounded-full mt-2 group-hover/item:scale-150 transition-transform" />
                  <p className="text-gray-700 flex-1">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100">
              <p className="text-xs text-blue-600 uppercase tracking-wider mb-2">Expected Yield</p>
              <p className="text-2xl font-semibold text-gray-900">3.5 - 4.2</p>
              <p className="text-sm text-gray-600 mt-1">tons per hectare</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-5 border border-emerald-100">
              <p className="text-xs text-emerald-600 uppercase tracking-wider mb-2">Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">$2.8K - $3.4K</p>
              <p className="text-sm text-gray-600 mt-1">per hectare</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
              <p className="text-xs text-purple-600 uppercase tracking-wider mb-2">Harvest Time</p>
              <p className="text-2xl font-semibold text-gray-900">June - July</p>
              <p className="text-sm text-gray-600 mt-1">2026</p>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
            <h4 className="text-xs text-amber-700 uppercase tracking-wider mb-3">Key Tips</h4>
            <div className="space-y-2">
              {[
                'Apply 120 kg/ha nitrogen fertilizer before planting',
                'Irrigate every 15 days until flowering stage',
                'Monitor for rust disease during wet periods'
              ].map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-amber-600 font-medium">{idx + 1}.</span>
                  <p className="text-gray-700 flex-1">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-8 pb-8 flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2e7d32] to-[#1b5e20] text-white rounded-xl hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300">
            <Volume2 className="w-4 h-4" />
            <span className="font-medium">Listen</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 rounded-xl hover:shadow-md transition-all duration-300">
            <Download className="w-4 h-4" />
            <span className="font-medium">Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
