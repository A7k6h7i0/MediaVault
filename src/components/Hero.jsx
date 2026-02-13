const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Free Stock Media
          </span>
          <br />
          <span className="bg-gradient-to-r from-accent-500 to-emerald-400 bg-clip-text text-transparent">
            For Everyone
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover thousands of high-quality images, videos, and audio files. 
          Download for free and use in your projects.
        </p>
      </div>
    </div>
  );
};

export default Hero;
