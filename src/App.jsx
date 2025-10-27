import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FrostedNavbar from "./components/FrostedNavbar";

import HomePage from "./pages/HomePage";
import WorkIndex from "./pages/WorkIndex";
import DevHivePage from "./pages/work/DevHivePage";
import KaiblePage from "./pages/work/KaiblePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import KaiblePrivacyPolicy from "./pages/KaiblePrivacyPolicy";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <FrostedNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/work" element={<WorkIndex />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Dedicated app pages */}
        <Route path="/work/devhive" element={<DevHivePage />} />
        <Route path="/work/kaible" element={<KaiblePage />} />

        {/* Keep privacy route exactly where it is */}
        <Route path="/kaible-privacy" element={<KaiblePrivacyPolicy />} />

        {/* Alias: old showcase → new DevHive page */}
        <Route path="/devhive-showcase" element={<Navigate to="/work/devhive" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
