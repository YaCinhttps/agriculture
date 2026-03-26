import { User, Globe, Sparkles, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useState } from 'react';

export function NavbarPremium() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isAuthenticated] = useState(true); // Mock authentication state
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleSignOut = () => {
    // Sign out logic would go here
    navigate('/signin');
  };

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-100 px-8 py-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-2xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              AgroMind AI
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-medium relative transition-colors ${
                isActive('/') 
                  ? 'text-[#2e7d32] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-[#2e7d32] after:rounded-full'
                  : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/history" 
              className={`font-medium transition-colors ${
                isActive('/history') ? 'text-[#2e7d32]' : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              History
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-[#2e7d32]' : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              About
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">EN</span>
          </button>
          
          {isAuthenticated ? (
            <div className="hidden md:block relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="w-11 h-11 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all"
                title="Open profile menu"
              >
                <User className="w-5 h-5 text-gray-600" />
              </button>
              
              {showProfileMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setShowProfileMenu(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-100">
                      <p className="font-medium text-gray-900">John Anderson</p>
                      <p className="text-sm text-gray-500">john@example.com</p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/profile"
                        onClick={() => setShowProfileMenu(false)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        Profile Settings
                      </Link>
                      <Link
                        to="/history"
                        onClick={() => setShowProfileMenu(false)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        History
                      </Link>
                    </div>
                    <div className="p-2 border-t border-gray-100">
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Link
              to="/signin"
              className="hidden md:block px-6 py-2 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] text-white rounded-xl shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all font-medium"
            >
              Sign In
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-600"
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setShowMobileMenu(false)}
          />
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 md:hidden">
            <div className="p-4 space-y-2">
              <Link
                to="/"
                onClick={() => setShowMobileMenu(false)}
                className={`block px-4 py-3 rounded-xl transition-colors ${
                  isActive('/') ? 'bg-green-50 text-[#2e7d32] font-medium' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/history"
                onClick={() => setShowMobileMenu(false)}
                className={`block px-4 py-3 rounded-xl transition-colors ${
                  isActive('/history') ? 'bg-green-50 text-[#2e7d32] font-medium' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                History
              </Link>
              <Link
                to="/about"
                onClick={() => setShowMobileMenu(false)}
                className={`block px-4 py-3 rounded-xl transition-colors ${
                  isActive('/about') ? 'bg-green-50 text-[#2e7d32] font-medium' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                About
              </Link>
            </div>
            {isAuthenticated && (
              <>
                <div className="border-t border-gray-100 p-4 space-y-2">
                  <Link
                    to="/profile"
                    onClick={() => setShowMobileMenu(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    Profile Settings
                  </Link>
                </div>
                <div className="border-t border-gray-100 p-4">
                  <button
                    onClick={() => {
                      setShowMobileMenu(false);
                      handleSignOut();
                    }}
                    className="w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors text-left"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            )}
            {!isAuthenticated && (
              <div className="border-t border-gray-100 p-4">
                <Link
                  to="/signin"
                  onClick={() => setShowMobileMenu(false)}
                  className="block w-full px-4 py-3 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] text-white rounded-xl text-center font-medium"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
}