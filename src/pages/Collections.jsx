import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Folder, Image, Video, Music } from 'lucide-react';

const Collections = () => {
  const collections = [
    {
      name: "Nature & Landscapes",
      count: 8,
      type: "Images",
      icon: Image,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Urban & Architecture",
      count: 6,
      type: "Images",
      icon: Image,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Cinematic Videos",
      count: 10,
      type: "Videos",
      icon: Video,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Background Music",
      count: 12,
      type: "Audio",
      icon: Music,
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Abstract & Art",
      count: 5,
      type: "Images",
      icon: Image,
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Time Lapse",
      count: 4,
      type: "Videos",
      icon: Video,
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <>
      <Navbar currentPage="collections" />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Collections
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Organized media collections for every project
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection, index) => {
              const Icon = collection.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-dark-800 rounded-xl p-6 border border-dark-600 hover:border-accent-500 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/20 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`bg-gradient-to-br ${collection.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{collection.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">{collection.count} files</p>
                    <span className="text-accent-500 text-sm font-medium">{collection.type}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Collections;
