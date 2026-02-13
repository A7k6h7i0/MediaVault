import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for images, videos, or audio..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-dark-700 border border-dark-500 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default SearchBar;
