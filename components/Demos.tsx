import React from 'react';

const demos = [
  {
    title: "Architect AI",
    link: "https://drive.google.com/file/d/1Xpmm7IwMwOzhyBQHkHyrm4uo1-___qbA/preview"
  },
  {
    title: "AutoDetect AI",
    link: "https://drive.google.com/file/d/1crjIqCJ77X91VEQA3C-UmGYrWJq91JN7/preview"
  },
  {
    title: "AI Virtual Nail Try-On",
    link: "https://drive.google.com/file/d/1ZcuoyZRrirJi2YP0UqTB5CgIeHg_kwFZ/preview"
  },
  {
    title: "GeoSpatial Site Readiness",
    link: "https://drive.google.com/file/d/1IhDA1l9zcfbu58I4gGuj2hvYHuePoDDh/preview"
  }
];

export default function Demos() {
  return (
    <section className="section demos-section" id="demos">
      <div className="container animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h2 className="section-title">Project Demos</h2>
        <div className="demos-grid">
          {demos.map((demo, idx) => (
            <div key={idx} className="card demo-card">
              <div className="demo-header">
                <h3 className="demo-title">{demo.title}</h3>
              </div>
              <div className="demo-frame-wrapper">
                <iframe 
                  src={demo.link} 
                  className="demo-frame"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
