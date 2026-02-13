import { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import MediaGrid from '../components/MediaGrid';
import MediaPlayer from '../components/MediaPlayer';
import Footer from '../components/Footer';
import { mediaData } from '../data/mediaData';

const Home = () => {
  const [activeTab, setActiveTab] = useState('images');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filteredMedia = useMemo(() => {
    const currentMedia = mediaData[activeTab] || [];
    
    if (!searchQuery.trim()) {
      return currentMedia;
    }
    
    return currentMedia.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeTab, searchQuery]);

  const counts = {
    images: mediaData.images.length,
    videos: mediaData.videos.length,
    audios: mediaData.audios.length,
  };

  const handlePlayMedia = (media) => {
    setSelectedMedia(media);
  };

  const handleClosePlayer = () => {
    setSelectedMedia(null);
  };

  return (
    <>
      <Navbar currentPage="home" />
      <main>
        <Hero />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} counts={counts} />
        <MediaGrid media={filteredMedia} onPlay={handlePlayMedia} />
      </main>
      <Footer />
      {selectedMedia && <MediaPlayer media={selectedMedia} onClose={handleClosePlayer} />}
    </>
  );
};

export default Home;
