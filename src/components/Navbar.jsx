import { useState } from 'react';
import { ImageIcon, Menu, X } from 'lucide-react';

const Navbar = ({ currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = page;
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-1.5 sm:p-2 rounded-lg">
              <ImageIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              MediaVault
            </span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigateTo('explore')}
              className={`transition-colors duration-200 ${
                currentPage === 'explore' ? 'text-accent-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Explore
            </button>
            <button 
              onClick={() => navigateTo('collections')}
              className={`transition-colors duration-200 ${
                currentPage === 'collections' ? 'text-accent-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Collections
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className={`transition-colors duration-200 ${
                currentPage === 'about' ? 'text-accent-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-dark-600 animate-slide-up">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => navigateTo('explore')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'explore' 
                  ? 'bg-accent-500 text-white' 
                  : 'text-gray-300 hover:bg-dark-700 hover:text-white'
              }`}
            >
              Explore
            </button>
            <button 
              onClick={() => navigateTo('collections')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'collections' 
                  ? 'bg-accent-500 text-white' 
                  : 'text-gray-300 hover:bg-dark-700 hover:text-white'
              }`}
            >
              Collections
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'about' 
                  ? 'bg-accent-500 text-white' 
                  : 'text-gray-300 hover:bg-dark-700 hover:text-white'
              }`}
            >
              About
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
