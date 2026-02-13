import { Image, Video, Music } from 'lucide-react';

const Tabs = ({ activeTab, setActiveTab, counts }) => {
  const tabs = [
    { id: 'images', label: 'Images', icon: Image, count: counts.images },
    { id: 'videos', label: 'Videos', icon: Video, count: counts.videos },
    { id: 'audios', label: 'Audio', icon: Music, count: counts.audios },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="flex items-center justify-center space-x-2 bg-dark-800 p-2 rounded-xl border border-dark-600 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex-1 ${
                activeTab === tab.id
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              <span className="text-xs opacity-75">({tab.count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
