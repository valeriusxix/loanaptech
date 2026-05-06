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
              <Route path="/Contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/Privacy" element={<Privacy />} />
              <Route path="/Term" element={<Term />} />
              <Route path="/Faq" element={<Faq />} />
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