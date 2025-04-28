import { Link } from 'react-router-dom';
import { X, ChevronRight, BookOpen } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center" onClick={onClose}>
              <BookOpen className="h-7 w-7 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                <span className="text-green-600">SITI</span>
              </span>
            </Link>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="flex items-center py-3 text-gray-700 hover:text-green-600 transition-colors"
                  onClick={onClose}
                >
                  <span className="font-medium">Home</span>
                </Link>
              </li>
              
              <li className="border-t border-gray-100 pt-4">
                <p className="text-gray-500 text-sm mb-2">Courses</p>
                <ul className="space-y-2 ml-4">
                  <li>
                    <Link 
                      to="/courses/mern-stack" 
                      className="flex items-center py-2 text-gray-700 hover:text-green-600 transition-colors"
                      onClick={onClose}
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span>MERN Stack</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/courses/mean-stack" 
                      className="flex items-center py-2 text-gray-700 hover:text-green-600 transition-colors"
                      onClick={onClose}
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span>MEAN Stack</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/courses/python" 
                      className="flex items-center py-2 text-gray-700 hover:text-green-600 transition-colors"
                      onClick={onClose}
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span>Python</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/courses/java" 
                      className="flex items-center py-2 text-gray-700 hover:text-green-600 transition-colors"
                      onClick={onClose}
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span>Java</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/courses/digital-marketing" 
                      className="flex items-center py-2 text-gray-700 hover:text-green-600 transition-colors"
                      onClick={onClose}
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span>Digital Marketing</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/courses/cloud-computing" 
                      className="flex items-center py-2 text-gray-700 hover:text-green-600 transition-colors"
                      onClick={onClose}
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span>Cloud Computing</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/courses/devops" 
                      className="flex items-center py-2 text-gray-700 hover:text-green-600 transition-colors"
                      onClick={onClose}
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span>DevOps</span>
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="border-t border-gray-100 pt-4">
                <Link 
                  to="/about" 
                  className="flex items-center py-3 text-gray-700 hover:text-green-600 transition-colors"
                  onClick={onClose}
                >
                  <span className="font-medium">About</span>
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/blog" 
                  className="flex items-center py-3 text-gray-700 hover:text-green-600 transition-colors"
                  onClick={onClose}
                >
                  <span className="font-medium">Blog</span>
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/contact" 
                  className="flex items-center py-3 text-gray-700 hover:text-green-600 transition-colors"
                  onClick={onClose}
                >
                  <span className="font-medium">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link 
              to="/book-slot" 
              className="btn btn-primary w-full"
              onClick={onClose}
            >
              Book a Slot
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;