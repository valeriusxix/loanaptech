import React from "react";
import "./App.css";
import About from "./components/About";
import footer from "./components/footer";
import contact from "./components/contact";
import privacy from "./components/privacy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import term from "./components/term";
import faq from "./components/faq";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Signup from "./pages/signup";
import ApplyLoan from "./pages/applyloan";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ErrorBoundary from "./components/ErrorBoundary";


export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="APP">
          <Navbar />
          <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<privacy />} />
              <Route path="/term" element={<term />} />
              <Route path="/faq" element={<faq />} />
              <Route path="/applyloan" element={<ApplyLoan />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}