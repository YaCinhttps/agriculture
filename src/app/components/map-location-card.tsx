import { MapPin, Check } from 'lucide-react';
import { useState } from 'react';

export function MapLocationCard() {
  const [selectedLocation, setSelectedLocation] = useState({ lat: 33.5731, lng: -7.5898 });
  const [pinDropped, setPinDropped] = useState(false);

  const handleMapClick = () => {
    // Simulate dropping a pin
    setPinDropped(true);
    setSelectedLocation({ lat: 33.5731 + Math.random() * 0.1, lng: -7.5898 + Math.random() * 0.1 });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Select Your Land</h2>
        
        {/* Mock Map Area */}
        <div
          onClick={handleMapClick}
          className="relative w-full h-80 bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] rounded-lg cursor-pointer overflow-hidden"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(46,125,50,0.05) 0px, rgba(46,125,50,0.05) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, rgba(46,125,50,0.05) 0px, rgba(46,125,50,0.05) 1px, transparent 1px, transparent 20px)'
          }}
        >
          {/* Mock map grid */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              {!pinDropped ? (
                <>
                  <MapPin className="w-12 h-12 text-[#2e7d32] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Click to drop a pin</p>
                </>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-4 animate-bounce-once">
                  <MapPin className="w-8 h-8 text-red-500 mx-auto mb-2 fill-red-500" />
                  <p className="text-xs text-gray-600">Location selected</p>
                </div>
              )}
            </div>
          </div>

          {/* Mock roads/paths */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gray-400 opacity-30"></div>
          <div className="absolute top-0 bottom-0 left-32 w-0.5 bg-gray-400 opacity-30"></div>
          <div className="absolute top-0 bottom-0 right-32 w-0.5 bg-gray-400 opacity-30"></div>
          <div className="absolute bottom-20 left-0 right-0 h-0.5 bg-gray-400 opacity-30"></div>
        </div>

        {pinDropped && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">Coordinates</p>
                <p className="font-mono text-sm text-gray-900">{selectedLocation.lat.toFixed(4)}°N, {Math.abs(selectedLocation.lng).toFixed(4)}°W</p>
                <p className="text-sm text-[#2e7d32] mt-2">📍 Casablanca Region, Morocco</p>
              </div>
              <button className="px-4 py-2 bg-[#2e7d32] text-white rounded-lg hover:bg-[#1b5e20] transition-colors flex items-center gap-2 whitespace-nowrap">
                <Check className="w-4 h-4" />
                Confirm Location
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
