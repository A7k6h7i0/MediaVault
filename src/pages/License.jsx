import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award } from 'lucide-react';

const License = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-center mb-8">
            <Award className="w-12 h-12 text-accent-500 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              License Information
            </h1>
          </div>
          
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600 space-y-6 text-gray-300">
            <p className="text-sm text-gray-500">Last Updated: February 13, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">MediaVault Platform License</h2>
              <p className="mb-4">
                The MediaVault platform itself (website code, design, and interface) is proprietary. However, 
                all media content displayed is subject to the licenses of the original content providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Content Licensing by Source</h2>
              
              <div className="space-y-6">
                <div className="bg-dark-700 rounded-lg p-6 border border-dark-600">
                  <h3 className="text-xl font-bold text-white mb-3">📸 Unsplash License</h3>
                  <p className="mb-3">Images from Unsplash are free to use under the Unsplash License:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                    <li>✓ Free to use for commercial and non-commercial purposes</li>
                    <li>✓ No permission needed (though attribution is appreciated)</li>
                    <li>✗ Cannot be sold without significant modification</li>
                    <li>✗ Cannot be compiled into a stock photo service</li>
                  </ul>
                  <a 
                    href="https://unsplash.com/license" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:text-accent-400 text-sm mt-3 inline-block"
                  >
                    Read full Unsplash License →
                  </a>
                </div>

                <div className="bg-dark-700 rounded-lg p-6 border border-dark-600">
                  <h3 className="text-xl font-bold text-white mb-3">🎥 Pexels License</h3>
                  <p className="mb-3">Videos and images from Pexels are free under the Pexels License:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                    <li>✓ Free for personal and commercial use</li>
                    <li>✓ Attribution not required (but appreciated)</li>
                    <li>✗ Cannot sell unmodified copies</li>
                    <li>✗ Identifiable people may require model releases for commercial use</li>
                  </ul>
                  <a 
                    href="https://www.pexels.com/license/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:text-accent-400 text-sm mt-3 inline-block"
                  >
                    Read full Pexels License →
                  </a>
                </div>

                <div className="bg-dark-700 rounded-lg p-6 border border-dark-600">
                  <h3 className="text-xl font-bold text-white mb-3">🎵 Mixkit License</h3>
                  <p className="mb-3">Audio files from Mixkit are free under the Mixkit License:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                    <li>✓ Free for commercial and non-commercial projects</li>
                    <li>✓ Use in videos, podcasts, apps, and websites</li>
                    <li>✓ No attribution required</li>
                    <li>✗ Cannot resell or redistribute as standalone files</li>
                  </ul>
                  <a 
                    href="https://mixkit.co/license/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:text-accent-400 text-sm mt-3 inline-block"
                  >
                    Read full Mixkit License →
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">General Usage Guidelines</h2>
              <div className="bg-accent-500/10 border border-accent-500/30 rounded-lg p-6">
                <p className="mb-4"><strong className="text-white">✓ YOU CAN:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                  <li>Use media in websites, apps, presentations, and marketing materials</li>
                  <li>Modify, edit, and adapt the content</li>
                  <li>Use for both personal and commercial projects</li>
                  <li>Use without attribution (though it's appreciated)</li>
                </ul>

                <p className="mb-4"><strong className="text-white">✗ YOU CANNOT:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Sell or redistribute unmodified media files</li>
                  <li>Create competing stock photo/video/audio services</li>
                  <li>Imply endorsement by people depicted in media</li>
                  <li>Use trademarks or logos visible in content commercially without permission</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 text-yellow-200">
                <strong>⚠️ Important:</strong> MediaVault is an aggregator platform. We do not own or control 
                the media files. Always verify licensing terms from the original source before using content in 
                commercial projects. When in doubt, contact the original content provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Questions About Licensing?</h2>
              <p>
                For specific questions about media usage rights, please refer to the original content provider's 
                license documentation linked above. MediaVault cannot provide legal advice regarding content usage.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default License;
