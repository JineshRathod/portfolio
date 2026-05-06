import React from 'react';

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item glass-panel">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-title">Research Intern — AI & FPGA Acceleration</h3>
                <h4 className="timeline-org">Space Applications Centre (SAC), ISRO · Ahmedabad</h4>
              </div>
              <div className="timeline-date">Dec 2025 – Apr 2026</div>
            </div>
            
            <div className="timeline-content">
              <div className="project-group">
                <h5 className="sub-project-title"><span className="highlight-badge">FPGA</span> ADS-B Preamble Detection</h5>
                <ul className="bullets">
                  <li>Designed a 3-layer Depthwise Separable FCN in Keras for preamble detection, achieving a Dice coefficient of 0.9885 (FP32) to 0.9871 post INT8 QAT.</li>
                  <li>Engineered a custom Vitis HLS C++ IP core with 256-bit channel-packing and fused quantization biases, achieving II = 1 at 100 MHz.</li>
                  <li>Deployed the inference accelerator on a Xilinx Zynq MPSoC, achieving 3906 ns per 4200 samples (a ~50x speedup).</li>
                  <li>Validated the hardware design on an 11 GB Software-Defined Radio (SDR) dataset, maintaining 99.95% accuracy compared to the software baseline.</li>
                </ul>
              </div>

              <div className="project-group" style={{ marginTop: '20px' }}>
                <h5 className="sub-project-title"><span className="highlight-badge">ETL</span> Payload Temperature Logger</h5>
                <ul className="bullets">
                  <li>Architected an automated Python ETL pipeline to seamlessly bridge MySQL databases and live CSV telemetry via a programmatic junction table.</li>
                  <li>Ingested time-series data into InfluxDB and built a real-time Grafana dashboard with threshold-based spike alerts, achieving an end-to-end latency of &lt; 5 seconds.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
