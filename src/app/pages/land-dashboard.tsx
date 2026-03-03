import { useLocation, useNavigate } from 'react-router';
import { 
  ArrowLeft, 
  MapPin, 
  Droplets, 
  Thermometer, 
  Wind, 
  Sun, 
  Cloud, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Activity,
  Sprout,
  AlertTriangle,
  CheckCircle2,
  Info,
  BarChart3,
  Maximize2,
  Leaf,
  CloudRain,
  Zap
} from 'lucide-react';

export default function LandDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const landData = location.state?.landData || { lat: 33.5731, lng: -7.5898, size: 12.5 };

  // Mock data for dashboard
  const weatherData = {
    current: { temp: 24, humidity: 65, wind: 12, condition: 'Partly Cloudy' },
    forecast: [
      { day: 'Mon', high: 26, low: 18, rain: 10 },
      { day: 'Tue', high: 28, low: 19, rain: 5 },
      { day: 'Wed', high: 25, low: 17, rain: 40 },
      { day: 'Thu', high: 27, low: 18, rain: 15 },
      { day: 'Fri', high: 29, low: 20, rain: 0 },
    ]
  };

  const soilData = {
    moisture: 68,
    ph: 6.8,
    nitrogen: 72,
    phosphorus: 58,
    potassium: 65,
    organicMatter: 4.2
  };

  const cropRecommendations = [
    { name: 'Wheat', suitability: 95, season: 'Winter', expectedYield: '4.2 tons/ha' },
    { name: 'Corn', suitability: 88, season: 'Summer', expectedYield: '8.5 tons/ha' },
    { name: 'Tomatoes', suitability: 82, season: 'Spring', expectedYield: '45 tons/ha' },
    { name: 'Barley', suitability: 90, season: 'Winter', expectedYield: '3.8 tons/ha' },
  ];

  const alerts = [
    { type: 'warning', message: 'Light rain expected in 2 days - plan irrigation accordingly', priority: 'medium' },
    { type: 'success', message: 'Soil conditions optimal for planting', priority: 'low' },
    { type: 'info', message: 'Recommended fertilizer application: NPK 20-10-10', priority: 'medium' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50 backdrop-blur-xl bg-white/90">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gradient-to-br hover:from-[#2e7d32] hover:to-[#1b5e20] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Land Analytics Dashboard</h1>
                <p className="text-sm text-gray-500 mt-0.5">
                  Real-time insights for {landData.size} hectares • Casablanca, Morocco
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="px-4 py-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <p className="text-xs text-gray-500">Last Updated</p>
                <p className="text-sm font-semibold text-gray-900">Just now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Alerts Section */}
        <div className="mb-8 space-y-3">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 p-4 rounded-2xl border backdrop-blur-sm animate-fade-in ${
                alert.type === 'warning'
                  ? 'bg-amber-50/80 border-amber-200'
                  : alert.type === 'success'
                  ? 'bg-green-50/80 border-green-200'
                  : 'bg-blue-50/80 border-blue-200'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {alert.type === 'warning' ? (
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              ) : alert.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              ) : (
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              )}
              <p className="text-sm text-gray-700 flex-1">{alert.message}</p>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Land Area */}
          <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                <Maximize2 className="w-6 h-6 text-white" />
              </div>
              <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                Primary
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{landData.size} ha</p>
            <p className="text-sm text-gray-500">Total Land Area</p>
            <p className="text-xs text-gray-400 mt-2">≈ {(landData.size * 2.47).toFixed(1)} acres</p>
          </div>

          {/* Soil Moisture */}
          <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 animate-fade-in" style={{ animationDelay: '50ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-medium">+5%</span>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{soilData.moisture}%</p>
            <p className="text-sm text-gray-500">Soil Moisture</p>
            <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${soilData.moisture}%` }}
              />
            </div>
          </div>

          {/* Temperature */}
          <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 text-orange-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-medium">+2°C</span>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{weatherData.current.temp}°C</p>
            <p className="text-sm text-gray-500">Current Temperature</p>
            <p className="text-xs text-gray-400 mt-2">{weatherData.current.condition}</p>
          </div>

          {/* Weather */}
          <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                Live
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{weatherData.current.humidity}%</p>
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="text-xs text-gray-400 mt-2">Wind: {weatherData.current.wind} km/h</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Soil Analysis & Weather Forecast */}
          <div className="lg:col-span-2 space-y-8">
            {/* Soil Analysis */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Soil Analysis</h2>
                  <p className="text-sm text-gray-500">Comprehensive soil health metrics</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* pH Level */}
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-600">pH Level</p>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      soilData.ph >= 6.5 && soilData.ph <= 7.5 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {soilData.ph >= 6.5 && soilData.ph <= 7.5 ? 'Optimal' : 'Fair'}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{soilData.ph}</p>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-500"
                      style={{ width: `${(soilData.ph / 14) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Nitrogen */}
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-600">Nitrogen (N)</p>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      Good
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{soilData.nitrogen}%</p>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${soilData.nitrogen}%` }}
                    />
                  </div>
                </div>

                {/* Phosphorus */}
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-600">Phosphorus (P)</p>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                      Fair
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{soilData.phosphorus}%</p>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                      style={{ width: `${soilData.phosphorus}%` }}
                    />
                  </div>
                </div>

                {/* Potassium */}
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-600">Potassium (K)</p>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                      Good
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{soilData.potassium}%</p>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
                      style={{ width: `${soilData.potassium}%` }}
                    />
                  </div>
                </div>

                {/* Organic Matter */}
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-600">Organic Matter</p>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                      Excellent
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{soilData.organicMatter}%</p>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-500"
                      style={{ width: `${(soilData.organicMatter / 10) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Forecast */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 animate-fade-in" style={{ animationDelay: '250ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">5-Day Weather Forecast</h2>
                  <p className="text-sm text-gray-500">Plan your farming activities</p>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                {weatherData.forecast.map((day, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg hover:border-[#2e7d32] transition-all duration-300"
                  >
                    <p className="text-sm font-medium text-gray-900 mb-3">{day.day}</p>
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      {day.rain > 30 ? (
                        <CloudRain className="w-6 h-6 text-blue-600" />
                      ) : day.rain > 10 ? (
                        <Cloud className="w-6 h-6 text-gray-600" />
                      ) : (
                        <Sun className="w-6 h-6 text-amber-600" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-gray-900">{day.high}°</p>
                      <p className="text-sm text-gray-500">{day.low}°</p>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <Droplets className="w-3 h-3 text-blue-500" />
                        <span className="text-xs text-blue-600 font-medium">{day.rain}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Crop Recommendations */}
          <div className="space-y-8">
            {/* Location Card */}
            <div className="bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-3xl p-6 shadow-xl shadow-green-500/30 text-white animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Land Location</h3>
                  <p className="text-xs text-white/80">GPS Coordinates</p>
                </div>
              </div>
              <p className="font-mono text-sm mb-2">
                {landData.lat.toFixed(4)}°N, {Math.abs(landData.lng).toFixed(4)}°W
              </p>
              <p className="text-sm text-white/90 mb-4">Casablanca Region, Morocco</p>
              <div className="pt-4 border-t border-white/20 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Elevation</span>
                  <span className="font-semibold">180-195m</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Soil Type</span>
                  <span className="font-semibold">Clay-loam</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Zone</span>
                  <span className="font-semibold">Mediterranean</span>
                </div>
              </div>
            </div>

            {/* Crop Recommendations */}
            <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 animate-fade-in" style={{ animationDelay: '350ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Crop Recommendations</h2>
                  <p className="text-xs text-gray-500">Based on soil & climate</p>
                </div>
              </div>

              <div className="space-y-4">
                {cropRecommendations.map((crop, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-2xl border border-gray-100 hover:border-[#2e7d32] hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                          <Leaf className="w-5 h-5 text-[#2e7d32]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{crop.name}</h3>
                          <p className="text-xs text-gray-500">{crop.season} Season</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-[#2e7d32]">{crop.suitability}%</p>
                        <p className="text-xs text-gray-500">Match</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#2e7d32] to-[#1b5e20] rounded-full transition-all duration-500"
                          style={{ width: `${crop.suitability}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Expected Yield</span>
                      <span className="font-semibold text-gray-900">{crop.expectedYield}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 border border-gray-100 shadow-lg animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-[#2e7d32] hover:shadow-lg transition-all duration-300 flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#2e7d32]">Generate Report</span>
                </button>
                <button className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-[#2e7d32] hover:shadow-lg transition-all duration-300 flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#2e7d32]">View Analytics</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
