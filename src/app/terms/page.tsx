import Link from 'next/link';

export default function Terms() {
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

      {/* Terms Content */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">End User License Agreement (EULA)</h2>
            
            <p className="mb-6">
              This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you and Trainy (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) for the Trainy mobile application (&quot;App&quot;, &quot;Service&quot;, or &quot;Application&quot;).
            </p>

            <p className="mb-6">
              By downloading, installing, or using the Trainy app, you agree to be bound by the terms of this Agreement. If you do not agree to the terms of this Agreement, do not download, install, or use the Application.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. License Grant</h3>
            <p className="mb-6">
              Subject to the terms of this Agreement, Company grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Application on your mobile device solely for your personal, non-commercial use.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Subscription Terms</h3>
            <p className="mb-4">
              Trainy offers auto-renewable subscription services with the following terms:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Free Trial:</strong> 3-day free trial period with full access to premium features</li>
              <li><strong>Subscription Period:</strong> Weekly, monthly, or annual subscriptions as offered</li>
              <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the current period ends</li>
              <li><strong>Payment:</strong> Payment will be charged to your Apple ID account at confirmation of purchase</li>
              <li><strong>Cancellation:</strong> You can cancel anytime through your Apple ID account settings</li>
              <li><strong>Refunds:</strong> No refunds for unused portions of subscription periods</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Acceptable Use</h3>
            <p className="mb-4">You agree to use the Application only for lawful purposes and in accordance with this Agreement. You agree NOT to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use the Application for any commercial purpose without our written consent</li>
              <li>Reverse engineer, decompile, or disassemble the Application</li>
              <li>Remove or alter any proprietary notices or labels on the Application</li>
              <li>Use the Application for any safety-critical decisions without consulting appropriate authorities</li>
              <li>Rely solely on the Application for railway safety or operational decisions</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Disclaimer of Warranties</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-blue-400 text-lg">ℹ️</span>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">IMPORTANT NOTICE</h4>
                  <p className="text-blue-700 mb-2">
                    THE APPLICATION IS PROVIDED FOR EDUCATIONAL AND RECREATIONAL PURPOSES ONLY. TRAIN IDENTIFICATION RESULTS ARE NOT GUARANTEED TO BE ACCURATE.
                  </p>
                  <p className="text-blue-700">
                    <strong>ALWAYS FOLLOW RAILWAY SAFETY REGULATIONS.</strong> Do not trespass on railway property or place yourself in danger to photograph trains. Respect all safety barriers and warning signs. Do not rely solely on app identification for railway operational or safety decisions.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="mb-6">
              THE APPLICATION IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h3>
            <p className="mb-6">
              IN NO EVENT SHALL COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE APPLICATION.
            </p>
            
            <p className="mb-6">
              Company specifically disclaims any liability for harm resulting from unsafe behavior near railways or railway operations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy</h3>
            <p className="mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Application, to understand our practices.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h3>
            <p className="mb-6">
              The Application and its original content, features, and functionality are and will remain the exclusive property of Company and its licensors. The Application is protected by copyright, trademark, and other laws.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h3>
            <p className="mb-6">
              This Agreement is effective until terminated. Your rights under this Agreement will terminate automatically without notice if you fail to comply with any term(s) of this Agreement. Upon termination, you must cease all use of the Application and delete all copies from your device.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h3>
            <p className="mb-6">
              This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction where Company is located, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h3>
            <p className="mb-6">
              Company reserves the right to modify this Agreement at any time. We will notify users of any material changes through the Application or other reasonable means. Continued use of the Application after such changes constitutes acceptance of the new terms.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h3>
            <p className="mb-6">
              If you have any questions about this Agreement, please contact us at trainyapp@gmail.com.
            </p>

            <p className="mb-6">
              This Agreement is effective as of October 16, 2025.
            </p>

            <p className="text-sm text-gray-500 italic mt-12">
              By using Trainy, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 text-sm text-gray-400 mb-4">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Use
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
