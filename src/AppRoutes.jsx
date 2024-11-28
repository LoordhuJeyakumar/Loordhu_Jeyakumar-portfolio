import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProfessionalExperience from "./pages/ProfessionalExperience";
import Resume from "./pages/Resume";
import NotFoundPage from "./pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/home" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="ProfessionalExperience"
        element={<ProfessionalExperience />}
      />
      <Route path="resume" element={<Resume />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
