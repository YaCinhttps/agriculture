import { Navigation, ArrowRight, BarChart3, Loader2, Check, Trash2, Pencil } from 'lucide-react';
import { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router';
import { GoogleMap, useJsApiLoader, Polygon, Marker } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
const LIBRARIES: ('drawing' | 'geometry')[] = ['drawing', 'geometry'];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = { lat: 36.8065, lng: 10.1815 };

const polygonOptions = {
  fillColor: '#2e7d32',
  fillOpacity: 0.2,
  strokeColor: '#2e7d32',
  strokeOpacity: 0.8,
  strokeWeight: 3,
  clickable: false,
  editable: false,
  zIndex: 1,
};

interface MapLocationPremiumProps {
  onConfirm?: (lat: number, lng: number) => void;
  loading?: boolean;
}

function computeCentroid(path: google.maps.LatLngLiteral[]) {
  const n = path.length;
  if (n === 0) return null;
  const sum = path.reduce(
    (acc, p) => ({ lat: acc.lat + p.lat, lng: acc.lng + p.lng }),
    { lat: 0, lng: 0 }
  );
  return { lat: sum.lat / n, lng: sum.lng / n };
}

export function MapLocationPremium({ onConfirm, loading }: MapLocationPremiumProps) {
  const [polygonPath, setPolygonPath] = useState<google.maps.LatLngLiteral[]>([]);
  const [centroid, setCentroid] = useState<{ lat: number; lng: number } | null>(null);
  const [areaHa, setAreaHa] = useState<number>(0);
  const [perimeterKm, setPerimeterKm] = useState<number>(0);
  const [confirmed, setConfirmed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(true);
  const navigate = useNavigate();
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: LIBRARIES,
  });

  const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (!isDrawing || confirmed) return;
    if (e.latLng) {
      setPolygonPath((prev) => [...prev, { lat: e.latLng!.lat(), lng: e.latLng!.lng() }]);
    }
  }, [isDrawing, confirmed]);

  const finishDrawing = useCallback(() => {
    if (polygonPath.length < 3) return;
    setIsDrawing(false);

    const center = computeCentroid(polygonPath);
    setCentroid(center);

    // Compute area & perimeter using geometry library
    const latLngs = polygonPath.map((p) => new google.maps.LatLng(p.lat, p.lng));
    const areaSqM = google.maps.geometry.spherical.computeArea(latLngs);
    setAreaHa(areaSqM / 10000); // m² to hectares

    const closedPath = [...latLngs, latLngs[0]];
    const perimeterM = google.maps.geometry.spherical.computeLength(closedPath);
    setPerimeterKm(perimeterM / 1000);
  }, [polygonPath]);

  const resetDrawing = () => {
    setPolygonPath([]);
    setCentroid(null);
    setAreaHa(0);
    setPerimeterKm(0);
    setIsDrawing(true);
    setConfirmed(false);
  };

  const handleConfirmArea = () => {
    if (centroid && onConfirm) {
      onConfirm(centroid.lat, centroid.lng);
      setConfirmed(true);
    }
  };

  const handleViewDashboard = () => {
    if (centroid) {
      navigate('/land-dashboard', { state: { landData: { ...centroid, area: areaHa } } });
    }
  };

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  return (
    <div className="group">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Draw Your Land Perimeter</h1>
        <p className="text-gray-500">
          {isDrawing && polygonPath.length === 0 && 'Click on the map to start drawing your farm boundary'}
          {isDrawing && polygonPath.length > 0 && polygonPath.length < 3 && `Keep clicking to add points (${polygonPath.length}/3 minimum)`}
          {isDrawing && polygonPath.length >= 3 && `${polygonPath.length} points placed — click "Finish Drawing" when done`}
          {!isDrawing && !confirmed && 'Review your selection and confirm the location'}
          {confirmed && 'Location confirmed — ask your question below'}
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
        <div className="relative w-full h-[480px] overflow-hidden">
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
              center={centroid || defaultCenter}
              zoom={10}
              onClick={handleMapClick}
              onLoad={onMapLoad}
              options={{
                streetViewControl: false,
                mapTypeControl: true,
                mapTypeId: 'hybrid',
                draggableCursor: isDrawing ? 'crosshair' : undefined,
              }}
            >
              {polygonPath.length >= 3 && (
                <Polygon paths={polygonPath} options={polygonOptions} />
              )}
              {/* Show vertices while drawing */}
              {isDrawing && polygonPath.map((point, i) => (
                <Marker
                  key={i}
                  position={point}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 6,
                    fillColor: '#ffffff',
                    fillOpacity: 1,
                    strokeColor: '#2e7d32',
                    strokeWeight: 3,
                  }}
                />
              ))}
              {/* Show centroid marker when done */}
              {centroid && !isDrawing && (
                <Marker
                  position={centroid}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: '#2e7d32',
                    fillOpacity: 1,
                    strokeColor: '#ffffff',
                    strokeWeight: 3,
                  }}
                  title="Center of selected area"
                />
              )}
            </GoogleMap>
          )}

          {/* Drawing controls overlay */}
          {isLoaded && (
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              {isDrawing && polygonPath.length >= 3 && (
                <button
                  onClick={finishDrawing}
                  className="px-4 py-2 bg-[#2e7d32] text-white rounded-xl shadow-lg hover:bg-[#1b5e20] transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <Check className="w-4 h-4" />
                  Finish Drawing
                </button>
              )}
              {polygonPath.length > 0 && (
                <button
                  onClick={resetDrawing}
                  className="px-4 py-2 bg-white text-gray-700 rounded-xl shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm font-medium border border-gray-200"
                >
                  <Trash2 className="w-4 h-4" />
                  Reset
                </button>
              )}
            </div>
          )}

          {/* Point counter */}
          {isDrawing && polygonPath.length > 0 && (
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg text-sm z-10">
              <span className="font-semibold text-[#2e7d32]">{polygonPath.length}</span>{' '}
              <span className="text-gray-600">points placed</span>
            </div>
          )}
        </div>

        {centroid && !isDrawing && (
          <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
            {/* Area stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-4 border border-emerald-100 text-center">
                <p className="text-xs text-emerald-600 uppercase tracking-wider mb-1">Area</p>
                <p className="text-2xl font-bold text-gray-900">{areaHa.toFixed(2)}</p>
                <p className="text-xs text-gray-500">hectares ({(areaHa * 2.47).toFixed(1)} acres)</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100 text-center">
                <p className="text-xs text-blue-600 uppercase tracking-wider mb-1">Perimeter</p>
                <p className="text-2xl font-bold text-gray-900">{perimeterKm.toFixed(2)}</p>
                <p className="text-xs text-gray-500">kilometers</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-100 text-center">
                <p className="text-xs text-amber-600 uppercase tracking-wider mb-1">Vertices</p>
                <p className="text-2xl font-bold text-gray-900">{polygonPath.length}</p>
                <p className="text-xs text-gray-500">boundary points</p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div className="flex items-start gap-4 flex-1 min-w-[300px]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Center Coordinates</p>
                  <p className="font-mono font-medium text-gray-900 mb-1">
                    {centroid.lat.toFixed(6)}°{centroid.lat >= 0 ? 'N' : 'S'},{' '}
                    {Math.abs(centroid.lng).toFixed(6)}°{centroid.lng >= 0 ? 'E' : 'W'}
                  </p>
                  <p className="text-xs text-gray-400">Estimated center of drawn perimeter</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={resetDrawing}
                  className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <Pencil className="w-4 h-4" />
                  <span>Redraw</span>
                </button>
                <button
                  onClick={handleConfirmArea}
                  disabled={loading || confirmed}
                  className={`group/btn px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap disabled:cursor-not-allowed ${
                    confirmed
                      ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-300'
                      : 'bg-gradient-to-r from-[#2e7d32] to-[#1b5e20] text-white hover:shadow-xl hover:shadow-green-500/30 disabled:opacity-60'
                  }`}
                >
                  {confirmed ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Location Confirmed</span>
                    </>
                  ) : loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Location</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
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