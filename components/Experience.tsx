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
                <h5 className="sub-project-title"><span className="highlight-badge">FPGA</span> ADS-B Preamble Detection on FPGA</h5>
                <ul className="bullets">
                  <li>Designed a 3-layer Depthwise Separable Fully Convolutional Network (FCN, Keras/TensorFlow) for Automatic Dependent Surveillance–Broadcast (ADS-B) radio signal preamble detection — achieved Dice coefficient 0.9885 (FP32) and 0.9871 post INT8 Quantization-Aware Training (QAT), validated on an 11 GB Software-Defined Radio (SDR) dataset with 99.95% accuracy parity vs. software baseline.</li>
                  <li>Engineered a custom Vitis HLS C++ IP core with 256-bit channel packing and fused quantization biases, achieving Initiation Interval (II) of 1 at 100 MHz on Xilinx Zynq MPSoC — enabling single-cycle pipelined inference.</li>
                  <li>Deployed FPGA neural network inference accelerator completing inference in 3,906 ns per 4,200 samples — 50x speedup over software baseline via hardware-software co-design and AXI-Stream optimisation.</li>
                </ul>
              </div>

              <div className="project-group" style={{ marginTop: '20px' }}>
                <h5 className="sub-project-title"><span className="highlight-badge">ETL</span> Satellite Payload Temperature Telemetry Logger</h5>
                <ul className="bullets">
                  <li>Architected a Python Extract-Transform-Load (ETL) pipeline connecting MySQL databases with live CSV telemetry streams via a junction table, enabling real-time data synchronisation for satellite payload systems.</li>
                  <li>Ingested time-series satellite telemetry into InfluxDB and built a real-time Grafana monitoring dashboard with threshold-based spike alerts — end-to-end latency under 5 seconds.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
