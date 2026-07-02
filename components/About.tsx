import React from 'react';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="section-title">Professional Summary</h2>
        <div className="glass-panel about-card">
          <p className="about-text">
            B.Tech Computer Science fresher (GLS University, 2026) with hands-on research experience in deep learning, computer vision, FPGA-based neural network acceleration, and generative AI. Research Intern at ISRO Space Applications Centre (SAC) with a peer-reviewed publication in Springer LNNS (SCOPUS-indexed). Proficient in Python, PyTorch, TensorFlow, Scikit-learn, LangGraph, RAG architectures, YOLOv8/v11, and Stable Diffusion. Delivered production-ready AI/ML models, real-time inference pipelines, MLOps workflows, and edge-deployed neural network accelerators.
          </p>
        </div>
      </div>
    </section>
  );
}
