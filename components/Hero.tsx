import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="container hero-container animate-fade-in-up">
        <div className="hero-content">
          <h1 className="hero-title">Jinesh Rathod</h1>
          <p className="hero-tagline">AI · Machine Learning · FPGA Acceleration · Research</p>
          <div className="hero-contact glass-panel">
            <a href="tel:+919879921823" className="contact-link">
              <span className="contact-icon">📱</span> +91 98799 21823
            </a>
            <a href="mailto:jinesh.connect@gmail.com" className="contact-link">
              <span className="contact-icon">✉️</span> jinesh.connect@gmail.com
            </a>
            <a href="https://linkedin.com/in/jinesh-rathod" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-icon">💼</span> LinkedIn
            </a>
            <a href="https://github.com/JineshRathod" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-icon">🐙</span> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
