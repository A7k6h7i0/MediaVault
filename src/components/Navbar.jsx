import { ImageIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-2 rounded-lg">
              <ImageIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              MediaVault
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Explore
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Collections
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
