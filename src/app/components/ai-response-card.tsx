import { Volume2, Download, CheckCircle, Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';

export function AIResponseCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-semibold">AI</span>
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-gray-900">AI Response</h2>
          <p className="text-xs text-gray-500">Based on your location and soil data</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Recommended Crop */}
        <div className="bg-[#e8f5e9] rounded-lg p-4">
          <div className="flex items-start gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-[#2e7d32] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900">Recommended Crop</h3>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold text-[#2e7d32]">Wheat (Hard Red Winter)</span> is the best choice for your land based on current conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Why */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900">Why This Crop?</h3>
              <ul className="text-sm text-gray-700 mt-2 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-[#2e7d32] mt-1">•</span>
                  <span>Ideal for your clay-loam soil composition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2e7d32] mt-1">•</span>
                  <span>Suitable for Mediterranean climate with moderate rainfall</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2e7d32] mt-1">•</span>
                  <span>Current season (February) is optimal for planting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2e7d32] mt-1">•</span>
                  <span>High market demand in your region</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expected Yield */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900">Expected Yield</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average per hectare:</span>
                  <span className="font-semibold text-gray-900">3.5 - 4.2 tons</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Harvest time:</span>
                  <span className="font-semibold text-gray-900">June - July 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Estimated revenue:</span>
                  <span className="font-semibold text-[#2e7d32]">$2,800 - $3,400 /ha</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900">Important Tips</h3>
              <ul className="text-sm text-gray-700 mt-2 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">→</span>
                  <span>Apply nitrogen fertilizer at 120 kg/ha before planting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">→</span>
                  <span>Irrigate every 15 days until flowering stage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">→</span>
                  <span>Monitor for rust disease during wet periods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#2e7d32] text-white rounded-lg hover:bg-[#1b5e20] transition-colors">
          <Volume2 className="w-4 h-4" />
          Listen to Answer
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          <Download className="w-4 h-4" />
          Download Report PDF
        </button>
      </div>
    </div>
  );
}
