'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'w-[90%] max-w-4xl bg-black/30 backdrop-blur-xl shadow-2xl py-3 px-6 rounded-3xl border border-white/10' 
        : 'w-auto bg-black/20 backdrop-blur-xl py-4 px-8 rounded-full border border-white/5'
    }`}>
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <svg className={`w-6 h-6 transition-colors duration-300 text-white/90 group-hover:text-white`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className={`text-xl font-bold transition-colors duration-300 text-white/90 group-hover:text-white font-sans`}>
            FinSight
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 ml-16">
          <Link 
            href="#features" 
            className="transition-colors duration-300 font-medium text-[1.05rem] text-white/80 hover:text-white whitespace-nowrap font-sans"
          >
            Features
          </Link>
          <Link 
            href="#indicators" 
            className="transition-colors duration-300 font-medium text-[1.05rem] text-white/80 hover:text-white whitespace-nowrap font-sans"
          >
            Economic Indicators
          </Link>
          <Link 
            href="#directory" 
            className="transition-colors duration-300 font-medium text-[1.05rem] text-white/80 hover:text-white whitespace-nowrap font-sans"
          >
            Directory
          </Link>
          <Link 
            href="#get-started" 
            className="px-6 py-2.5 rounded-full font-medium text-base transition-all duration-300 bg-white/95 text-blue-950 hover:bg-white shadow-lg hover:shadow-xl font-sans"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <Link 
              href="#how-it-works" 
              className="block text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#why-choose-us" 
              className="block text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link 
              href="#contact" 
              className="block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-center w-max"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
