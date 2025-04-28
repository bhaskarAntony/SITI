import { CheckCircle, Star, Clock, Calendar, User, Award, Code, Database, Server, Globe, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '../../components/CallToAction';
import FAQ from '../../components/FAQ';

const faqs = [
  {
    question: "What are the prerequisites for the MEAN Stack course?",
    answer: "While no specific programming experience is required, a basic understanding of HTML, CSS, and JavaScript is beneficial. We offer a pre-course learning path to help beginners get up to speed before the main course begins."
  },
  {
    question: "How is the course delivered?",
    answer: "The course is available in both online and in-person formats. Online training includes live interactive sessions, pre-recorded videos, hands-on projects, and 1-on-1 mentorship. In-person training takes place at our campus with direct interaction with instructors."
  },
  {
    question: "Will I get a certificate after completing the course?",
    answer: "Yes, upon successful completion of the course and all required projects, you'll receive an ISO-certified course completion certificate that is recognized in the industry."
  },
  {
    question: "What kind of projects will I build during the course?",
    answer: "You'll build several projects including a personal portfolio, a social media application, an e-commerce platform, and a real-time chat application. The capstone project will be a full-featured web application that addresses a real-world problem."
  },
  {
    question: "What kind of job support do you provide?",
    answer: "We offer comprehensive placement assistance including resume building, LinkedIn profile optimization, mock interviews (both human and AI-powered), soft skills training, and direct connections with our hiring partners. Our dedicated placement team works with you until you secure your desired position."
  },
  {
    question: "Is there any EMI option available for the course fees?",
    answer: "Yes, we offer flexible payment options including EMIs starting from ₹5,999 per month. We also have tie-ups with various financial institutions to provide education loans with affordable interest rates and convenient repayment terms."
  }
];

const techStack = [
  { name: "MongoDB", icon: Database, description: "NoSQL database for storing application data" },
  { name: "Express.js", icon: Server, description: "Web application framework for Node.js" },
  { name: "Angular", icon: Code, description: "Front-end framework for building dynamic web applications" },
  { name: "Node.js", icon: Server, description: "JavaScript runtime environment for server-side applications" },
  { name: "TypeScript", icon: Code, description: "Typed superset of JavaScript" },
  { name: "RxJS", icon: Code, description: "Library for reactive programming" },
  { name: "REST API", icon: Globe, description: "Architectural style for designing networked applications" },
  { name: "JWT", icon: Award, description: "JSON Web Tokens for secure authentication" }
];

const syllabus = [
  {
    title: "Module 1: Foundations of Web Development",
    duration: "2 Weeks",
    topics: [
      "HTML5 and CSS3 fundamentals",
      "JavaScript ES6+ concepts",
      "TypeScript basics",
      "Git and GitHub for version control",
      "Development environment setup"
    ]
  },
  {
    title: "Module 2: Front-end Development with Angular",
    duration: "4 Weeks",
    topics: [
      "Angular fundamentals and architecture",
      "Components and templates",
      "Services and dependency injection",
      "Angular Router",
      "Forms and validation",
      "State management with NgRx"
    ]
  },
  {
    title: "Module 3: Back-end Development with Node.js",
    duration: "4 Weeks",
    topics: [
      "Node.js fundamentals",
      "Express.js framework",
      "RESTful API design principles",
      "Authentication and authorization",
      "Error handling and middleware",
      "Testing with Jasmine"
    ]
  },
  {
    title: "Module 4: Database Integration with MongoDB",
    duration: "3 Weeks",
    topics: [
      "MongoDB fundamentals",
      "Schema design and data modeling",
      "CRUD operations",
      "Mongoose ODM",
      "Aggregation framework",
      "Indexing and optimization"
    ]
  },
  {
    title: "Module 5: Advanced Concepts",
    duration: "2 Weeks",
    topics: [
      "Real-time communication with WebSockets",
      "File uploads and storage",
      "Payment gateway integration",
      "Performance optimization",
      "Security best practices",
      "Progressive Web Apps (PWA)"
    ]
  },
  {
    title: "Module 6: Capstone Project",
    duration: "1 Week",
    topics: [
      "Project planning and architecture",
      "Full-stack application development",
      "Deployment to cloud platforms",
      "CI/CD pipeline setup",
      "Documentation and presentation"
    ]
  }
];

const projects = [
  {
    title: "Social Media Dashboard",
    description: "Build a feature-rich social media analytics platform with real-time data visualization and user engagement tracking.",
    image: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "E-learning Platform",
    description: "Develop a comprehensive learning management system with course creation, student progress tracking, and interactive content delivery.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Task Management System",
    description: "Create a collaborative project management tool with real-time updates, task assignment, and progress monitoring features.",
    image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const MeanStack = () => {
  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-800 to-blue-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h5 className="inline-block bg-white/10 px-4 py-1 rounded-full text-white font-medium text-sm mb-6">
                Full Stack Development
              </h5>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                MEAN Stack Development
              </h1>
              <p className="text-blue-100 text-lg mb-8 max-w-xl">
                Master MongoDB, Express, Angular, and Node.js to build powerful, scalable web applications with TypeScript and modern development practices.
              </p>
              
              <div className="flex flex-wrap gap-6 text-blue-100 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>16 Weeks</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Flexible Schedule</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>Beginner to Advanced</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  <span>ISO Certified</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/book-slot" className="btn btn-primary">
                  Book a Free Demo
                </Link>
                <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                  Download Syllabus
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="MEAN Stack Development" 
                className="rounded-xl shadow-2xl z-10 relative"
              />
              <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl -rotate-3 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h5 className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Course Overview
              </h5>
              <h2 className="text-3xl font-bold mb-6">
                What You'll Learn
              </h2>
              <p className="text-gray-600">
                Our comprehensive MEAN Stack Development course covers everything you need to become a proficient full-stack TypeScript developer, from foundational concepts to advanced techniques.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Course Description</h3>
                <p className="text-gray-600 mb-4">
                  The MEAN Stack Development course is designed to transform you into a job-ready full-stack TypeScript developer. Through hands-on projects and comprehensive training, you'll master the entire web development process from building robust applications with Angular to creating scalable backend services with Node.js and Express, all while learning to store and retrieve data using MongoDB.
                </p>
                <p className="text-gray-600">
                  This course balances theoretical knowledge with practical application, ensuring you gain the skills employers are looking for in the competitive tech job market.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Learning Outcomes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Build complete, full-stack web applications using TypeScript throughout the entire stack</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Design and develop enterprise-grade applications with Angular</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Create robust server-side applications with Node.js and Express.js</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Design and implement MongoDB databases with proper schema design and data modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Implement authentication, authorization, and security best practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Deploy applications to production using cloud platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Work with modern development tools, workflows, and version control systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Build a professional portfolio of real-world projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h5 className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Technologies
            </h5>
            <h2 className="text-3xl font-bold mb-6">
              MEAN Stack Technologies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master the complete TypeScript ecosystem with these powerful, in-demand technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => {
              const TechIcon = tech.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-fit mb-4">
                    <TechIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Syllabus */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h5 className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Curriculum
            </h5>
            <h2 className="text-3xl font-bold mb-6">
              Detailed Course Syllabus
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive curriculum is designed to take you from the basics to advanced concepts with hands-on projects at every stage.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {syllabus.map((module, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{module.title}</h3>
                    <div className="mt-2 md:mt-0 flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h5 className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Hands-On Experience
            </h5>
            <h2 className="text-3xl font-bold mb-6">
              Projects You'll Build
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Apply your skills to real-world projects that will form the foundation of your professional portfolio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h5 className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Career Prospects
              </h5>
              <h2 className="text-3xl font-bold mb-6">
                Launch Your Career in Tech
              </h2>
              <p className="text-gray-600 mb-8">
                The MEAN Stack is one of the most in-demand skill sets in the tech industry today. Our graduates have secured positions at top companies with impressive salary packages.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg mr-4 flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Job Roles You Can Apply For</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">Full Stack Developer</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">Angular Developer</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">Backend Developer</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">TypeScript Developer</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">Node.js Developer</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">Software Engineer</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg mr-4 flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Average Salary Range</h3>
                    <p className="text-gray-600">
                      MEAN Stack developers command competitive salaries in the market:
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">Entry Level: ₹5,00,000 - ₹8,00,000 per annum</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">Mid-Level: ₹8,00,000 - ₹15,00,000 per annum</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">Senior Level: ₹15,00,000+ per annum</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/book-slot" className="btn btn-primary">
                  Start Your Career Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Hiring Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-8" />
                  </div>
                  <div className="flex justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h5 className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Common Questions
            </h5>
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our MEAN Stack Development course.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default MeanStack;