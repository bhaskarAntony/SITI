import { CheckCircle, Star, Clock, Calendar, User, Award, Code, Database, Server, Globe, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '../../components/CallToAction';
import FAQ from '../../components/FAQ';

const faqs = [
  {
    question: "What are the prerequisites for the MERN Stack course?",
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
  { name: "React.js", icon: Code, description: "Front-end JavaScript library for building user interfaces" },
  { name: "Node.js", icon: Server, description: "JavaScript runtime environment for server-side applications" },
  { name: "Redux", icon: Code, description: "State management library for JavaScript applications" },
  { name: "GraphQL", icon: Database, description: "Query language for APIs" },
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
      "Git and GitHub for version control",
      "Command line basics",
      "Development environment setup"
    ]
  },
  {
    title: "Module 2: Front-end Development with React",
    duration: "4 Weeks",
    topics: [
      "React fundamentals and JSX",
      "Components, props, and state",
      "React hooks and context API",
      "React Router for navigation",
      "State management with Redux",
      "Material UI and styled-components"
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
      "Testing with Jest"
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
      "GraphQL API development",
      "WebSockets and real-time communication",
      "File uploads and storage",
      "Payment gateway integration",
      "Performance optimization",
      "Security best practices"
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
    title: "Social Media Application",
    description: "Build a feature-rich social networking platform with user profiles, posts, comments, likes, and real-time notifications.",
    image: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "E-commerce Platform",
    description: "Develop a complete online store with product listings, shopping cart, secure checkout, order management, and payment integration.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Real-time Chat Application",
    description: "Create a messaging platform with private and group chats, message history, user presence indicators, and file sharing capabilities.",
    image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const MernStack = () => {
  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h5 className="inline-block bg-white/10 px-4 py-1 rounded-full text-white font-medium text-sm mb-6">
                Full Stack Development
              </h5>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                MERN Stack Development
              </h1>
              <p className="text-green-100 text-lg mb-8 max-w-xl">
                Master MongoDB, Express, React, and Node.js to build powerful, scalable web applications from frontend to backend with JavaScript.
              </p>
              
              <div className="flex flex-wrap gap-6 text-green-100 mb-8">
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
                src="https://images.pexels.com/photos/7988088/pexels-photo-7988088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="MERN Stack Development" 
                className="rounded-xl shadow-2xl z-10 relative"
              />
              <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl -rotate-3 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Course Overview
              </h5>
              <h2 className="text-3xl font-bold mb-6">
                What You'll Learn
              </h2>
              <p className="text-gray-600">
                Our comprehensive MERN Stack Development course covers everything you need to become a proficient full-stack JavaScript developer, from foundational concepts to advanced techniques.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Course Description</h3>
                <p className="text-gray-600 mb-4">
                  The MERN Stack Development course is designed to transform you into a job-ready full-stack JavaScript developer. Through hands-on projects and comprehensive training, you'll master the entire web development process from building interactive user interfaces with React to creating robust backend services with Node.js and Express, all while learning to store and retrieve data using MongoDB.
                </p>
                <p className="text-gray-600">
                  This course balances theoretical knowledge with practical application, ensuring you gain the skills employers are looking for in the competitive tech job market.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Learning Outcomes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Build complete, full-stack web applications using JavaScript throughout the entire stack</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Design and develop responsive, dynamic user interfaces with React.js</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Create robust server-side applications with Node.js and Express.js</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Design and implement MongoDB databases with proper schema design and data modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Implement authentication, authorization, and security best practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Deploy applications to production using cloud platforms like AWS, Heroku, or Vercel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Work with modern development tools, workflows, and version control systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Build a professional portfolio of real-world projects to showcase your skills</span>
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
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Technologies
            </h5>
            <h2 className="text-3xl font-bold mb-6">
              MERN Stack Technologies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master the complete JavaScript ecosystem with these powerful, in-demand technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => {
              const TechIcon = tech.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
                  <div className="p-3 bg-green-50 text-green-600 rounded-lg w-fit mb-4">
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
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
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
                    <div className="mt-2 md:mt-0 flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
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
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
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
      
      {/* Instructors */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Expert Guidance
            </h5>
            <h2 className="text-3xl font-bold mb-6">
              Meet Your Instructors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from industry professionals with extensive experience in MERN stack development and teaching.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center">
              <div className="w-24 h-24 mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Dr. Michael Johnson" 
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Michael Johnson</h3>
              <p className="text-green-600 font-medium mb-3">Lead MERN Stack Instructor</p>
              <p className="text-gray-600 mb-4">
                Former Senior Developer at Google with 10+ years of experience in full-stack development. PhD in Computer Science and author of "Modern Web Development with MERN Stack."
              </p>
              <div className="flex justify-center space-x-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center">
              <div className="w-24 h-24 mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sarah Williams" 
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Williams</h3>
              <p className="text-green-600 font-medium mb-3">Frontend Development Expert</p>
              <p className="text-gray-600 mb-4">
                React specialist with experience at Facebook and Netflix. Has trained over 5,000 students in React.js and modern frontend development techniques.
              </p>
              <div className="flex justify-center space-x-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center">
              <div className="w-24 h-24 mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="David Chen" 
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">David Chen</h3>
              <p className="text-green-600 font-medium mb-3">Backend & Database Specialist</p>
              <p className="text-gray-600 mb-4">
                Node.js and MongoDB expert with 8+ years of experience building scalable backend systems. Previously led backend development at several successful startups.
              </p>
              <div className="flex justify-center space-x-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Features */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h5 className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full text-white font-medium text-sm mb-4">
              Course Highlights
            </h5>
            <h2 className="text-3xl font-bold mb-6">
              What Makes Our Course Special
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Our MERN Stack course goes beyond just teaching you the technologies. Here's what sets us apart.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg w-fit mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Project-Based Learning</h3>
              <p className="text-green-100">
                Apply concepts to real-world projects that solve actual problems, building a portfolio that demonstrates your abilities to potential employers.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg w-fit mb-4">
                <User className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">1:1 Mentorship</h3>
              <p className="text-green-100">
                Regular one-on-one sessions with experienced developers who provide personalized guidance, code reviews, and career advice.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Small Batch Size</h3>
              <p className="text-green-100">
                Limited to 20 students per batch to ensure personalized attention, better learning outcomes, and a collaborative environment.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg w-fit mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lifetime Placement Support</h3>
              <p className="text-green-100">
                Our commitment to your success doesn't end with course completion. Receive ongoing career assistance for life, including job referrals and interview coaching.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg w-fit mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Learning Options</h3>
              <p className="text-green-100">
                Choose between full-time, part-time, and weekend batches to fit your schedule, with options for both online and in-person learning.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg w-fit mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry-Aligned Curriculum</h3>
              <p className="text-green-100">
                Our curriculum is regularly updated with input from industry leaders to ensure you're learning the most relevant and in-demand skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Outcomes */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Career Prospects
              </h5>
              <h2 className="text-3xl font-bold mb-6">
                Launch Your Career in Tech
              </h2>
              <p className="text-gray-600 mb-8">
                The MERN Stack is one of the most in-demand skill sets in the tech industry today. Our graduates have secured positions at top companies with impressive salary packages.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-green-50 text-green-600 rounded-lg mr-4 flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Job Roles You Can Apply For</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">Full Stack Developer</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">Frontend Developer</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">Backend Developer</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">React Developer</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">Node.js Developer</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">JavaScript Developer</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-green-50 text-green-600 rounded-lg mr-4 flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Average Salary Range</h3>
                    <p className="text-gray-600">
                      MERN Stack developers command competitive salaries in the market:
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">Entry Level: ₹5,00,000 - ₹8,00,000 per annum</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">Mid-Level: ₹8,00,000 - ₹15,00,000 per annum</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
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
                
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-center">Alumni Success Stories</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <img 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="John Davis" 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="flex items-center">
                          <h5 className="font-semibold">John Davis</h5>
                          <span className="mx-2 text-gray-400">|</span>
                          <span className="text-sm text-gray-600">Google</span>
                        </div>
                        <p className="text-gray-600 mt-1">
                          "The MERN Stack course at SITI was transformative. Within 2 months of graduation, I landed a role at Google with a 200% salary increase."
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <img 
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Emily Zhang" 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="flex items-center">
                          <h5 className="font-semibold">Emily Zhang</h5>
                          <span className="mx-2 text-gray-400">|</span>
                          <span className="text-sm text-gray-600">Microsoft</span>
                        </div>
                        <p className="text-gray-600 mt-1">
                          "As a career switcher with no technical background, SITI's program gave me all the skills I needed to become a successful developer at Microsoft."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Investment
            </h5>
            <h2 className="text-3xl font-bold mb-6">
              Course Fee & Payment Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer flexible payment options to make quality education accessible to everyone.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-green-600 py-4 px-6 text-white">
                <h3 className="text-xl font-bold">One-Time Payment</h3>
                <p className="text-green-100">Pay upfront and save</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900">₹49,999</div>
                  <p className="text-gray-600">One-time payment</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Complete 16-week course</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">All learning materials</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">1:1 mentorship sessions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Lifetime placement assistance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Industry-recognized certificate</span>
                  </div>
                </div>
                
                <Link to="/book-slot" className="btn btn-primary w-full">
                  Enroll Now
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-green-500 relative">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs py-1 px-3 rounded-bl-lg font-bold">
                MOST POPULAR
              </div>
              <div className="bg-green-600 py-4 px-6 text-white">
                <h3 className="text-xl font-bold">EMI Option</h3>
                <p className="text-green-100">Pay in easy monthly installments</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900">₹5,999</div>
                  <p className="text-gray-600">per month for 9 months</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Complete 16-week course</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">All learning materials</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">1:1 mentorship sessions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Lifetime placement assistance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Industry-recognized certificate</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">No interest EMI options available</span>
                  </div>
                </div>
                
                <Link to="/book-slot" className="btn btn-primary w-full">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto mt-10 bg-white rounded-xl p-6 border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-center">Additional Payment Options</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Award className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Scholarships</h4>
                  <p className="text-gray-600">
                    Merit-based scholarships available for exceptional candidates. Contact our admissions team to learn more.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Education Loans</h4>
                  <p className="text-gray-600">
                    We have partnerships with leading financial institutions offering low-interest education loans.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Corporate Sponsorship</h4>
                  <p className="text-gray-600">
                    Special rates available for companies looking to upskill their employees. Contact our corporate training team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Common Questions
            </h5>
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our MERN Stack Development course.
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

export default MernStack;