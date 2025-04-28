import { useEffect } from 'react';
import { ArrowRight, Briefcase, Calendar, Award, BookOpen, Users, Layers, BarChart, Lightbulb, Clock, UserCheck, Cpu, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import InstructorSlider from '../components/InstructorSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import FeatureCard from '../components/FeatureCard';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';

const courses = [
  {
    title: "MERN Stack Development",
    description: "Master MongoDB, Express, React, and Node.js to build full-stack web applications with JavaScript.",
    image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "₹49,999",
    duration: "16 Weeks",
    level: "Intermediate",
    link: "/courses/mern-stack",
    featured: true
  },
  {
    title: "MEAN Stack Development",
    description: "Learn MongoDB, Express, Angular, and Node.js to create modern web applications.",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "₹49,999",
    duration: "16 Weeks",
    level: "Intermediate",
    link: "/courses/mean-stack"
  },
  {
    title: "Python Programming",
    description: "From fundamentals to advanced concepts, master Python for web development, data science, and automation.",
    image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "₹45,999",
    duration: "14 Weeks",
    level: "Beginner-Advanced",
    link: "/courses/python"
  },
  {
    title: "Java Development",
    description: "Comprehensive Java training covering core concepts, OOP, Spring Boot, and enterprise application development.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "₹47,999",
    duration: "16 Weeks",
    level: "Intermediate",
    link: "/courses/java"
  },
  {
    title: "Digital Marketing",
    description: "Master SEO, SEM, social media marketing, content strategy, and analytics to drive business growth.",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "₹39,999",
    duration: "12 Weeks",
    level: "Beginner-Intermediate",
    link: "/courses/digital-marketing"
  },
  {
    title: "Cloud Computing",
    description: "Learn AWS, Azure, and Google Cloud to architect, deploy, and manage cloud-based solutions.",
    image: "https://images.pexels.com/photos/7567535/pexels-photo-7567535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "₹54,999",
    duration: "14 Weeks",
    level: "Intermediate-Advanced",
    link: "/courses/cloud-computing"
  }
];

const features = [
  {
    icon: Calendar,
    title: "Flexible Learning Schedule",
    description: "Choose between part-time and full-time options to fit your personal schedule and learning pace."
  },
  {
    icon: Users,
    title: "Small Batch Size",
    description: "Limited to 20 students per batch to ensure personalized attention and better learning outcomes."
  },
  {
    icon: Briefcase,
    title: "Lifetime Placement Assistance",
    description: "Comprehensive career support including resume building, interview preparation, and job referrals."
  },
  {
    icon: Lightbulb,
    title: "Industry-Relevant Curriculum",
    description: "Regularly updated content to align with current industry requirements and best practices."
  },
  {
    icon: Layers,
    title: "Project-Based Learning",
    description: "Build a portfolio of real-world projects that demonstrate your skills to potential employers."
  },
  {
    icon: UserCheck,
    title: "Expert Instructors",
    description: "Learn from industry professionals with extensive experience in their respective fields."
  },
  {
    icon: Award,
    title: "ISO Certified Training",
    description: "Internationally recognized certification that validates the quality of our training programs."
  },
  {
    icon: Cpu,
    title: "Advanced AI Mock Interviews",
    description: "Practice with our AI-powered interview simulator to prepare for technical and behavioral interviews."
  }
];

const faqs = [
  {
    question: "What are the prerequisites for joining the courses?",
    answer: "Most of our beginner courses don't require prior technical knowledge. For intermediate and advanced courses, basic programming knowledge or understanding of related concepts is recommended. Our admissions team will help assess your readiness and suggest the appropriate starting point."
  },
  {
    question: "How is the course delivered?",
    answer: "We offer both online and in-person training options. Online training includes live interactive sessions, pre-recorded videos, hands-on projects, and mentorship. In-person training takes place at our campus with state-of-the-art facilities and direct interaction with instructors."
  },
  {
    question: "What kind of job support do you provide?",
    answer: "We offer lifetime placement assistance including resume building, LinkedIn profile optimization, mock interviews (both human and AI-powered), soft skills training, and direct connections with our hiring partners. Our dedicated placement team works with you until you secure your desired position."
  },
  {
    question: "Is there any EMI option available for the course fees?",
    answer: "Yes, we offer flexible payment options including EMIs starting from ₹5,999 per month. We also have tie-ups with various financial institutions to provide education loans with affordable interest rates and convenient repayment terms."
  },
  {
    question: "Will I get a certificate after completing the course?",
    answer: "Absolutely! You'll receive an ISO-certified course completion certificate that is recognized by the industry. For specific courses, we also help you prepare for and obtain internationally recognized certifications from organizations like AWS, Microsoft, Google, etc."
  },
  {
    question: "What if I miss a class?",
    answer: "All classes are recorded and available for review at your convenience. Additionally, we offer make-up sessions and one-on-one doubt-clearing sessions to ensure you don't miss out on any important content."
  }
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SITI - Smart Info Tech Institution | Leading Technology Training Institute";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <section className="py-10 bg-green-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-600">Placement Rate</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <p className="text-gray-600">Hiring Partners</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">ISO 9001</div>
              <p className="text-gray-600">Certified</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Programs
            </h5>
            <h2 className="text-3xl font-bold mb-4">Cutting-Edge Tech Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Launch your career in tech with our industry-aligned programs designed to help you master in-demand skills and land your dream job.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/courses/mern-stack" 
              className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
            >
              View all courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </h5>
            <h2 className="text-3xl font-bold mb-4">A Learning Experience Like No Other</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our unique approach combines cutting-edge curriculum, expert instructors, and comprehensive support to ensure your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Instructors Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <InstructorSlider />
        </div>
      </section>
      
      {/* Career Path Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Career Roadmap
              </h5>
              <h2 className="text-3xl font-bold mb-6">Your Path to Tech Success</h2>
              <p className="text-gray-600 mb-8">
                We've designed a comprehensive journey to transform you from a beginner to an industry-ready professional through structured learning and career development.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Skill Assessment & Course Selection</h4>
                    <p className="text-gray-600">
                      Begin with a personalized skill assessment to identify the right program for your goals and background.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Hands-on Training & Project Building</h4>
                    <p className="text-gray-600">
                      Develop practical skills through our project-based curriculum designed by industry experts.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Career Preparation & Portfolio Development</h4>
                    <p className="text-gray-600">
                      Build an impressive portfolio and master the soft skills needed to stand out in job interviews.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Interview Preparation & Job Placement</h4>
                    <p className="text-gray-600">
                      Receive personalized coaching, practice with AI mock interviews, and connect with our hiring partners.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/book-slot" className="btn btn-primary">
                  Start Your Journey
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute w-96 h-96 bg-green-400 rounded-full opacity-10 -top-10 -left-10"></div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Career Growth" 
                className="relative rounded-xl shadow-2xl max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <TestimonialSlider />
        </div>
      </section>
      
      {/* Companies Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Trusted By Industry Leaders
            </h5>
            <h2 className="text-3xl font-bold mb-4">Our Graduates Work At</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join the ranks of our successful alumni who've secured positions at top tech companies globally.
            </p>
          </div>
          
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
      </section>
      
      {/* Special Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Special Features
            </h5>
            <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our unique offerings designed to give you the competitive edge in today's tech job market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 border border-gray-100">
              <div className="bg-green-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lifetime Placement Support</h3>
              <p className="text-gray-600 mb-4">
                Our commitment to your success doesn't end with course completion. Receive ongoing career assistance for life, including job referrals and interview coaching.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Resume building and LinkedIn optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Direct referrals to 200+ hiring partners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regular job placement drives</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6 border border-gray-100">
              <div className="bg-green-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Industry-Recognized Curriculum</h3>
              <p className="text-gray-600 mb-4">
                Our courses are designed with input from industry leaders to ensure you're learning the most relevant and in-demand skills.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Updated quarterly to reflect industry trends</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Real-world projects based on industry cases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>ISO certified training methodology</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6 border border-gray-100">
              <div className="bg-green-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Learning & Interviews</h3>
              <p className="text-gray-600 mb-4">
                Leverage cutting-edge AI technology to enhance your learning experience and interview preparation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Weekly AI-powered mock interviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Personalized learning paths adapting to your progress</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>AI-assisted code review and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Common Questions
            </h5>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to commonly asked questions about our courses, payment options, and career support.
            </p>
          </div>
          
          <FAQ faqs={faqs} />
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Latest Insights
            </h5>
            <h2 className="text-3xl font-bold mb-4">From Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, tutorials, and insights from the tech industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Blog" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-medium py-1 px-2 rounded">
                  Tech Trends
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>June 12, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">The Future of Web Development: Trends to Watch in 2025</h3>
                <p className="text-gray-600 mb-4">
                  Explore the emerging technologies and methodologies that are reshaping the landscape of web development.
                </p>
                <Link 
                  to="/blog" 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Blog" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded">
                  Career Advice
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>May 28, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">From Bootcamp to Job Offer: A Success Story</h3>
                <p className="text-gray-600 mb-4">
                  Read how one of our graduates went from having zero coding experience to landing a job at a top tech company.
                </p>
                <Link 
                  to="/blog" 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Blog" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-medium py-1 px-2 rounded">
                  Tutorial
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>May 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">Building Your First AI Application with Python</h3>
                <p className="text-gray-600 mb-4">
                  A step-by-step guide to creating a simple but powerful AI application using Python and popular libraries.
                </p>
                <Link 
                  to="/blog" 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="btn btn-outline"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Home;