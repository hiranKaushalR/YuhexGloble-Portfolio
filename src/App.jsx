import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home page/Navbar";
import AllHome from "./components/Home page/AllHome";
import Footer from "./components/Home page/Footer";
import ProjectBody from "./components/Project Page/ProjectBody";
import BlogBody from "./components/Blog Page/BlogBody";
import AboutBody from "./components/About Page/AboutBody";
import ContactBody from "./components/Contact Page/ContactBody";


import "./App.scss";
import "animate.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<AllHome />} />
        <Route path="/project" element={<ProjectBody />} />
        <Route path="/blogs" element={<BlogBody />} />
        <Route path="/about" element={<AboutBody />} />
        <Route path="/contact" element={<ContactBody />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
