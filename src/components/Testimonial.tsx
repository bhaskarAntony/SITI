import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
  company?: string;
  companyLogo?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  comment,
  rating,
  image,
  company,
  companyLogo,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full flex flex-col">
      {/* Rating */}
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Comment */}
      <div className="mb-6 flex-grow">
        <p className="text-gray-700 italic">{comment}</p>
      </div>
      
      {/* Person */}
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <div className="flex items-center">
            <p className="text-sm text-gray-600">{role}</p>
            {company && (
              <>
                <span className="mx-2 text-gray-400">|</span>
                <div className="flex items-center">
                  {companyLogo && (
                    <img
                      src={companyLogo}
                      alt={company}
                      className="h-4 mr-1"
                    />
                  )}
                  <span className="text-sm text-gray-600">{company}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;