import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-12 h-12 text-accent-500 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600 space-y-6 text-gray-300">
            <p className="text-sm text-gray-500">Last Updated: February 13, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information Collection</h2>
              <p className="mb-4">
                MediaVault operates as a static website and does NOT collect, store, or process any personal information. 
                We do not use cookies, tracking pixels, or any analytics services.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not require user registration or accounts</li>
                <li>We do not collect email addresses or contact information</li>
                <li>We do not track your browsing behavior</li>
                <li>We do not use third-party analytics or advertising services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Data Storage</h2>
              <p>
                Since this is a completely static website hosted on CDN services (Vercel/Netlify), no user data is stored 
                on our servers. Any downloads you make are processed directly by your browser without any server-side logging.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Content</h2>
              <p className="mb-4">
                Media files displayed on MediaVault are sourced from public CDN services including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Unsplash (images)</li>
                <li>Pexels (videos and images)</li>
                <li>Mixkit (audio files)</li>
              </ul>
              <p className="mt-4">
                These services may have their own privacy policies. We do not control or monitor any data they may collect 
                when you download files from their servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Your Privacy Rights</h2>
              <p>
                Since we don't collect any personal data, there is no information for you to access, modify, or delete. 
                Your use of MediaVault is completely anonymous.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Children's Privacy</h2>
              <p>
                MediaVault does not knowingly collect any information from children under 13. Since we don't collect 
                any user data at all, users of any age can safely browse and download content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Security</h2>
              <p>
                Our website uses HTTPS encryption to ensure secure browsing. However, since no data is collected, 
                there is no personal information at risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Privacy Policy</h2>
              <p>
                We reserve the right to update this privacy policy. Any changes will be posted on this page with 
                an updated "Last Modified" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
              <p>
                If you have questions about this privacy policy, the practices of this site, or your dealings with 
                MediaVault, please note that we are a static resource site and do not maintain contact channels.
              </p>
            </section>

            <div className="bg-accent-500/10 border border-accent-500/30 rounded-lg p-6 mt-8">
              <p className="text-accent-500 font-semibold">
                ✓ No Data Collection • No Tracking • No Cookies • Complete Privacy
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
