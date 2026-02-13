import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Heart, Users, Globe, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "100% Free",
      description: "All our media files are completely free to download and use for personal and commercial projects."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by creators, for creators. We believe in empowering the creative community."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access our library from anywhere in the world, anytime you need quality media."
    },
    {
      icon: Zap,
      title: "Fast & Simple",
      description: "No signup required. Search, preview, and download in seconds."
    }
  ];

  return (
    <>
      <Navbar currentPage="about" />
      <main className="pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-center">
            About MediaVault
          </h1>
          
          <div className="bg-dark-800 rounded-2xl p-8 md:p-12 border border-dark-600 mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              MediaVault is your go-to platform for high-quality, free stock photos, videos, and audio files. 
              We believe that everyone should have access to professional-grade media content, regardless of budget.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our mission is to empower creators, businesses, and individuals by providing a vast library of 
              curated media that can be downloaded and used freely in any project.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-dark-800 rounded-xl p-6 border border-dark-600 hover:border-accent-500 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-accent-500 to-accent-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-accent-500/10 to-accent-600/10 rounded-2xl p-8 border border-accent-500/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Join Our Community</h2>
            <p className="text-gray-300 mb-6">
              Be part of a growing community of creators and download amazing media for your projects today.
            </p>
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.hash = 'home';
                window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' }));
              }}
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Start Exploring
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
