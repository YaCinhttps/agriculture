import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
            404
          </div>
        </div>
        
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] text-white rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-2xl hover:bg-gray-200 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
