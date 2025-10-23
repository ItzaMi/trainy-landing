import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-8 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-[#6B7280] hover:text-[#1a1a1a] font-semibold">
            ← Back to Trainy
          </Link>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
            
            <p className="mb-6">
              This privacy policy applies to the Trainy app (hereby referred to as &quot;Application&quot;) for mobile devices that was created as an AI-powered train identification service. This service is intended for use &quot;AS IS&quot;.
            </p>

            <p className="mb-6">
              The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible here.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Information Collection and Use</h3>
            <p className="mb-6">
              The Application is designed with privacy as its core principle. Here&apos;s how we handle your data:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Photos uploaded for train identification are processed securely</li>
              <li>Identification results are stored locally on your device</li>
              <li>No personal information is collected beyond what&apos;s necessary for the service</li>
              <li>Photos are not permanently stored on our servers after processing</li>
              <li>Usage analytics may be collected to improve the service</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Third Party Access</h3>
            <p className="mb-6">
              The Application uses third-party AI services for train identification. Photos are transmitted securely to these services for processing and are not stored permanently. No personal information is shared with third parties beyond what&apos;s necessary for the identification service.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Opt-Out Rights</h3>
            <p className="mb-6">
              You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Retention Policy</h3>
            <p className="mb-6">
              Identification results are stored locally on your device and remain there for as long as you use the Application. Photos sent for identification are temporarily processed by our AI services and are not permanently stored. Your library data is deleted when you uninstall the app.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Children</h3>
            <p className="mb-6">
              The Service is designed for railway enthusiasts and train spotters. The Application does not knowingly solicit data from or market to children under the age of 13. If you are under 13, please have a parent or guardian use the app with you.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Security</h3>
            <p className="mb-6">
              The Service is designed with privacy and security in mind. Photos are transmitted securely using encryption for AI processing. Your identification library is stored locally on your device and protected by your device&apos;s built-in security measures.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Changes</h3>
            <p className="mb-6">
              This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
            </p>

            <p className="mb-6">
              This policy is effective as of 2025-10-16
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Consent</h3>
            <p className="mb-6">
              By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="mb-6">
              If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact us via email at trainyapp@gmail.com.
            </p>

            <p className="text-sm text-gray-500 italic mt-12">
              This privacy policy page was created with privacy-first principles in mind.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 text-sm text-gray-400 mb-4">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy
            </Link>
            <a href="mailto:trainyapp@gmail.com" className="hover:text-white transition-colors duration-200">
              Support
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © 2025 Trainy • AI-Powered Identification • Made with ❤️ for railway enthusiasts
          </p>
        </div>
      </footer>
    </div>
  );
} 