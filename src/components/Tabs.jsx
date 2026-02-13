import { Image, Video, Music } from 'lucide-react';

const Tabs = ({ activeTab, setActiveTab, counts }) => {
  const tabs = [
    { id: 'images', label: 'Images', icon: Image, count: counts.images },
    { id: 'videos', label: 'Videos', icon: Video, count: counts.videos },
    { id: 'audios', label: 'Audio', icon: Music, count: counts.audios },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
      <div className="flex items-center justify-center gap-1 sm:gap-2 bg-dark-800 p-1.5 sm:p-2 rounded-xl border border-dark-600 max-w-full sm:max-w-md mx-auto overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 flex-1 min-w-fit text-xs sm:text-base ${
                activeTab === tab.id
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">{tab.label}</span>
              <span className="text-[10px] sm:text-xs opacity-75">({tab.count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
