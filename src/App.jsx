import React from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Terms from "./components/Term";
import Faq from "./components/Faq";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Apply from "./components/apply";
import Signup from "./pages/signup";
import ApplyLoan from "./pages/applyloan";


export default function APP() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="APP">
          <Navbar />
          <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/applyloan" element={<ApplyLoan />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}