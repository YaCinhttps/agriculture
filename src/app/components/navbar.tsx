import { User, Globe } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2e7d32] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="font-semibold text-xl text-gray-900">AgroMind AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button className="text-[#2e7d32] font-medium">Home</button>
            <button className="text-gray-600 hover:text-gray-900">History</button>
            <button className="text-gray-600 hover:text-gray-900">About</button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
            <Globe className="w-4 h-4 text-gray-600" />
            <span className="hidden sm:inline text-gray-600">EN</span>
          </button>
          
          <button className="w-10 h-10 bg-[#e8f5e9] rounded-full flex items-center justify-center hover:bg-[#c8e6c9]">
            <User className="w-5 h-5 text-[#2e7d32]" />
          </button>
        </div>
      </div>
    </nav>
  );
}
