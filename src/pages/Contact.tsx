import { MapPin, Phone, Mail, Clock, Globe, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h5 className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full text-white font-medium text-sm mb-6">
              Get in Touch
            </h5>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We'd Love to Hear From You
            </h1>
            <p className="text-green-100 text-lg">
              Have questions about our courses, enrollment, or want to request a callback? Our team is here to help with anything you need.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Our support team is available from Monday to Saturday, 9am to 6pm.
              </p>
              <a 
                href="tel:+11234567890" 
                className="text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                +1 (123) 456-7890
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a 
                href="mailto:info@sititech.com" 
                className="text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                info@sititech.com
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Come in for a tour of our state-of-the-art facilities.
              </p>
              <address className="not-italic text-green-600 font-medium">
                123 Tech Avenue, Manhattan, <br />
                New York, NY 10001, USA
              </address>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. Your journey towards tech excellence could start with this message!
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input 
                      type="text" 
                      id="name" 
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
                      className="form-input"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="form-input"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject*
                    </label>
                    <select 
                      id="subject" 
                      className="form-input"
                      required
                    >
                      <option value="">Select a Subject</option>
                      <option value="course-inquiry">Course Inquiry</option>
                      <option value="admission">Admission Process</option>
                      <option value="payment">Payment & Fees</option>
                      <option value="placement">Placement Assistance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="form-input"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-green-600 hover:text-green-700">Privacy Policy</a> and consent to the processing of my personal data.
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full md:w-auto"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="relative lg:mt-10">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-bold mb-4">Campus Hours</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block font-medium">Monday - Friday</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block font-medium">Saturday</span>
                      <span className="text-gray-600">9:00 AM - 3:00 PM</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block font-medium">Sunday</span>
                      <span className="text-gray-600">Closed</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-600 rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Global Locations</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block font-medium">New York (Headquarters)</span>
                      <address className="not-italic text-green-100">
                        123 Tech Avenue, Manhattan, <br />
                        New York, NY 10001, USA
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block font-medium">San Francisco</span>
                      <address className="not-italic text-green-100">
                        456 Innovation Drive, <br />
                        San Francisco, CA 94107, USA
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block font-medium">London</span>
                      <address className="not-italic text-green-100">
                        789 Digital Lane, <br />
                        London, EC2A 4NE, UK
                      </address>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-white hover:text-green-100 font-medium"
                  >
                    <Globe className="mr-2 h-5 w-5" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us on the Map</h2>
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2276982107843!2d-73.98784012428444!3d40.75718557138725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab0c6b7!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1716070694452!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SITI Campus Map"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">What are your customer support hours?</h3>
                <p className="text-gray-600">
                  Our customer support team is available Monday through Friday from 9:00 AM to 6:00 PM, and Saturday from 9:00 AM to 3:00 PM (Eastern Time). We are closed on Sundays and public holidays.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">How can I schedule a campus tour?</h3>
                <p className="text-gray-600">
                  You can schedule a campus tour by calling our office at +1 (123) 456-7890, emailing us at info@sititech.com, or filling out the contact form on this page. Tours are available during regular business hours.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">How long does it take to get a response to my inquiry?</h3>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our customer support line for immediate assistance.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer online consultations?</h3>
                <p className="text-gray-600">
                  Yes, we offer free online consultations via Zoom or Google Meet for those who cannot visit our campus in person. You can schedule an online consultation through our contact form or by calling our office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;