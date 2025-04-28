import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, toggleSidebar }) => {
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  // Close dropdown when clicking elsewhere
  useEffect(() => {
    const handleClickOutside = () => {
      setCoursesDropdownOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle course dropdown toggle
  const toggleCoursesDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCoursesDropdownOpen(!coursesDropdownOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <BookOpen className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              <span className="text-green-600">SITI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium hover:text-green-600 transition-colors ${
                location.pathname === '/' ? 'text-green-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            
            {/* Courses Dropdown */}
            <div className="relative">
              <button 
                className={`flex items-center font-medium hover:text-green-600 transition-colors ${
                  location.pathname.includes('/courses') ? 'text-green-600' : 'text-gray-700'
                }`}
                onClick={toggleCoursesDropdown}
              >
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {coursesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 z-50">
                  <div className="py-1">
                    <Link
                      to="/courses/mern-stack"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
                    >
                      MERN Stack
                    </Link>
                    <Link
                      to="/courses/mean-stack"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
                    >
                      MEAN Stack
                    </Link>
                    <Link
                      to="/courses/python"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
                    >
                      Python
                    </Link>
                    <Link
                      to="/courses/java"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
                    >
                      Java
                    </Link>
                    <Link
                      to="/courses/digital-marketing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
                    >
                      Digital Marketing
                    </Link>
                    <Link
                      to="/courses/cloud-computing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
                    >
                      Cloud Computing
                    </Link>
                    <Link
                      to="/courses/devops"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
                    >
                      DevOps
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className={`font-medium hover:text-green-600 transition-colors ${
                location.pathname === '/about' ? 'text-green-600' : 'text-gray-700'
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/blog" 
              className={`font-medium hover:text-green-600 transition-colors ${
                location.pathname === '/blog' ? 'text-green-600' : 'text-gray-700'
              }`}
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className={`font-medium hover:text-green-600 transition-colors ${
                location.pathname === '/contact' ? 'text-green-600' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Call to action */}
          <div className="hidden lg:flex">
            <Link to="/book-slot" className="btn btn-primary">
              Book a Slot
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 hover:text-green-600 transition-colors"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;