import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Simplify Your Business Data
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
          We help Ethiopian companies turn raw data into clear insights and graphs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#get-started" 
            className="bg-blue-600 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started
          </Link>
          <Link 
            href="#how-it-works" 
            className="border-2 border-blue-600 text-blue-600 text-lg font-medium px-8 py-4 rounded-full hover:bg-blue-50 transition-colors inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
