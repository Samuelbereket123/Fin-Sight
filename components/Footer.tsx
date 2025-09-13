import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">DataSimplified</h3>
            <p className="mb-6">
              Helping Ethiopian businesses transform their data into actionable insights and beautiful visualizations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="#get-started" className="hover:text-white transition-colors">Get Started</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Data Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Intelligence</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dashboard Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Reporting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMail className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <a href="mailto:info@datasimplified.et" className="text-blue-400 hover:underline">info@datasimplified.et</a>
                </div>
              </li>
              <li className="flex items-start">
                <FiPhone className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <a href="tel:+251911123456" className="text-blue-400 hover:underline">+251 911 123 456</a>
                </div>
              </li>
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">Location</p>
                  <p>Bole Road, Addis Ababa, Ethiopia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} DataSimplified. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
