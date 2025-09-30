import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BookSlot from './pages/BookSlot';
import Blog from './pages/Blog';
import MernStack from './pages/courses/MernStack';
import MeanStack from './pages/courses/MeanStack';
import Python from './pages/courses/Python';
import Java from './pages/courses/Java';
import DigitalMarketing from './pages/courses/DigitalMarketing';
import CloudComputing from './pages/courses/CloudComputing';
import DevOps from './pages/courses/DevOps';

function App() {
  return (
    // <Router>
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/book-slot" element={<BookSlot />} />
    //       <Route path="/blog" element={<Blog />} />
    //       <Route path="/courses/mern-stack" element={<MernStack />} />
    //       <Route path="/courses/mean-stack" element={<MeanStack />} />
    //       <Route path="/courses/python" element={<Python />} />
    //       <Route path="/courses/java" element={<Java />} />
    //       <Route path="/courses/digital-marketing" element={<DigitalMarketing />} />
    //       <Route path="/courses/cloud-computing" element={<CloudComputing />} />
    //       <Route path="/courses/devops" element={<DevOps />} />
    //     </Routes>
    //   </Layout>
    // </Router>

    <div>
      <h1>Hi Ajay Kumar 💰💰💰💰💰💰</h1>
    </div>
  );
}

export default App;
