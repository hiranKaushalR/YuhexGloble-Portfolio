import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeNavbar from "./components/Navigations/HomeNavbar";
import ProjectNavbar from "./components/Navigations/ProjectNavbar";
import BlogNavbar from "./components/Navigations/BlogNavbar";
import AboutNavbar from "./components/Navigations/AboutNavbar";
import ContactNavbar from "./components/Navigations/ContactNavbar";
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
      {/* Conditionally render different navigation bars based on the current route */}
      <Routes>
        <Route
          path="/*"
          element={<HomeNavbar />} // Render HomeNavbar for all routes
        />
        <Route
          path="/project/*"
          element={<ProjectNavbar />} // Render ProjectNavbar for project routes
        />
        <Route
          path="/blogs/*"
          element={<BlogNavbar />} // Render BlogNavbar for blog routes
        />
        <Route
          path="/about/*"
          element={<AboutNavbar />} // Render AboutNavbar for about routes
        />
        <Route
          path="/contact/*"
          element={<ContactNavbar />} // Render ContactNavbar for contact routes
        />
      </Routes>

      {/* Render page content based on routes */}
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
