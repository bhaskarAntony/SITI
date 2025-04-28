import { Award, Users, BookOpen, MapPin, Star, CheckCircle, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h5 className="inline-block bg-white/10 px-4 py-1 rounded-full text-white font-medium text-sm mb-6">
                About Us
              </h5>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Tech Education <br /> Since 2015
              </h1>
              <p className="text-green-100 text-lg mb-8 max-w-xl">
                Smart Info Tech Institution (SITI) is an ISO certified technology training institution committed to delivering world-class education and creating job-ready professionals through innovative learning methodologies.
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">10K+</div>
                  <p className="text-sm">Students Trained</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <p className="text-sm">Placement Rate</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">200+</div>
                  <p className="text-sm">Hiring Partners</p>
                </div>
              </div>
            </div>
            
            <div className="lg:p-4 relative">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About SITI" 
                className="rounded-xl shadow-2xl z-10 relative"
              />
              <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl -rotate-3 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Story
              </h5>
              <h2 className="text-3xl font-bold mb-6">
                From Humble Beginnings to Industry Leadership
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015 by a group of passionate tech professionals, SITI began with a simple mission: to bridge the gap between academic education and industry requirements in the technology sector.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small training center with just three courses and a handful of students has now grown into a premier tech education institution offering over 20 specialized programs and training thousands of students each year.
              </p>
              <p className="text-gray-600">
                Throughout our journey, our core values have remained unchanged - commitment to quality education, student success, and continuous innovation. Today, we're proud to be recognized as one of the leading tech training institutes in the country with ISO 9001 certification for our quality management systems.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/courses/mern-stack" className="btn btn-primary">
                  Explore Our Courses
                </Link>
                <Link to="/book-slot" className="btn btn-outline">
                  Book a Free Demo
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="SITI Campus" 
                    className="rounded-lg shadow-md"
                  />
                  <img 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="SITI Students" 
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="space-y-4 mt-6">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="SITI Classroom" 
                    className="rounded-lg shadow-md"
                  />
                  <img 
                    src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="SITI Graduation" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Vision */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Purpose
            </h5>
            <h2 className="text-3xl font-bold mb-4">
              Mission & Vision
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our guiding principles that define our approach to tech education and shape our path forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-green-50 rounded-bl-full"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower individuals with cutting-edge tech skills through industry-relevant education, enabling them to thrive in the rapidly evolving digital landscape.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Provide accessible, high-quality tech education</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Bridge the gap between academic learning and industry requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Create job-ready professionals through hands-on training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Foster a culture of continuous learning and innovation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-blue-50 rounded-bl-full"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To be the most trusted and innovative tech education institution, known for creating exceptional talent that drives the future of technology worldwide.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Become the premier destination for tech education globally</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Lead innovation in teaching methodologies and learning experiences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Create a global community of tech leaders and innovators</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Contribute to narrowing the tech skills gap worldwide</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Foundation
            </h5>
            <h2 className="text-3xl font-bold mb-4">
              Core Values That Define Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our decisions, shape our culture, and help us deliver exceptional education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-100 rounded-xl bg-white hover:border-green-200 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in everything we do, from curriculum development to student support and facility management.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-xl bg-white hover:border-green-200 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Student-Centric</h3>
              <p className="text-gray-600">
                Our students are at the heart of every decision we make. Their success is our success, and their growth is our primary focus.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-xl bg-white hover:border-green-200 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our teaching methods, curriculum, and technology to stay ahead of industry trends and provide relevant education.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-xl bg-white hover:border-green-200 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                <Building className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our interactions, maintaining transparency and honesty with our students and partners.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Pride
            </h5>
            <h2 className="text-3xl font-bold mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A testament to our commitment to excellence in tech education and student success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center">
                <Award className="h-24 w-24 text-white opacity-70" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ISO 9001:2015 Certification</h3>
                <p className="text-gray-600">
                  Internationally recognized certification for our quality management systems, ensuring consistent high-quality education delivery.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
                <Star className="h-24 w-24 text-white opacity-70" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Best Tech Training Institute 2024</h3>
                <p className="text-gray-600">
                  Recognized as the leading technology training institute by the National Education Excellence Awards for three consecutive years.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center">
                <Users className="h-24 w-24 text-white opacity-70" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">10,000+ Success Stories</h3>
                <p className="text-gray-600">
                  More than ten thousand students have successfully completed our programs and are now working with leading tech companies worldwide.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Our Industry Partnerships</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              <div className="flex justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8" />
              </div>
              <div className="flex justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8" />
              </div>
              <div className="flex justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Meta-Logo.png" alt="Meta" className="h-8" />
              </div>
              <div className="flex justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-8" />
              </div>
              <div className="flex justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-8" />
              </div>
              <div className="flex justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Locations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Presence
            </h5>
            <h2 className="text-3xl font-bold mb-4">
              Campus Locations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With multiple state-of-the-art campuses across the country, we're accessible wherever you are.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card h-full">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.pexels.com/photos/3182530/pexels-photo-3182530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="New York Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">New York Campus</h3>
                <div className="flex items-start mb-3">
                  <MapPin className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <address className="text-gray-600 not-italic">
                    123 Tech Avenue, Manhattan, <br />
                    New York, NY 10001, USA
                  </address>
                </div>
                <div className="flex items-center mb-3 text-gray-600">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  <span>Flagship Campus</span>
                </div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                >
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="card h-full">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="San Francisco Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">San Francisco Campus</h3>
                <div className="flex items-start mb-3">
                  <MapPin className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <address className="text-gray-600 not-italic">
                    456 Innovation Drive, <br />
                    San Francisco, CA 94107, USA
                  </address>
                </div>
                <div className="flex items-center mb-3 text-gray-600">
                  <BookOpen className="h-5 w-5 text-green-500 mr-2" />
                  <span>Tech Innovation Hub</span>
                </div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                >
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="card h-full">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="London Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">London Campus</h3>
                <div className="flex items-start mb-3">
                  <MapPin className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <address className="text-gray-600 not-italic">
                    789 Digital Lane, <br />
                    London, EC2A 4NE, UK
                  </address>
                </div>
                <div className="flex items-center mb-3 text-gray-600">
                  <Users className="h-5 w-5 text-green-500 mr-2" />
                  <span>European Headquarters</span>
                </div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                >
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default About;