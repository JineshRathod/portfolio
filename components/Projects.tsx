import React from 'react';

const projects = [
  {
    name: "Offline Agentic RAG — Privacy-First Document Intelligence",
    period: "May 2026 – Jun 2026",
    desc: "Engineered a 100% offline, zero-API-key Agentic RAG system with LangGraph state-machine architecture; ingests PDF, DOCX, PPTX, CSV, JSON, Markdown, and scraped URLs with smart contextual chunking. Implemented Cross-Encoder reranking pipeline (ms-marco-MiniLM-L-6-v2) over ChromaDB retrieval (top-10 overfetch → top-5 rerank), reducing hallucinations and improving answer relevance. Added implicit self-learning: system dynamically adjusts chunk confidence weights based on user follow-up tone analysis; streams responses token-by-token via FastAPI.",
    tags: ["LangGraph", "ChromaDB", "Ollama", "FastAPI", "React", "BGE Embeddings"],
    github: "https://github.com/JineshRathod/RAG",
    demo: "https://drive.google.com/file/d/18V6rUGN2KoyandWnDbUDPhwfm1oWkFxn/view",
    highlight: true,
  },
  {
    name: "Architect AI — Generative Floor-Plan Visualiser",
    period: "Sep 2025 – Dec 2025",
    desc: "Built a generative AI system enabling architects to visualise floor-plan concepts from natural language prompts using a ResNet + U-Net backbone fine-tuned with Stable Diffusion 2.1 and LoRA adapters. Accelerated inference with CUDA-optimised pipelines; published peer-reviewed research at CIS 2025, indexed in Springer LNNS SCOPUS.",
    tags: ["PyTorch", "ResNet", "U-Net", "Stable Diffusion 2.1", "LoRA", "CUDA"],
    badges: ["Springer LNNS SCOPUS"],
    github: "https://github.com/JineshRathod/ArchitechAI",
    demo: "https://drive.google.com/file/d/1Xpmm7IwMwOzhyBQHkHyrm4uo1-___qbA/view",
    highlight: true,
  },
  {
    name: "AutoDetect AI — Vehicle Damage Detection",
    period: "Oct 2025 – Nov 2025",
    desc: "Trained YOLOv11 object detection model on a custom-annotated dataset to detect vehicle damage (scratches, dents, cracks, shattered glass). Deployed end-to-end as a Flutter mobile application with real-time on-device YOLO inference pipeline.",
    tags: ["YOLOv11", "PyTorch", "OpenCV", "Flutter"],
    github: "https://github.com/JineshRathod/AutoDetect-AI-Vehicle-Damage-Detection",
    demo: "https://drive.google.com/file/d/1crjIqCJ77X91VEQA3C-UmGYrWJq91JN7/view",
  },
  {
    name: "AI Virtual Nail Try-On",
    period: "May 2026 – Jun 2026",
    desc: "Built a computer vision pipeline for photorealistic virtual nail polish try-on using YOLOv8 for nail segmentation and MediaPipe for hand pose estimation with perspective-accurate overlays.",
    tags: ["YOLOv8", "PyTorch", "MediaPipe", "OpenCV"],
    github: "https://github.com/JineshRathod/AI-Virtual-Nail-Try-On",
    demo: "https://drive.google.com/file/d/1ZcuoyZRrirJi2YP0UqTB5CgIeHg_kwFZ/view",
  },
  {
    name: "StemTape — AI Music Stem Separation Platform",
    period: "Jan 2026 – Mar 2026",
    desc: "Built and deployed a full-stack music source separation platform using Demucs to isolate vocals, drums, bass, and other stems from any audio track; live on Hugging Face Spaces with real-time inference.",
    tags: ["Demucs", "FastAPI", "React", "Hugging Face Spaces"],
    github: "https://github.com/JineshRathod/StemTape",
    live: "https://jineshrathod-stemtape.hf.space",
  },
  {
    name: "GeoSpatial Site Readiness Analyser",
    period: "Mar 2026",
    desc: "Built a full-stack geospatial analytics platform evaluating commercial site viability via a dynamic scoring engine aggregating road density, competitor proximity, Air Quality Index (AQI), and cellular coverage. Integrated MapLibre for interactive map visualisation and Zustand for client-side state management in a React + FastAPI architecture.",
    tags: ["Python", "FastAPI", "React", "MapLibre", "Zustand"],
    github: "https://github.com/JineshRathod/GeoSpatial-Site-Readiness-Analyzer",
    demo: "https://drive.google.com/file/d/1IhDA1l9zcfbu58I4gGuj2hvYHuePoDDh/view",
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className={`card project-card ${proj.highlight ? 'project-highlight' : ''}`}>
              <div className="project-content">
                <div className="project-meta">
                  {proj.period && <span className="project-period">{proj.period}</span>}
                </div>
                <h3 className="project-name">{proj.name}</h3>
                <p className="project-desc">{proj.desc}</p>

                {proj.badges && (
                  <div className="project-badges">
                    {proj.badges.map((b, i) => (
                      <span key={i} className="badge pub-badge">{b}</span>
                    ))}
                  </div>
                )}

                <div className="project-tags">
                  {proj.tags.map((t, i) => (
                    <span key={i} className="tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="project-link-btn">
                      GitHub
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="project-link-btn secondary">
                      Live App
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noreferrer" className="project-link-btn secondary">
                      Video Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
