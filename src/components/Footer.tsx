import { Link } from 'react-router-dom';
import { BookOpen, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">
                <span className="text-green-400">SITI</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Smart Info Tech Institution - Building tomorrow's tech leaders with cutting-edge skills and real-world experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-green-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses/mern-stack" className="text-gray-400 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/book-slot" className="text-gray-400 hover:text-white transition-colors">
                  Book a Slot
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-green-500">
              Popular Courses
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses/mern-stack" className="text-gray-400 hover:text-white transition-colors">
                  MERN Stack Development
                </Link>
              </li>
              <li>
                <Link to="/courses/python" className="text-gray-400 hover:text-white transition-colors">
                  Python Programming
                </Link>
              </li>
              <li>
                <Link to="/courses/java" className="text-gray-400 hover:text-white transition-colors">
                  Java Development
                </Link>
              </li>
              <li>
                <Link to="/courses/digital-marketing" className="text-gray-400 hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/courses/cloud-computing" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link to="/courses/devops" className="text-gray-400 hover:text-white transition-colors">
                  DevOps
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-green-500">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Tech Avenue, Silicon Valley, CA 94043, USA</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@sititech.com" className="text-gray-400 hover:text-white transition-colors">
                  info@sititech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 SITI. All rights reserved. ISO Certified Institution.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;