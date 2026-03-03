import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Calendar, MapPin, ChevronDown, Filter, Search, Download, Trash2, Star, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface HistoryItem {
  id: string;
  date: string;
  location: string;
  area: string;
  question: string;
  recommendation: string;
  starred: boolean;
}

const mockHistory: HistoryItem[] = [
  {
    id: '1',
    date: '2026-03-01',
    location: 'Central Valley Farm, California',
    area: '45.3 hectares',
    question: 'What crops are best suited for this area during spring season?',
    recommendation: 'Based on soil analysis and climate data, we recommend planting tomatoes, bell peppers, and cucumbers. These crops thrive in your region\'s spring conditions.',
    starred: true,
  },
  {
    id: '2',
    date: '2026-02-28',
    location: 'Northern Fields, Oregon',
    area: '32.7 hectares',
    question: 'How can I improve soil health for upcoming planting season?',
    recommendation: 'Consider crop rotation with legumes to fix nitrogen. Add compost and reduce tillage to improve soil structure and microbial activity.',
    starred: false,
  },
  {
    id: '3',
    date: '2026-02-27',
    location: 'Eastern Plains, Texas',
    area: '68.2 hectares',
    question: 'What irrigation system would be most efficient for wheat cultivation?',
    recommendation: 'Drip irrigation with smart sensors would optimize water usage by 40% compared to traditional methods, especially beneficial for your soil type.',
    starred: true,
  },
  {
    id: '4',
    date: '2026-02-25',
    location: 'Southern Farm, Florida',
    area: '25.8 hectares',
    question: 'What pest control measures should I implement?',
    recommendation: 'Integrated Pest Management (IPM) with beneficial insects and organic sprays. Monitor weekly for early detection of common pests in your region.',
    starred: false,
  },
  {
    id: '5',
    date: '2026-02-24',
    location: 'Midwest Farm, Iowa',
    area: '112.5 hectares',
    question: 'When is the optimal planting time for corn?',
    recommendation: 'Based on historical weather patterns, mid-April to early May is ideal when soil temperature reaches 50°F consistently.',
    starred: false,
  },
];

export default function History() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<HistoryItem[]>(mockHistory);
  const [filter, setFilter] = useState<'all' | 'starred'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHistory = history.filter(item => {
    const matchesFilter = filter === 'all' || item.starred;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleStar = (id: string) => {
    setHistory(history.map(item => 
      item.id === id ? { ...item, starred: !item.starred } : item
    ));
  };

  const deleteItem = (id: string) => {
    setHistory(history.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
            Consultation History
          </h1>
          <p className="text-gray-500">
            Access your past AI consultations and recommendations
          </p>
        </motion.div>

        {/* Filters & Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100 p-6 mb-8 shadow-lg shadow-gray-100/50"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by question or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32]/20 focus:border-[#2e7d32] transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] text-white shadow-lg shadow-green-500/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('starred')}
                className={`px-6 py-3 rounded-2xl font-medium transition-all flex items-center gap-2 ${
                  filter === 'starred'
                    ? 'bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] text-white shadow-lg shadow-green-500/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Star className="w-4 h-4" />
                Starred
              </button>
            </div>
          </div>
        </motion.div>

        {/* History Items */}
        <div className="space-y-6">
          {filteredHistory.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100 p-8 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-xl">
                    <span className="text-sm text-[#2e7d32] font-medium">{item.area}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleStar(item.id)}
                    className={`p-2 rounded-xl transition-all ${
                      item.starred
                        ? 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100'
                        : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                    }`}
                  >
                    <Star className="w-5 h-5" fill={item.starred ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:bg-gray-100 transition-all">
                    <Download className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Question */}
              <div className="mb-4">
                <h3 className="text-gray-900 font-medium mb-2">Question:</h3>
                <p className="text-gray-600">{item.question}</p>
              </div>

              {/* Recommendation */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-2xl border border-green-100">
                <h3 className="text-[#2e7d32] font-medium mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#2e7d32] rounded-full"></div>
                  AI Recommendation
                </h3>
                <p className="text-gray-700">{item.recommendation}</p>
              </div>
            </motion.div>
          ))}

          {filteredHistory.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}