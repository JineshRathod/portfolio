import React from 'react';

const projects = [
  {
    name: "AutoDetect AI — Vehicle Damage Detection",
    desc: "Built a YOLOv11-based deep learning system to detect scratches, dents, cracks, glass shattering, and broken lamps on vehicles. Built and annotated a full custom dataset, and implemented an end-to-end visual inference pipeline.",
    tags: ["Python", "YOLOv11", "OpenCV", "Flutter"],
    highlight: false
  },
  {
    name: "Architect AI — Generative Floor-Plan Visualizer",
    desc: "Built a generative AI system enabling architects to visualize floor-plan concepts from prompts, utilizing ResNet, U-Net, and Stable Diffusion 2.1 with CUDA acceleration.",
    tags: ["ResNet", "U-Net", "Stable Diffusion 2.1", "LoRA", "CUDA"],
    highlight: true,
    badges: ["CIS 2025 Published", "Springer LNNS SCOPUS"]
  },
  {
    name: "AI Virtual Nail Try-On",
    desc: "Engineered a Python computer vision pipeline for photorealistic virtual nail polish try-on. Utilized custom YOLOv8 nail segmentation and MediaPipe hand-pose priors for perspective-accurate overlays.",
    tags: ["Python", "YOLOv8", "MediaPipe", "OpenCV", "PyTorch"],
    highlight: false
  },
  {
    name: "GeoSpatial Site Readiness Analyzer",
    desc: "Built a full-stack platform to evaluate commercial site viability using geospatial data. Implemented a dynamic scoring engine aggregating road density, competitors, AQI, and cellular coverage using concurrent API calls.",
    tags: ["React", "FastAPI", "Python", "MapLibre", "Zustand"],
    highlight: false
  },
  {
    name: "Gesture-Based Volume Controller",
    desc: "Developed a real-time hand-gesture recognition system to control system volume via webcam using computer vision techniques and hand landmark tracking.",
    tags: ["Python", "OpenCV", "MediaPipe", "PyCaw"],
    highlight: false
  }
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
