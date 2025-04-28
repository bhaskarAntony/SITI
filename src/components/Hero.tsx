import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-400 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h5 className="inline-block bg-green-600 bg-opacity-20 px-4 py-1 rounded-full text-green-400 font-medium text-sm mb-6">
              ISO Certified Technology Training Institute
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build Your Tech Career With <span className="text-green-400">SITI</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Transform your future with cutting-edge tech skills. Industry-leading curriculum, expert instructors, and lifetime placement assistance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/courses/mern-stack" className="btn btn-primary">
                Explore Courses
              </Link>
              <Link to="/book-slot" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                Book Free Consultation
              </Link>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">Trusted by 10,000+ students</p>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-sm text-gray-300">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-2xl">
              <h3 className="text-xl font-bold mb-6">Begin Your Tech Journey Today</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <select 
                    className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                  >
                    <option value="" className="bg-gray-800">Select a Course</option>
                    <option value="mern" className="bg-gray-800">MERN Stack</option>
                    <option value="mean" className="bg-gray-800">MEAN Stack</option>
                    <option value="python" className="bg-gray-800">Python</option>
                    <option value="java" className="bg-gray-800">Java</option>
                    <option value="digital-marketing" className="bg-gray-800">Digital Marketing</option>
                    <option value="cloud-computing" className="bg-gray-800">Cloud Computing</option>
                    <option value="devops" className="bg-gray-800">DevOps</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Demo Class
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
              <p className="text-xs text-center mt-4 text-gray-400">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;