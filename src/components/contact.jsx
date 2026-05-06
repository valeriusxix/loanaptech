import React, { useState } from "react";
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (error) setError('');
        if (success) setSuccess(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        // Validation
        if (!formData.name.trim()) {
            setError('Please enter your name');
            return;
        }

        if (!formData.email.trim()) {
            setError('Please enter your email');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (!formData.message.trim()) {
            setError('Please enter a message');
            return;
        }

        if (formData.message.trim().length < 10) {
            setError('Message must be at least 10 characters long');
            return;
        }

        setLoading(true);

        // Simulate API call (replace with actual endpoint when available)
        setTimeout(() => {
            console.log('Form submitted with data:', formData);
            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setLoading(false);

            // Clear success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000);
        }, 1000);
    };

    return (
        <div className="contact">
            {/* Header section */}
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>We're here to help! Reach out anytime.</p>
            </div>

            <div className="contact-content">
                {/* Contact information sidebar */}
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p><strong>Email:</strong> <a href="mailto:support@loanapp.com">support@loanapp.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                    <p><strong>Hours:</strong> Mon-Fri, 9AM-5PM EST</p>
                </div>

                {/* Contact form */}
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        {error && <div className="error-message" role="alert">{error}</div>}
                        {success && <div className="success-message" role="alert">Thank you for contacting us! We'll get back to you soon.</div>}
                        
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                aria-label="Your name"
                                aria-describedby="name-help"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                aria-label="Your email address"
                                aria-describedby="email-help"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                aria-label="Your message"
                                aria-describedby="message-help"
                                rows="5"
                            />
                            <small id="message-help">Minimum 10 characters</small>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            aria-busy={loading}
                        >
                            {loading ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
