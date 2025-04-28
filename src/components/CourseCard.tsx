import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  level: string;
  link: string;
  featured?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  price,
  duration,
  level,
  link,
  featured = false,
}) => {
  return (
    <div 
      className={`card group h-full flex flex-col ${
        featured ? 'border-2 border-green-500 shadow-lg' : ''
      }`}
    >
      {featured && (
        <div className="bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-tl-xl rounded-br-xl absolute top-0 right-0 z-10">
          Featured
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
          <div className="flex space-x-2">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs py-1 px-2 rounded">
              {duration}
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs py-1 px-2 rounded">
              {level}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="text-green-600 font-bold">{price}</div>
            <div className="text-gray-500 text-sm">Lifetime Access</div>
          </div>
          
          <Link 
            to={link} 
            className="flex items-center justify-between w-full text-gray-800 border-t border-gray-200 pt-4 group-hover:text-green-600 transition-colors"
          >
            <span className="font-medium">View Course Details</span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;