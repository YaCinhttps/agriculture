import { Check, Loader2 } from 'lucide-react';
import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = { lat: 33.5731, lng: -7.5898 };

export function MapLocationCard() {
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setSelectedLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    }
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Select Your Land</h2>
        
        <div className="relative w-full h-80 rounded-lg overflow-hidden">
          {loadError && (
            <div className="flex items-center justify-center h-full bg-red-50 text-red-600 text-sm">
              Failed to load Google Maps. Check your API key.
            </div>
          )}
          {!isLoaded && !loadError && (
            <div className="flex items-center justify-center h-full bg-gray-50">
              <Loader2 className="w-8 h-8 animate-spin text-[#2e7d32]" />
            </div>
          )}
          {isLoaded && !loadError && (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={selectedLocation || defaultCenter}
              zoom={10}
              onClick={handleMapClick}
              options={{
                streetViewControl: false,
                mapTypeControl: true,
                mapTypeId: 'hybrid',
              }}
            >
              {selectedLocation && (
                <Marker position={selectedLocation} />
              )}
            </GoogleMap>
          )}
        </div>

        {selectedLocation && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">Coordinates</p>
                <p className="font-mono text-sm text-gray-900">
                  {selectedLocation.lat.toFixed(6)}°{selectedLocation.lat >= 0 ? 'N' : 'S'},{' '}
                  {Math.abs(selectedLocation.lng).toFixed(6)}°{selectedLocation.lng >= 0 ? 'E' : 'W'}
                </p>
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
