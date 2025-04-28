import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import InstructorCard from './InstructorCard';

const instructors = [
  {
    name: "Dr. Michael Johnson",
    role: "Full Stack Development Lead",
    bio: "15+ years experience with MERN/MEAN stack. Former senior developer at Google and Amazon.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "Sarah Williams",
    role: "Python & Data Science Expert",
    bio: "Data scientist with expertise in ML/AI. Previously led projects at Microsoft Research.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "David Chen",
    role: "Java Development Instructor",
    bio: "Java specialist with 12+ years experience. Developed enterprise applications for Fortune 500 companies.",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Jessica Miller",
    role: "Digital Marketing Strategist",
    bio: "Marketing expert with experience at top agencies. Specializes in SEO, SEM, and social media marketing.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "#",
    website: "#"
  },
  {
    name: "Robert Smith",
    role: "Cloud & DevOps Specialist",
    bio: "AWS certified expert with extensive experience in cloud architecture and DevOps practices.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Emily Zhang",
    role: "UI/UX Design Instructor",
    bio: "Award-winning designer with experience at top tech companies and design studios.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "#",
    website: "#"
  }
];

const InstructorSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = instructors.length;
  const maxIndex = totalSlides - visibleCount;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : maxIndex));
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Meet Our Expert Instructors</h2>
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
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            width: `${(totalSlides * 100) / visibleCount}%`,
          }}
        >
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="px-3"
              style={{ width: `${100 / totalSlides}%` }}
            >
              <InstructorCard {...instructor} />
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

export default InstructorSlider;