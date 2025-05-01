import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Contact } from './Contact';


const Home = React.lazy(() => import('./Components/Home'));
const About = React.lazy(() => import('./Components/About'));
const Projects = React.lazy(() => import('./Components/Projects'));
const Blog = React.lazy(() => import('./Components/Blog'));
const BlogPost = React.lazy(() => import('./Components/BlogPost')); // New Component
const Navbar = React.lazy(() => import('./Components/Navbar'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default Route */}
            <Route path="/home" element={<Home />} /> {/* Add this route */}
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic Route */}
            <Route path="*" element={<div>404 Not Found</div>} /> {/* Catch-all Route */}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
