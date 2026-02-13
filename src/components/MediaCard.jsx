import { useState } from 'react';
import { Download, Play, Music2 } from 'lucide-react';
import { downloadFile } from '../utils/download';

const MediaCard = ({ media, onPlay }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = (e) => {
    e.stopPropagation();
    const filename = `${media.title.replace(/\s+/g, '-').toLowerCase()}.${
      media.type === 'image' ? 'jpg' : media.type === 'video' ? 'mp4' : 'mp3'
    }`;
    downloadFile(media.url, filename);
  };

  const handleClick = () => {
    if (media.type === 'video' || media.type === 'audio') {
      onPlay(media);
    }
  };

  return (
    <div
      className="masonry-item group relative bg-dark-800 rounded-xl overflow-hidden border border-dark-600 hover:border-accent-500 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/20 animate-scale-in cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative overflow-hidden aspect-auto">
        {!isLoaded && (
          <div className="absolute inset-0 bg-dark-700 animate-pulse" />
        )}
        
        {media.type === 'image' && (
          <img
            src={media.thumbnail}
            alt={media.title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        
        {media.type === 'video' && (
          <div className="relative">
            <img
              src={media.thumbnail}
              alt={media.title}
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-accent-500 group-hover:scale-110 transition-all duration-300">
                <Play className="w-8 h-8 text-white" fill="white" />
              </div>
            </div>
          </div>
        )}
        
        {media.type === 'audio' && (
          <div className="relative">
            <img
              src={media.thumbnail}
              alt={media.title}
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600/50 to-pink-600/50 backdrop-blur-sm">
              <div className="group-hover:scale-110 transition-transform duration-300">
                <Music2 className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-lg mb-3">{media.title}</h3>
            {media.type === 'image' ? (
              <button
                onClick={handleDownload}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download Free</span>
              </button>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={handleClick}
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  <span>Play {media.type === 'video' ? 'Video' : 'Audio'}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="w-full bg-dark-600 hover:bg-dark-500 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
