import { useState } from 'react';
import { Calendar, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

const BookSlot = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h5 className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full text-white font-medium text-sm mb-6">
              Schedule a Session
            </h5>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-green-100 text-lg">
              Take the first step towards your tech career. Schedule a personalized session with our course advisors to discuss your goals and find the perfect program.
            </p>
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {!isSubmitted ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Progress Steps */}
                <div className="bg-gray-50 py-4 px-6 border-b">
                  <div className="flex items-center justify-between">
                    <div className={`flex flex-col items-center ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'} mb-1`}>
                        1
                      </div>
                      <span className="text-xs font-medium">Personal Info</span>
                    </div>
                    <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                    <div className={`flex flex-col items-center ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'} mb-1`}>
                        2
                      </div>
                      <span className="text-xs font-medium">Select Course</span>
                    </div>
                    <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                    <div className={`flex flex-col items-center ${step >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'} mb-1`}>
                        3
                      </div>
                      <span className="text-xs font-medium">Schedule</span>
                    </div>
                  </div>
                </div>
                
                {/* Form */}
                <div className="p-8">
                  {step === 1 && (
                    <form onSubmit={handleNextStep}>
                      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name*
                          </label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address*
                          </label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="john.doe@example.com"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number*
                          </label>
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="+1 (123) 456-7890"
                            required
                          />
                        </div>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <button 
                          type="submit" 
                          className="btn btn-primary"
                        >
                          Next Step
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  )}
                  
                  {step === 2 && (
                    <form onSubmit={handleNextStep}>
                      <h2 className="text-2xl font-bold mb-6">Select a Course</h2>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                            Interested Course*
                          </label>
                          <select 
                            id="course" 
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                          >
                            <option value="">Select a Course</option>
                            <option value="mern-stack">MERN Stack Development</option>
                            <option value="mean-stack">MEAN Stack Development</option>
                            <option value="python">Python Programming</option>
                            <option value="java">Java Development</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="cloud-computing">Cloud Computing</option>
                            <option value="devops">DevOps</option>
                            <option value="not-sure">Not Sure Yet</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Information (Optional)
                          </label>
                          <textarea 
                            id="message" 
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4} 
                            className="form-input"
                            placeholder="Tell us about your background, goals, or any specific questions you have about the course..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="mt-8 flex justify-between">
                        <button 
                          type="button" 
                          onClick={handlePrevStep}
                          className="btn btn-outline"
                        >
                          Back
                        </button>
                        <button 
                          type="submit" 
                          className="btn btn-primary"
                        >
                          Next Step
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  )}
                  
                  {step === 3 && (
                    <form onSubmit={handleSubmit}>
                      <h2 className="text-2xl font-bold mb-6">Schedule Your Session</h2>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Date*
                          </label>
                          <div className="relative">
                            <input 
                              type="date" 
                              id="date" 
                              name="date"
                              value={formData.date}
                              onChange={handleInputChange}
                              className="form-input"
                              min={new Date().toISOString().split('T')[0]}
                              required
                            />
                            <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Time*
                          </label>
                          <div className="relative">
                            <select 
                              id="time" 
                              name="time"
                              value={formData.time}
                              onChange={handleInputChange}
                              className="form-input"
                              required
                            >
                              <option value="">Select a Time</option>
                              <option value="10:00">10:00 AM</option>
                              <option value="11:00">11:00 AM</option>
                              <option value="12:00">12:00 PM</option>
                              <option value="13:00">1:00 PM</option>
                              <option value="14:00">2:00 PM</option>
                              <option value="15:00">3:00 PM</option>
                              <option value="16:00">4:00 PM</option>
                              <option value="17:00">5:00 PM</option>
                            </select>
                            <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6">
                          <h3 className="text-lg font-semibold mb-2 text-green-800">Your Booking Summary</h3>
                          <ul className="space-y-2">
                            <li className="flex">
                              <Users className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <div>
                                <span className="font-medium">Name:</span> {formData.name}
                              </div>
                            </li>
                            <li className="flex">
                              <Calendar className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <div>
                                <span className="font-medium">Course:</span> {formData.course ? formData.course.replace(/-/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) : 'Not Selected'}
                              </div>
                            </li>
                            {formData.date && formData.time && (
                              <li className="flex">
                                <Clock className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                                <div>
                                  <span className="font-medium">Schedule:</span> {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {formData.time.includes(':') ? formData.time : `${formData.time}:00`} {parseInt(formData.time) >= 12 ? 'PM' : 'AM'}
                                </div>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button 
                          type="button" 
                          onClick={handlePrevStep}
                          className="btn btn-outline"
                        >
                          Back
                        </button>
                        <button 
                          type="submit" 
                          className="btn btn-primary"
                        >
                          Confirm Booking
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for scheduling a consultation with us. We've sent a confirmation email to <strong>{formData.email}</strong> with all the details.
                </p>
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 max-w-md mx-auto mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-green-800">Your Appointment Details</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex">
                      <Users className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Name:</span> {formData.name}
                      </div>
                    </li>
                    <li className="flex">
                      <Calendar className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Course:</span> {formData.course.replace(/-/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
                      </div>
                    </li>
                    <li className="flex">
                      <Clock className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Date & Time:</span> {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {formData.time.includes(':') ? formData.time : `${formData.time}:00`} {parseInt(formData.time) >= 12 ? 'PM' : 'AM'}
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 mb-8">
                  One of our course advisors will contact you before your scheduled appointment to confirm the details. If you need to reschedule or have any questions, please contact us at <a href="mailto:support@sititech.com" className="text-green-600 hover:text-green-700">support@sititech.com</a> or call <a href="tel:+11234567890" className="text-green-600 hover:text-green-700">+1 (123) 456-7890</a>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/" className="btn btn-primary">
                    Back to Home
                  </a>
                  <a href="/courses/mern-stack" className="btn btn-outline">
                    Explore Courses
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Why Book Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Why Book a Consultation
            </h5>
            <h2 className="text-3xl font-bold mb-4">
              Benefits of a Free Consultation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how a personalized consultation can help you make informed decisions about your tech education journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Guidance</h3>
              <p className="text-gray-600">
                Get expert advice tailored to your specific career goals, background, and learning preferences from our experienced course advisors.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Course Comparison</h3>
              <p className="text-gray-600">
                Understand the differences between our various programs, curriculum details, and which one aligns best with your career aspirations.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Information</h3>
              <p className="text-gray-600">
                Learn about tuition costs, available scholarships, flexible payment options, and EMI plans to make your education more affordable.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h5 className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Student Stories
            </h5>
            <h2 className="text-3xl font-bold mb-4">
              From Consultation to Success
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students who started their journey with a simple consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="John Davis" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">John Davis</h4>
                  <p className="text-sm text-gray-600">MERN Stack Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The consultation helped me understand which program would be best for my background. The advisor took time to understand my goals and recommended the MERN stack course, which turned out to be perfect for me."
              </p>
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Python Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "I was unsure about transitioning from marketing to tech, but the consultation gave me confidence. They explained Python's versatility and suggested a learning path that made the transition smooth and manageable."
              </p>
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Michael Chen" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Cloud Computing Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The free consultation was invaluable. The advisor helped me understand the financial options available and created a payment plan that fit my budget. This made my decision to enroll much easier."
              </p>
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">How long does the consultation last?</h3>
                <p className="text-gray-600">
                  Our typical consultation sessions last between 30-45 minutes. This gives us enough time to understand your goals, answer your questions, and provide personalized recommendations.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Is there any obligation to enroll after the consultation?</h3>
                <p className="text-gray-600">
                  Absolutely not. The consultation is completely free and carries no obligation to enroll. It's designed to help you make an informed decision about your education.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Can I reschedule my consultation?</h3>
                <p className="text-gray-600">
                  Yes, you can reschedule your consultation by contacting our support team at least 24 hours before your scheduled appointment. You can email us at support@sititech.com or call us at +1 (123) 456-7890.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">What should I prepare for the consultation?</h3>
                <p className="text-gray-600">
                  To make the most of your consultation, we recommend thinking about your career goals, any specific technologies you're interested in, your educational background, and any questions you have about our programs or the tech industry in general.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookSlot;