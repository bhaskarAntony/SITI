import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-700 to-green-600 py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Launch Your Tech Career?</h2>
          <p className="text-green-100 text-lg mb-8">
            Join thousands of successful graduates who transformed their careers with SITI's industry-leading tech education programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses/mern-stack" 
              className="btn bg-white text-green-700 hover:bg-gray-100"
            >
              Explore Programs
            </Link>
            <Link 
              to="/book-slot" 
              className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center">
            <div className="flex -space-x-4">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Student" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Student" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Student" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Student" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              <div className="w-12 h-12 rounded-full border-2 border-white bg-green-800 flex items-center justify-center text-white font-bold">
                +2K
              </div>
            </div>
            <div className="ml-4 text-white text-sm">
              Join over 10,000 graduates already working in top tech companies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;