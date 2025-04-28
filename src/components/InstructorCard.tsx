import { Linkedin, Twitter, Globe } from 'lucide-react';

interface InstructorCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  name,
  role,
  bio,
  image,
  linkedin,
  twitter,
  website,
}) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="relative p-6 flex flex-col items-center text-center h-full">
        <div className="relative w-28 h-28 mb-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>
        
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-green-600 font-medium mb-3">{role}</p>
        
        <p className="text-gray-600 mb-6 flex-grow">{bio}</p>
        
        <div className="flex space-x-3 mt-auto">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-500 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          
          {website && (
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-green-100 hover:text-green-600 transition-colors"
            >
              <Globe className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;