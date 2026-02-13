import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Collections from './pages/Collections';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import License from './pages/License';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle custom navigation events
    const handleNavigation = (event) => {
      const page = event.detail;
      setCurrentPage(page);
      window.history.pushState({ page }, '', `#${page}`);
    };

    // Handle browser back/forward buttons
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        const hash = window.location.hash.replace('#', '') || 'home';
        setCurrentPage(hash);
      }
    };

    window.addEventListener('navigate', handleNavigation);
    window.addEventListener('popstate', handlePopState);

    // Initialize from URL hash
    const hash = window.location.hash.replace('#', '') || 'home';
    setCurrentPage(hash);
    window.history.replaceState({ page: hash }, '', `#${hash}`);

    return () => {
      window.removeEventListener('navigate', handleNavigation);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'explore':
        return <Explore />;
      case 'collections':
        return <Collections />;
      case 'about':
        return <About />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'license':
        return <License />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {renderPage()}
    </div>
  );
}

export default App;
