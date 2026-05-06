import React from 'react';

const skillGroups = [
  { label: "AI / ML", skills: ["CNNs", "Generative AI", "Deep Learning", "QAT / INT8", "RFML", "Transfer Learning"] },
  { label: "Frameworks", skills: ["TensorFlow", "Keras", "TF-MOT", "PyTorch", "OpenCV"] },
  { label: "FPGA / HLS", skills: ["Vitis HLS", "Vivado", "Zynq MPSoC", "AXI-Stream", "CUDA"] },
  { label: "Programming", skills: ["Python", "C++", "Java", "C", "Dart", "JavaScript", "TypeScript", "HTML/CSS", "PHP"] },
  { label: "Data Science", skills: ["NumPy", "pandas", "SciPy", "Matplotlib", "Seaborn", "Scikit-learn", "Plotly"] },
  { label: "Web / App", skills: ["Flutter", "React", "Next.js", "FastAPI"] },
  { label: "Databases", skills: ["MySQL", "InfluxDB", "SQLite"] },
  { label: "Spoken Languages", skills: ["English (Fluent)", "Gujarati (Native)", "Hindi (Fluent)"] }
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-group glass-panel">
              <h3 className="skill-label">{group.label}</h3>
              <div className="skill-tags-container">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
