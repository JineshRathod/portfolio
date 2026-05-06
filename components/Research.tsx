import React from 'react';

export default function Research() {
  return (
    <section className="section research-section" id="research">
      <div className="container animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="section-title">Research & Publications</h2>
        <div className="research-card glass-panel">
          <h3 className="research-title">Architect AI — Generative Floor-Plan Visualizer</h3>
          <p className="research-venue">Published at CIS 2025 • Indexed in Springer LNNS SCOPUS</p>
          <p className="research-desc">
            A novel generative AI system enabling architects to visualize floor-plan concepts from natural language prompts.
            The methodology utilizes ResNet, U-Net, and Stable Diffusion 2.1 fine-tuned with LoRA and accelerated using CUDA.
          </p>
          <a 
            href="https://link.springer.com/chapter/10.1007/978-3-032-18141-1_13" 
            target="_blank" 
            rel="noreferrer" 
            className="research-link-btn"
          >
            <span>📄</span> Read Research Paper
          </a>
        </div>
      </div>
    </section>
  );
}
