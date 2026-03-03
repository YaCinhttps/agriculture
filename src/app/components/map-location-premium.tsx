import { MapPin, Navigation, ArrowRight, Maximize2, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function MapLocationPremium() {
  const [selectedArea, setSelectedArea] = useState<{ lat: number; lng: number; size: number } | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const navigate = useNavigate();

  const handleMapClick = () => {
    if (!selectedArea) {
      setIsDrawing(true);
      setTimeout(() => {
        setSelectedArea({ 
          lat: 33.5731, 
          lng: -7.5898, 
          size: 12.5 // hectares
        });
        setIsDrawing(false);
      }, 800);
    }
  };

  const handleViewDashboard = () => {
    if (selectedArea) {
      navigate('/land-dashboard', { state: { landData: selectedArea } });
    }
  };

  return (
    <div className="group">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Select Your Land Area</h1>
        <p className="text-gray-500">Draw or select your farm boundary for accurate analysis</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
        <div
          onClick={handleMapClick}
          className="relative w-full h-96 cursor-crosshair overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
        >
          {/* Elegant grid pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(46, 125, 50) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            {!selectedArea && !isDrawing ? (
              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-white rounded-full shadow-2xl shadow-green-500/20 flex items-center justify-center mb-4 mx-auto">
                  <Maximize2 className="w-10 h-10 text-[#2e7d32]" />
                </div>
                <p className="text-gray-600 font-medium">Click to draw your land area</p>
                <p className="text-sm text-gray-400 mt-1">or drag to select a region</p>
              </div>
            ) : isDrawing ? (
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center mb-4 mx-auto animate-pulse">
                  <Maximize2 className="w-10 h-10 text-[#2e7d32]" />
                </div>
                <p className="text-gray-600 font-medium">Drawing area...</p>
              </div>
            ) : null}
          </div>

          {/* Selected Area Visualization */}
          {selectedArea && (
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="relative w-full h-full max-w-2xl">
                {/* Area boundary with premium styling */}
                <div className="absolute inset-0 border-4 border-[#2e7d32] rounded-2xl bg-[#2e7d32]/10 backdrop-blur-sm animate-scale-in shadow-2xl shadow-green-500/30">
                  {/* Corner markers */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-white border-2 border-[#2e7d32] rounded-full shadow-lg" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-white border-2 border-[#2e7d32] rounded-full shadow-lg" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border-2 border-[#2e7d32] rounded-full shadow-lg" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border-2 border-[#2e7d32] rounded-full shadow-lg" />
                  
                  {/* Center info badge */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white rounded-2xl shadow-2xl px-6 py-4 border-2 border-[#2e7d32]">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                          <Maximize2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{selectedArea.size} ha</p>
                          <p className="text-sm text-gray-500">Selected Area</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Measurement lines */}
                  <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
                    <div className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 shadow-lg border border-gray-200">
                      ~320m
                    </div>
                  </div>
                  <div className="absolute top-0 bottom-0 -right-12 flex items-center">
                    <div className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 shadow-lg border border-gray-200">
                      ~390m
                    </div>
                  </div>
                </div>

                {/* Grid pattern inside selected area */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, #2e7d32 0px, #2e7d32 1px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, #2e7d32 0px, #2e7d32 1px, transparent 1px, transparent 30px)'
                  }} />
                </div>
              </div>
            </div>
          )}

          {/* Decorative elements */}
          <div className="absolute top-8 left-8 w-2 h-2 bg-[#2e7d32] rounded-full opacity-40" />
          <div className="absolute top-16 right-12 w-3 h-3 bg-[#2e7d32] rounded-full opacity-30" />
          <div className="absolute bottom-12 left-16 w-2 h-2 bg-[#2e7d32] rounded-full opacity-50" />
        </div>

        {selectedArea && (
          <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div className="flex items-start gap-4 flex-1 min-w-[300px]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location Details</p>
                  <p className="font-mono font-medium text-gray-900 mb-2">
                    {selectedArea.lat.toFixed(4)}°N, {Math.abs(selectedArea.lng).toFixed(4)}°W
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div>
                      <p className="text-sm text-[#2e7d32] font-medium">Casablanca Region, Morocco</p>
                      <p className="text-xs text-gray-500 mt-0.5">Clay-loam soil type</p>
                    </div>
                    <div className="h-8 w-px bg-gray-200" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{selectedArea.size} hectares</p>
                      <p className="text-xs text-gray-500 mt-0.5">≈ {(selectedArea.size * 2.47).toFixed(1)} acres</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="group/btn px-6 py-3 bg-gradient-to-r from-[#2e7d32] to-[#1b5e20] text-white rounded-xl hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                <span>Confirm Area</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Additional area info */}
            <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Perimeter</p>
                <p className="text-lg font-semibold text-gray-900">~1.42 km</p>
              </div>
              <div className="text-center border-l border-r border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Shape</p>
                <p className="text-lg font-semibold text-gray-900">Rectangular</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Elevation</p>
                <p className="text-lg font-semibold text-gray-900">180-195m</p>
              </div>
            </div>

            {/* View Dashboard Button */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={handleViewDashboard}
                className="w-full group/dash px-8 py-4 bg-white border-2 border-[#2e7d32] text-[#2e7d32] rounded-2xl hover:bg-gradient-to-r hover:from-[#2e7d32] hover:to-[#1b5e20] hover:text-white hover:border-transparent hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <BarChart3 className="w-5 h-5 group-hover/dash:scale-110 transition-transform" />
                <span className="font-semibold">View Complete Land Dashboard</span>
                <ArrowRight className="w-5 h-5 group-hover/dash:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}