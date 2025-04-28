import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Testimonial from './Testimonial';

const testimonials = [
  {
    name: "Jason Cooper",
    role: "Software Engineer",
    company: "Google",
    comment: "The MERN stack course completely transformed my career. I went from a junior developer to landing a role at Google. The instructors are top-notch and the curriculum is perfectly structured for job readiness.",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Sophia Martinez",
    role: "Frontend Developer",
    company: "Meta",
    comment: "I tried several online courses but none compared to SITI's Python program. The hands-on projects and personal mentorship helped me master complex concepts quickly. Highly recommended!",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Alex Johnson",
    role: "Data Scientist",
    company: "Microsoft",
    comment: "The data science track at SITI gave me all the tools I needed to transition from finance to tech. Their career services team was instrumental in helping me prepare for interviews and land my dream job.",
    rating: 4,
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Emma Williams",
    role: "Digital Marketing Specialist",
    company: "Hubspot",
    comment: "As someone with no prior marketing experience, I was amazed at how quickly I was able to grasp complex digital marketing concepts. The instructors made learning enjoyable and the hands-on projects gave me a portfolio that impressed employers.",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Ryan Chen",
    role: "DevOps Engineer",
    company: "Amazon",
    comment: "The cloud computing and DevOps course was exactly what I needed to level up my career. The curriculum is constantly updated with the latest industry practices, and the mock interviews prepared me perfectly for the real thing.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Sarah Thompson",
    role: "UX Designer",
    company: "Shopify",
    comment: "The UI/UX design track at SITI helped me build a stunning portfolio that got me noticed. The instructors provided personalized feedback that really helped me improve. The career support is outstanding!",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = testimonials.length;
  const maxIndex = Math.max(0, totalSlides - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">What Our Students Say</h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full border border-gray-300 ${
              currentIndex === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-green-50 hover:border-green-500 hover:text-green-600'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`p-2 rounded-full border border-gray-300 ${
              currentIndex >= maxIndex
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-green-50 hover:border-green-500 hover:text-green-600'
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            width: `${(totalSlides * 100) / visibleCount}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="px-3"
              style={{ width: `${100 / totalSlides}%` }}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 mx-1 rounded-full transition-all ${
              index === currentIndex ? 'bg-green-600 w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;