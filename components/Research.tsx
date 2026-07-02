import React from 'react';

export default function Research() {
  return (
    <section className="section research-section" id="research">
      <div className="container animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="section-title">Publications</h2>
        <div className="research-card glass-panel">
          <h3 className="research-title">Architect AI: Generative Floor-Plan Visualization from Natural Language Prompts</h3>
          <p className="research-venue">CIS 2025 · Springer Lecture Notes in Networks and Systems (LNNS) · SCOPUS-Indexed</p>
          <p className="research-desc">
            Co-authored peer-reviewed research on a generative AI system enabling architects to visualise floor-plan concepts from natural language prompts using ResNet, U-Net, Stable Diffusion 2.1, and LoRA fine-tuning with CUDA-accelerated inference pipelines.
          </p>
          <a
            href="https://link.springer.com/chapter/10.1007/978-3-032-18141-1_13"
            target="_blank"
            rel="noreferrer"
            className="research-link-btn"
          >
            <span>📄</span> View Publication
          </a>
        </div>
      </div>
    </section>
  );
}
