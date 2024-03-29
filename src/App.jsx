import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeNavbar from "./components/Navigations/HomeNavbar";
import ProjectNavbar from "./components/Navigations/ProjectNavbar";
import BlogNavbar from "./components/Navigations/BlogNavbar";
import AboutNavbar from "./components/Navigations/AboutNavbar";
import ContactNavbar from "./components/Navigations/ContactNavbar";
import AllHome from "./components/Home page/AllHome";
import Footer from "./components/Home page/Footer";
import ProjectMain from "./components/Project Page/ProjectMain";
import BlogBody from "./components/Blog Page/BlogBody";
import AboutMain from "./components/About Page/AboutMain";
import ServiceMain from "./components/Service Page/ServiceMain";
import ContactBody from "./components/Contact Page/ContactBody";
import ScrollToTop from "./components/ScrollToTop";

import "./App.scss";
import NoPage from "./components/No Page/NoPage";

function App() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    function handleScroll(event) {
      if (openModal) {
        event.preventDefault();
        event.stopPropagation();
      }
    }

    if (openModal) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openModal]);
  return (
    <BrowserRouter>
     <ScrollToTop />
      {/* Conditionally render different navigation bars based on the current route */}
      <Routes>
        <Route
          path="/"
          element={
            <HomeNavbar openModal={openModal} setOpenModal={setOpenModal} />
          } // Render HomeNavbar for all routes
        />
        <Route
          path="/project/*"
          element={
            <ProjectNavbar openModal={openModal} setOpenModal={setOpenModal} />
          } // Render ProjectNavbar for project routes
        />
        <Route
          path="/blogs/*"
          element={
            <BlogNavbar openModal={openModal} setOpenModal={setOpenModal} />
          } // Render BlogNavbar for blog routes
        />
        <Route
          path="/about/*"
          element={
            <AboutNavbar openModal={openModal} setOpenModal={setOpenModal} />
          } // Render AboutNavbar for about routes
        />
        <Route
          path="/contact/*"
          element={
            <ContactNavbar openModal={openModal} setOpenModal={setOpenModal} />
          } // Render ContactNavbar for contact routes
        />

<Route
          path="/*"
          element={
            <ProjectNavbar openModal={openModal} setOpenModal={setOpenModal} />
          } // Render ContactNavbar for * routes
        />
      </Routes>

      {/* Render page content based on routes */}
      <Routes>
        <Route
          index
          element={
            <AllHome openModal={openModal} setOpenModal={setOpenModal} />
          }
        />
        <Route path="/project" element={<ProjectMain />} />
        <Route path="/blogs" element={<BlogBody />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/contact" element={<ContactBody />} />
        <Route path="/service" element={<ServiceMain />} />
        <Route path="*" element={<NoPage/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
