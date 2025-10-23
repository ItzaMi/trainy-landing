import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="py-12 md:py-20 px-4 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* App Icon */}
          <div className="flex-shrink-0">
            <Image 
              src="/icon.png" 
              alt="Trainy App Icon" 
              width={200} 
              height={200} 
              className="w-[40px] md:w-[260px] md:h-[260px] rounded-xl border-2 border-gray-200"
            />
          </div>
          
          {/* App Info */}
          <div className="flex-1 text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trainy: Train Identifier app 
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-6">
            Spot, snap, and identify any train in seconds with Trainy, your pocket-sized rail companion, whether you&apos;re a casual traveler or lifelong railfan.
            </p>
            <a href="https://apps.apple.com/us/app/trainy-train-identifier/id6754334410" className="inline-block">
              <Image 
                src="/app-store-button.svg" 
                alt="Download on the App Store" 
                width={140} 
                height={42} 
                className="hover:opacity-80 transition-opacity duration-200"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-left">
            Screenshots
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
            <Image 
              src="/screenshots/1280.png" 
              alt="Trainy App Screenshot 1" 
              width={150} 
              height={300} 
              className="md:w-[200px] rounded-lg md:rounded-xl shadow-lg mx-auto hover:scale-105 transition-all duration-300"
            />
            <Image 
              src="/screenshots/1281.png"
              alt="Trainy App Screenshot 2" 
              width={150} 
              height={300} 
              className="md:w-[200px] rounded-lg md:rounded-xl shadow-lg mx-auto hover:scale-105 transition-all duration-300"
            />
            <Image 
              src="/screenshots/1282.png"
              alt="Trainy App Screenshot 3" 
              width={150} 
              height={300} 
              className="md:w-[200px] rounded-lg md:rounded-xl shadow-lg mx-auto hover:scale-105 transition-all duration-300"
            />
            <Image 
              src="/screenshots/1283.png"
              alt="Trainy App Screenshot 4" 
              width={150} 
              height={300} 
              className="md:w-[200px] rounded-lg md:rounded-xl shadow-lg mx-auto hover:scale-105 transition-all duration-300"
            />
            <Image 
              src="/screenshots/1284.png"
              alt="Trainy App Screenshot 5" 
              width={150} 
              height={300} 
              className="md:w-[200px] rounded-lg md:rounded-xl shadow-lg mx-auto hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-left">
            Description
          </h2>
          
          <div className="prose prose-base md:prose-lg mx-auto text-gray-700 max-w-none">
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-left">
              Spot, snap, and identify any train in seconds with Trainy, your pocket-sized rail companion. Whether you&apos;re a casual traveler or lifelong railfan, Trainy helps you recognize, catalog, and learn about locomotives from around the world.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">INSTANT IDENTIFICATION</h3>
            <p className="mb-4 text-left">
              Take a photo or upload one from your gallery — get the train&apos;s model, class, country, and operator instantly.
            </p>
            <p className="mb-6 md:mb-8 text-left">
              Our AI compares design features, markings, and profiles to deliver accurate matches in seconds.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">TRUSTED TRAIN DATA</h3>
            <p className="mb-4 text-left">Each identification includes:</p>
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              <li>• Train name, model, and manufacturer</li>
              <li>• Country of origin and operator</li>
              <li>• Build year and technical details</li>
              <li>• Similar models to avoid confusion</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">YOUR RAIL LOGBOOK</h3>
            <p className="mb-4 text-left">Keep track of every train you&apos;ve spotted:</p>
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              <li>• Save photos with date and details</li>
              <li>• Browse your collection anytime</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">DISCOVER THE WORLD OF TRAINS</h3>
            <p className="mb-6 md:mb-8 text-left">
              From legendary steam locomotives to high-speed bullet trains, explore thousands of entries and expand your railway knowledge.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">KEY FEATURES</h3>
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              <li>• AI-powered train identification</li>
              <li>• Global database of trains and operators</li>
              <li>• Personal rail logbook with unlimited saves</li>
            </ul> 

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">SUBSCRIPTION BENEFITS</h3>
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              <li>• Unlimited photo identifications</li>
              <li>• Access to extended train data</li>
              <li>• Full history</li>
              <li>• 3-day free trial — no commitment</li>
            </ul>

            <p className="text-lg md:text-xl font-semibold text-gray-900 text-left">
              Start your free trial today and explore the world of trains like never before with Trainy — the smarter way to identify and track locomotives.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            Ready to Explore the World of Trains?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Download Trainy and start your railway discovery journey today with your 3-day free trial.
          </p>
          <a href="https://apps.apple.com/us/app/trainy-train-identifier/id6754334410" className="inline-block">
            <Image 
              src="/app-store-button.svg" 
              alt="Download on the App Store" 
              width={140} 
              height={42} 
              className="hover:opacity-80 transition-opacity duration-200"
            />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-left">
          <div className="flex flex-row space-x-6 text-sm text-gray-400 mb-4">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy
            </Link>
            <a href="mailto:trainyapp@gmail.com" className="hover:text-white transition-colors duration-200">
              Support
            </a>
          </div>
          <p className="text-xs sm:text-sm text-gray-400">
            © 2025 Trainy • AI-Powered Identification • Made with ❤️ for railway enthusiasts
          </p>
        </div>
      </footer>
    </div>
  );
}