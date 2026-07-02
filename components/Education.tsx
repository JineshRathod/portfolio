import React from 'react';

const certifications = [
  "Data Analysis with Python — Coursera",
  "Python for Everybody — Coursera",
  "Cloud IoT and Edge ML — NPTEL",
  "AI & Green Skills — Edunet Foundation",
];

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <h2 className="section-title">Education & Certifications</h2>
        <div className="education-grid">
          <div className="glass-panel education-card">
            <h3 className="education-degree">B.Tech — Computer Science & Engineering</h3>
            <p className="education-school">GLS University, Ahmedabad</p>
            <p className="education-meta">2022 – 2026 · CGPA: 7.9 / 10</p>
          </div>
          <div className="glass-panel education-card">
            <h3 className="education-degree">Certifications</h3>
            <ul className="bullets certification-list">
              {certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
