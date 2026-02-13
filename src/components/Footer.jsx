const Footer = () => {
  const navigateTo = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = page;
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
  };

  return (
    <footer className="bg-dark-800 border-t border-dark-600 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            © 2026 MediaVault. All media files are free to download and use.
          </p>
          <div className="flex items-center justify-center space-x-6">
            <button 
              onClick={() => navigateTo('privacy')}
              className="text-gray-400 hover:text-accent-500 transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => navigateTo('terms')}
              className="text-gray-400 hover:text-accent-500 transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => navigateTo('license')}
              className="text-gray-400 hover:text-accent-500 transition-colors"
            >
              License
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
