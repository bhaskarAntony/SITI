import { useState } from 'react';
import { Search, Clock, Tag, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the emerging technologies and methodologies that are reshaping the landscape of web development.",
    category: "Tech Trends",
    tags: ["Web Development", "JavaScript", "Frontend"],
    date: "June 12, 2025",
    author: "Michael Johnson",
    authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "From Bootcamp to Job Offer: A Success Story",
    excerpt: "Read how one of our graduates went from having zero coding experience to landing a job at a top tech company.",
    category: "Career Advice",
    tags: ["Career", "Success Story", "Job Search"],
    date: "May 28, 2025",
    author: "Sarah Williams",
    authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Building Your First AI Application with Python",
    excerpt: "A step-by-step guide to creating a simple but powerful AI application using Python and popular libraries.",
    category: "Tutorial",
    tags: ["Python", "AI", "Machine Learning", "Tutorial"],
    date: "May 15, 2025",
    author: "David Chen",
    authorImage: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image: "https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "The Complete Guide to Cloud Computing for Beginners",
    excerpt: "Demystifying cloud computing concepts and providing a roadmap for beginners to get started in this high-demand field.",
    category: "Cloud Computing",
    tags: ["Cloud", "AWS", "Azure", "Beginners"],
    date: "May 5, 2025",
    author: "Jessica Miller",
    authorImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image: "https://images.pexels.com/photos/7567535/pexels-photo-7567535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "10 Essential DevOps Tools Every Engineer Should Know",
    excerpt: "A comprehensive overview of the most important tools that are shaping the DevOps landscape in 2025.",
    category: "DevOps",
    tags: ["DevOps", "Tools", "Automation", "CI/CD"],
    date: "April 22, 2025",
    author: "Robert Smith",
    authorImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "The Power of React: Building Modern Web Applications",
    excerpt: "Explore how React has revolutionized web development and learn how to leverage its capabilities for your projects.",
    category: "Web Development",
    tags: ["React", "JavaScript", "Frontend", "Web Development"],
    date: "April 10, 2025",
    author: "Emily Zhang",
    authorImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

// Sample categories
const categories = [
  "Tech Trends",
  "Tutorial",
  "Career Advice",
  "Web Development",
  "Cloud Computing",
  "DevOps",
  "Data Science",
  "Cybersecurity"
];

// Sample tags
const tags = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "AWS",
  "Machine Learning",
  "DevOps",
  "Frontend",
  "Backend",
  "Career"
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [activeCategory, setActiveCategory] = useState('All');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredPosts(activeCategory === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === activeCategory)
      );
    } else {
      const filtered = blogPosts.filter(post => {
        const matchesSearch = 
          post.title.toLowerCase().includes(term.toLowerCase()) || 
          post.excerpt.toLowerCase().includes(term.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()));
        
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        
        return matchesSearch && matchesCategory;
      });
      setFilteredPosts(filtered);
    }
  };

  const filterByCategory = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'All') {
      setFilteredPosts(searchTerm.trim() === '' 
        ? blogPosts 
        : blogPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
          )
      );
    } else {
      const filtered = blogPosts.filter(post => {
        const matchesCategory = post.category === category;
        
        const matchesSearch = searchTerm.trim() === '' || 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        return matchesCategory && matchesSearch;
      });
      setFilteredPosts(filtered);
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h5 className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full text-white font-medium text-sm mb-6">
              Our Blog
            </h5>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Latest Insights & Tutorials
            </h1>
            <p className="text-green-100 text-lg mb-10">
              Stay updated with the latest trends, tutorials, and insights from the tech industry.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-white bg-opacity-20 backdrop-blur-sm border border-green-400 border-opacity-30 rounded-full py-3 px-6 pl-12 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-green-100" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      className={`text-left w-full py-1.5 px-3 rounded-lg transition-colors ${
                        activeCategory === 'All' 
                          ? 'bg-green-100 text-green-800 font-medium' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => filterByCategory('All')}
                    >
                      All Categories
                    </button>
                  </li>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button 
                        className={`text-left w-full py-1.5 px-3 rounded-lg transition-colors ${
                          activeCategory === category 
                            ? 'bg-green-100 text-green-800 font-medium' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => filterByCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <button 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-green-100 hover:text-green-800 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-green-600 rounded-xl shadow-sm p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-green-100 mb-4">
                  Get the latest articles, tutorials, and updates delivered straight to your inbox.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-white bg-opacity-20 border border-green-400 border-opacity-30 rounded-lg py-2 px-4 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    required
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-white text-green-700 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              {filteredPosts.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="relative h-80">
                      <img 
                        src={filteredPosts[0].image} 
                        alt={filteredPosts[0].title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white text-sm font-medium py-1 px-3 rounded-full">
                          {filteredPosts[0].category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <img 
                          src={filteredPosts[0].authorImage} 
                          alt={filteredPosts[0].author} 
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <h4 className="font-medium">{filteredPosts[0].author}</h4>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{filteredPosts[0].date}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{filteredPosts[0].title}</h3>
                      <p className="text-gray-600 mb-4">{filteredPosts[0].excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {filteredPosts[0].tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div>
                        <Link 
                          to="/blog" 
                          className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                        >
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Recent Posts */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
                
                {filteredPosts.length === 0 ? (
                  <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                    <h3 className="text-xl font-bold mb-2">No articles found</h3>
                    <p className="text-gray-600">
                      Try adjusting your search or filter criteria to find what you're looking for.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.slice(1).map((post) => (
                      <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-medium py-1 px-2 rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-gray-500 text-sm mb-2">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <img 
                                src={post.authorImage} 
                                alt={post.author} 
                                className="w-8 h-8 rounded-full object-cover mr-2"
                              />
                              <span className="text-sm font-medium">{post.author}</span>
                            </div>
                            <Link 
                              to="/blog" 
                              className="text-green-600 hover:text-green-700"
                            >
                              <ArrowRight className="h-5 w-5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Pagination */}
                {filteredPosts.length > 0 && (
                  <div className="mt-12 flex justify-center">
                    <nav className="inline-flex">
                      <button className="flex items-center justify-center w-10 h-10 rounded-l-lg border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="flex items-center justify-center w-10 h-10 border-t border-b border-gray-300 bg-green-50 text-green-600 font-medium">
                        1
                      </button>
                      <button className="flex items-center justify-center w-10 h-10 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                        2
                      </button>
                      <button className="flex items-center justify-center w-10 h-10 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                        3
                      </button>
                      <button className="flex items-center justify-center w-10 h-10 rounded-r-lg border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;