import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Banners from './components/banners';
import About from './components/about';
import Footer from './components/footer';
import Faqs from './components/faqs';
import RecommendationApp from './components/RecommendationApp'; // Adjust path as needed
import AboutMore from './components/aboutMore'
import FaqsMore from './components/faqsMore';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/recommendations" element={<RecommendationApp />} />
          <Route path="/about" element={<AboutMore/>} />
          <Route path="/faqs" element={<FaqsMore />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

// Example Home component
function Home() {
  return (
    <>
      <Banners />
      <About />
      <Faqs />
    </>
  );
}

export default App;
