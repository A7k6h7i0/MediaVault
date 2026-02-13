import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MediaPlayer from '../components/MediaPlayer';
import { mediaData } from '../data/mediaData';
import { Sparkles, TrendingUp, Clock, Award, Play, Music2 } from 'lucide-react';

const Explore = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = [
    {
      title: "Trending Now",
      icon: TrendingUp,
      media: [...mediaData.images.slice(0, 4), ...mediaData.videos.slice(0, 2)]
    },
    {
      title: "Editor's Choice",
      icon: Award,
      media: [...mediaData.images.slice(5, 9), ...mediaData.videos.slice(2, 4)]
    },
    {
      title: "Recently Added",
      icon: Clock,
      media: [...mediaData.images.slice(10, 14), ...mediaData.audios.slice(0, 2)]
    },
    {
      title: "Popular This Week",
      icon: Sparkles,
      media: [...mediaData.videos.slice(4, 8), ...mediaData.images.slice(14, 16)]
    }
  ];

  const handleMediaClick = (item) => {
    if (item.type === 'video' || item.type === 'audio') {
      setSelectedMedia(item);
    }
  };

  return (
    <>
      <Navbar currentPage="explore" />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Explore Media
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Discover curated collections and trending content
          </p>

          <div className="space-y-16">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="animate-fade-in">
                  <div className="flex items-center space-x-3 mb-6">
                    <Icon className="w-6 h-6 text-accent-500" />
                    <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.media.map((item) => (
                      <div
                        key={item.id}
                        className="group relative bg-dark-800 rounded-xl overflow-hidden border border-dark-600 hover:border-accent-500 transition-all duration-300 cursor-pointer"
                        onClick={() => handleMediaClick(item)}
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {(item.type === 'video' || item.type === 'audio') && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            {item.type === 'video' ? (
                              <Play className="w-12 h-12 text-white group-hover:scale-125 transition-transform" fill="white" />
                            ) : (
                              <Music2 className="w-12 h-12 text-white group-hover:scale-125 transition-transform" />
                            )}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 p-4 w-full">
                            <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                            <p className="text-gray-400 text-sm capitalize">{item.type}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      {selectedMedia && <MediaPlayer media={selectedMedia} onClose={() => setSelectedMedia(null)} />}
    </>
  );
};

export default Explore;
