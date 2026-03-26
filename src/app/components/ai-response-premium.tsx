import { Volume2, Download, Sparkles, Loader2, AlertCircle, Leaf, Droplets, Thermometer, FlaskConical } from 'lucide-react';
import type { Recommendation } from '../pages/dashboard';

interface AIResponsePremiumProps {
  data: Recommendation | null;
  loading: boolean;
  error: string | null;
}

export function AIResponsePremium({ data, loading, error }: AIResponsePremiumProps) {
  // Loading state
  if (loading) {
    return (
      <div className="group">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">AI Recommendation</h1>
          <p className="text-gray-500">Analyzing your location...</p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 p-16 flex flex-col items-center justify-center">
          <Loader2 className="w-12 h-12 text-[#2e7d32] animate-spin mb-4" />
          <p className="text-gray-600 font-medium">Getting soil data, predicting crops, and generating explanation...</p>
          <p className="text-sm text-gray-400 mt-1">This may take a few seconds</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="group">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">AI Recommendation</h1>
          <p className="text-gray-500">Something went wrong</p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-red-200 p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900">Failed to get recommendation</h3>
              <p className="text-gray-600 mt-1">{error}</p>
              <p className="text-sm text-gray-400 mt-2">Make sure n8n and the FastAPI server are running.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Empty state — no request made yet
  if (!data) {
    return (
      <div className="group">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">AI Recommendation</h1>
          <p className="text-gray-500">Select a location and confirm to get started</p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 p-16 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-gray-300" />
          </div>
          <p className="text-gray-400">Your crop and fertilizer recommendation will appear here</p>
        </div>
      </div>
    );
  }

  // Data state — show real results
  return (
    <div className="group">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">AI Recommendation</h1>
        <p className="text-gray-500">Based on {data.location} environmental data</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
        {/* Header — Crop */}
        <div className="p-8 pb-6 bg-gradient-to-br from-emerald-50 via-green-50 to-white border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/30">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{data.recommended_crop}</h3>
              <p className="text-gray-600 mt-1">Recommended crop for {data.location}</p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          {/* Fertilizer */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100">
            <div className="flex items-center gap-3">
              <FlaskConical className="w-6 h-6 text-amber-600" />
              <div>
                <p className="text-xs text-amber-700 uppercase tracking-wider">Recommended Fertilizer</p>
                <p className="text-xl font-semibold text-gray-900 mt-1">{data.recommended_fertilizer}</p>
              </div>
            </div>
          </div>

          {/* Environmental Metrics */}
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Environmental Conditions</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="w-4 h-4 text-blue-600" />
                  <p className="text-xs text-blue-600 uppercase tracking-wider">Temperature</p>
                </div>
                <p className="text-2xl font-semibold text-gray-900">{data.weather_features.temperature}°C</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-2xl p-5 border border-cyan-100">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="w-4 h-4 text-cyan-600" />
                  <p className="text-xs text-cyan-600 uppercase tracking-wider">Humidity</p>
                </div>
                <p className="text-2xl font-semibold text-gray-900">{data.weather_features.humidity}%</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-5 border border-emerald-100">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="w-4 h-4 text-emerald-600" />
                  <p className="text-xs text-emerald-600 uppercase tracking-wider">Moisture</p>
                </div>
                <p className="text-2xl font-semibold text-gray-900">{data.weather_features.moisture}%</p>
              </div>
            </div>
          </div>

          {/* Soil Metrics */}
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Soil Analysis</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Soil Type</p>
                <p className="text-lg font-semibold text-gray-900">{data.soil_features.soil_type}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Nitrogen</p>
                <p className="text-lg font-semibold text-gray-900">{data.soil_features.nitrogen} <span className="text-xs text-gray-400">mg/kg</span></p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Potassium</p>
                <p className="text-lg font-semibold text-gray-900">{data.soil_features.potassium} <span className="text-xs text-gray-400">mg/kg</span></p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phosphorous</p>
                <p className="text-lg font-semibold text-gray-900">{data.soil_features.phosphorous} <span className="text-xs text-gray-400">mg/kg</span></p>
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">AI Explanation</h4>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-[#2e7d32] flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.explanation}</p>
              </div>
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
