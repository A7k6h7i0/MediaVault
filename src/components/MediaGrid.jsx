import MediaCard from './MediaCard';

const MediaGrid = ({ media, onPlay }) => {
  if (media.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-xl">No results found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="masonry-grid">
        {media.map((item) => (
          <MediaCard key={item.id} media={item} onPlay={onPlay} />
        ))}
      </div>
    </div>
  );
};

export default MediaGrid;
