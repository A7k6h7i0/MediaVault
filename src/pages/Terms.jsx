import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-center mb-8">
            <FileText className="w-12 h-12 text-accent-500 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>
          
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600 space-y-6 text-gray-300">
            <p className="text-sm text-gray-500">Last Updated: February 13, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using MediaVault, you accept and agree to be bound by the terms and provision of this 
                agreement. If you do not agree to these terms, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
              <p className="mb-4">
                MediaVault is a free media library platform that provides access to images, videos, and audio files 
                sourced from third-party public content delivery networks (CDNs).
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We act as an aggregator and do not host media files on our servers</li>
                <li>All content is sourced from Unsplash, Pexels, Mixkit, and similar public platforms</li>
                <li>We provide direct links to these third-party services for downloading</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p className="mb-4">Users of MediaVault agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the service only for lawful purposes</li>
                <li>Verify licensing terms from original content sources before commercial use</li>
                <li>Not attempt to reverse engineer, hack, or exploit the platform</li>
                <li>Not use automated tools to mass-download content</li>
                <li>Respect the intellectual property rights of content creators</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Content Licensing</h2>
              <p className="mb-4">
                <strong className="text-white">IMPORTANT:</strong> MediaVault does not own any of the media files displayed. 
                All content is subject to the licensing terms of the original source platforms:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Unsplash images are licensed under the Unsplash License</li>
                <li>Pexels content is licensed under the Pexels License</li>
                <li>Mixkit audio is licensed under the Mixkit License</li>
              </ul>
              <p className="mt-4">
                Users must review and comply with these third-party licenses. MediaVault is not responsible for 
                any misuse of downloaded content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer of Warranties</h2>
              <p className="mb-4">
                MediaVault is provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No warranty that the service will be uninterrupted or error-free</li>
                <li>No warranty regarding the accuracy, reliability, or quality of content</li>
                <li>No warranty that links to third-party media will remain functional</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                MediaVault, its operators, and contributors shall NOT be liable for any direct, indirect, incidental, 
                special, or consequential damages resulting from the use or inability to use this service, including 
                but not limited to damages for loss of profits, data, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
              <p>
                This service contains links to external websites and content. MediaVault has no control over and 
                assumes no responsibility for the content, privacy policies, or practices of any third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Prohibited Uses</h2>
              <p className="mb-4">You may NOT use MediaVault to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any applicable local, state, national, or international law</li>
                <li>Infringe upon intellectual property rights of others</li>
                <li>Transmit any malicious code, viruses, or harmful technology</li>
                <li>Scrape or systematically download bulk content</li>
                <li>Impersonate or misrepresent your affiliation with any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Service Modifications</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue MediaVault (or any part thereof) at any time 
                without notice. We shall not be liable to you or any third party for any modification, suspension, or 
                discontinuation of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless MediaVault and its operators from any claims, damages, 
                losses, liabilities, and expenses arising from your use of the service or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with applicable international laws, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms of Service at any time. Continued use of the service 
                after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mt-8">
              <p className="text-red-400 font-semibold mb-2">⚠️ Important Notice</p>
              <p className="text-gray-300">
                By using MediaVault, you acknowledge that you have read, understood, and agree to be bound by 
                these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
