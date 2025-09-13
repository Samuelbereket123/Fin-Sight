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
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DataSimplified
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
            How It Works
          </Link>
          <Link href="#why-choose-us" className="text-gray-700 hover:text-blue-600 transition-colors">
            Why Choose Us
          </Link>
          <Link 
            href="#contact" 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            Contact Us
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
