import { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Download } from 'lucide-react';
import { downloadFile } from '../utils/download';

const MediaPlayer = ({ media, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const mediaRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose]);

  const togglePlay = () => {
    if (mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause();
      } else {
        mediaRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (mediaRef.current) {
      setCurrentTime(mediaRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (mediaRef.current) {
      setDuration(mediaRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    if (mediaRef.current) {
      mediaRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    if (mediaRef.current) {
      mediaRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (mediaRef.current) {
      mediaRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (mediaRef.current) {
      if (mediaRef.current.requestFullscreen) {
        mediaRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleDownload = () => {
    const filename = `${media.title.replace(/\s+/g, '-').toLowerCase()}.${
      media.type === 'video' ? 'mp4' : 'mp3'
    }`;
    downloadFile(media.url, filename);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-2 sm:p-4 animate-fade-in overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-accent-500 transition-colors z-10 bg-dark-800/50 rounded-full p-2"
      >
        <X className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <div className="w-full max-w-4xl my-auto">
        <div className="bg-dark-800 rounded-xl sm:rounded-2xl overflow-hidden border border-dark-600">
          {media.type === 'video' ? (
            <video
              ref={mediaRef}
              src={media.url}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              className="w-full aspect-video bg-black"
              onClick={togglePlay}
            />
          ) : (
            <div className="relative aspect-video bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center">
              <audio
                ref={mediaRef}
                src={media.url}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
              />
              <div className="text-center px-4">
                <div className="w-20 h-20 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <Volume2 className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
                </div>
                <h3 className="text-xl sm:text-3xl font-bold text-white mb-2">{media.title}</h3>
                <p className="text-white/70 text-sm sm:text-lg">Audio Track</p>
              </div>
            </div>
          )}

          <div className="p-3 sm:p-6 space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <h3 className="text-lg sm:text-2xl font-bold text-white truncate max-w-full sm:max-w-md">{media.title}</h3>
              <button
                onClick={handleDownload}
                className="flex items-center justify-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download</span>
              </button>
            </div>

            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="100"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleSeek}
                className="w-full h-1.5 sm:h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #10b981 0%, #10b981 ${(currentTime / duration) * 100}%, #2f2f2f ${(currentTime / duration) * 100}%, #2f2f2f 100%)`
                }}
              />
              <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-500 hover:bg-accent-600 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5 sm:w-6 sm:h-6" fill="white" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6" fill="white" />}
                </button>

                <div className="flex items-center space-x-1 sm:space-x-2">
                  <button onClick={toggleMute} className="text-gray-400 hover:text-white transition-colors">
                    {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume * 100}
                    onChange={handleVolumeChange}
                    className="w-16 sm:w-24 h-1 bg-dark-600 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {media.type === 'video' && (
                <button
                  onClick={toggleFullscreen}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: #10b981;
          border-radius: 50%;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #10b981;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default MediaPlayer;
