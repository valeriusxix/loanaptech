import React from 'react';
import './faq.css';

export default function Faq() {
    return(
        <div className='faq-page'>
            <div className='faq-container'>
                <h1>Frequently Asked Questions</h1>
                <p className='faq-subtitle'>Everything you need to know about our loan services.</p>
                
                <section className="faq-list" role="region" aria-labelledby="faq-heading">
                    <h2 id="faq-heading" style={{ display: 'none' }}>Loan Questions and Answers</h2>
                    
                    <details className='faq-item'>
                        <summary>How fast can I get approved?</summary>
                        <p>We process applications 24/7. Most approvals happen within minutes to a few hours, depending on document verification.</p>
                    </details>

                    <details className='faq-item'>
                        <summary>Do you check credit score?</summary>
                        <p>Yes, credit score is checked during the application process. However, we work with customers of all credit profiles.</p>
                    </details>

                    <details className='faq-item'>
                        <summary>What documents do I need?</summary>
                        <p>You will need to provide a government-issued ID, proof of income, and bank statements. These help us verify your financial stability.</p>
                    </details>

                    <details className='faq-item'>
                        <summary>Can I pay off early?</summary>
                        <p>Yes, you can pay off your loan early without any penalties. We encourage early repayment.</p>
                    </details>

                    <details className='faq-item'>
                        <summary>Is my information secure?</summary>
                        <p>Absolutely. We use industry-standard encryption and security measures to protect your personal and financial information.</p>
                    </details>

                    <details className='faq-item'>
                        <summary>What if I have bad credit?</summary>
                        <p>We understand that everyone's financial situation is unique. If you have a lower credit score, we still offer loan options that may be suitable for your needs.</p>
                    </details>
                </section>
            </div>
        </div>
    );
}
