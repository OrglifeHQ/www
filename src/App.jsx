import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/About";
import Work from "./Components/Work/Work";
import Blogs from "./Components/Blogs/index";
import SingleBlog from "./Components/Blogs/SingleBlog";
<<<<<<< HEAD
import Plans from "./Components/Plans/Plans"
=======
import Contact from "./Components/Contact";
>>>>>>> d106cdf6f27f911825cdbd735955947ce9373707

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
<<<<<<< HEAD
        <Route path="/plans" element={<Plans />} />
=======
        <Route path="/contact" element={<Contact />} />
>>>>>>> d106cdf6f27f911825cdbd735955947ce9373707
      </Routes>
    </Router>
  );
}

export default App;
