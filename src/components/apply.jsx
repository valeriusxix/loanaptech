import React from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./apply.css";

const Apply = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: '',
    purpose: '',
    duration: '',
    interestRate: 5
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  // Calculate payments when amount, duration, or interest rate changes
  const calculatePayments = (amount, duration, rate) => {
    if (!amount || !duration) return;
    
    const monthlyRate = (Number(rate) / 100) / 12;
    const months = Number(duration);
    const principal = Number(amount);

    if (monthlyRate === 0) {
      const monthly = principal / months;
      setMonthlyPayment(monthly.toFixed(2));
      setTotalPayment(principal.toFixed(2));
    } else {
      const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                     (Math.pow(1 + monthlyRate, months) - 1);
      const total = monthly * months;
      setMonthlyPayment(monthly.toFixed(2));
      setTotalPayment(total.toFixed(2));
    }
  };

  const handlePaymentCalculation = () => {
    calculatePayments(formData.amount, formData.duration, formData.interestRate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.amount || !formData.purpose || !formData.duration) {
      setError('Please fill in all required fields');
      return;
    }

    const amount = Number(formData.amount);
    const duration = Number(formData.duration);

    if (amount <= 0) {
      setError('Loan amount must be greater than 0');
      return;
    }

    if (duration <= 0) {
      setError('Duration must be greater than 0');
      return;
    }

    if (amount > 50000) {
      setError('Maximum loan amount is $50,000');
      return;
    }

    if (duration > 60) {
      setError('Maximum loan duration is 60 months');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/loans/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          amount: formData.amount,
          purpose: formData.purpose,
          duration: formData.duration,
          interestRate: formData.interestRate
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit loan application');
      }

      alert('Loan application submitted successfully!');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apply-container">
      <div className="apply-content">
        <h2>Apply for a Loan</h2>
        <p className="apply-subtitle">Fill out the form below to apply for a personal loan</p>

        <form onSubmit={handleSubmit}>
          {error && <div className="error-message" role="alert">{error}</div>}

          <div className="form-group">
            <label htmlFor="amount">Loan Amount ($)</label>
            <input
              id="amount"
              type="number"
              name="amount"
              placeholder="Enter loan amount (max: $50,000)"
              value={formData.amount}
              onChange={handleChange}
              min="100"
              max="50000"
              step="100"
              required
              aria-label="Loan amount in dollars"
              aria-describedby="amount-help"
            />
            <small id="amount-help">Between $100 - $50,000</small>
          </div>

          <div className="form-group">
            <label htmlFor="purpose">Loan Purpose</label>
            <select
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              aria-label="Select loan purpose"
            >
              <option value="">Select a purpose</option>
              <option value="Personal Expenses">Personal Expenses</option>
              <option value="Medical Expenses">Medical Expenses</option>
              <option value="Education">Education</option>
              <option value="Home Improvement">Home Improvement</option>
              <option value="Debt Consolidation">Debt Consolidation</option>
              <option value="Business">Business</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="duration">Loan Duration (months)</label>
            <input
              id="duration"
              type="number"
              name="duration"
              placeholder="Enter duration (max: 60 months)"
              value={formData.duration}
              onChange={handleChange}
              min="1"
              max="60"
              step="1"
              required
              aria-label="Loan duration in months"
              aria-describedby="duration-help"
            />
            <small id="duration-help">Between 1 - 60 months</small>
          </div>

          <div className="form-group">
            <label htmlFor="interestRate">Interest Rate (%)</label>
            <input
              id="interestRate"
              type="number"
              name="interestRate"
              placeholder="Interest rate"
              value={formData.interestRate}
              onChange={handleChange}
              min="0"
              max="35.99"
              step="0.01"
              aria-label="Interest rate percentage"
            />
          </div>

          <button 
            type="button" 
            className="calculate-btn"
            onClick={handlePaymentCalculation}
            disabled={!formData.amount || !formData.duration}
          >
            Calculate Payments
          </button>

          {monthlyPayment && (
            <div className="payment-summary">
              <h3>Payment Summary</h3>
              <p><strong>Monthly Payment:</strong> ${monthlyPayment}</p>
              <p><strong>Total Repayment:</strong> ${totalPayment}</p>
            </div>
          )}

          <button 
            type="submit" 
            className="apply-btn"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>

        <div className="terms-notice">
          <p>By submitting this application, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
};

export default Apply;

const Apply = () => {
  const [formData, setFormData] = useState({ /* fields */ });

  return (
    <div className="apply-container">
      {/* Form JSX */}
    </div>
  );
};

export default Apply;