import React from "react";
import "./About.css";

const About = () => {
    return(
        <div className="about-page">
            <div className="about-container">
                <h1>About Us</h1>
                <p>
                    We are a trusted financial platform dedicated to making loans access simple, fast and transparent.
                    Our mission is to empower individuals and small businesses with financial options without the hassle of traditional banking bureaucracy.
                </p>
            </div>     
            
            <section className="features-container" aria-labelledby="features-heading">
                <h2 id="features-heading">Why Choose Us</h2>

                <article className="features">
                    <h3>Fast Approval Process</h3>
                    <p>Get decisions in minutes, not weeks.</p>
                </article>
                 
                <article className="features">
                    <h3>No Hidden Fees</h3>
                    <p>100% free to apply - no hidden charges</p>
                </article>

                <article className="features">
                    <h3>Secure & Private</h3>
                    <p>Your data is encrypted and never shared</p>
                </article>
            </section>
        </div>
    )
}

export default About;