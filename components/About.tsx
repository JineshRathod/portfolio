import React from 'react';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="section-title">Career Objective</h2>
        <div className="glass-panel about-card">
          <p className="about-text">
            To contribute to cutting-edge AI/ML research and production-scale engineering teams — building intelligent, hardware-efficient systems across Embedded AI, Computer Vision, and Generative AI. Passionate about deploying robust models from edge devices to advanced NLP pipelines.
          </p>
        </div>
      </div>
    </section>
  );
}
