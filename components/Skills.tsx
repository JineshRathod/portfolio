import React from 'react';

const skillGroups = [
  { label: "Languages", skills: ["Python", "C++", "SQL", "Java"] },
  { label: "ML / Deep Learning", skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "XGBoost", "LightGBM", "NumPy", "Pandas", "SciPy", "NLP", "Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "SVM", "K-Means", "PCA", "CNNs", "Transformers", "Attention Mechanisms", "BERT", "Transfer Learning", "Model Quantization (INT8/QAT)", "Pruning", "Knowledge Distillation"] },
  { label: "Generative AI & LLMs", skills: ["LangChain", "LangGraph", "LlamaIndex", "RAG", "Agentic RAG", "Prompt Engineering", "Fine-tuning (LoRA)", "Hugging Face Transformers", "Stable Diffusion", "Ollama", "Gemma", "Llama 3", "BGE Embeddings", "Cross-Encoder Reranking", "ChromaDB", "FAISS", "Pinecone", "Offline LLM Deployment", "LLM Agents"] },
  { label: "Computer Vision", skills: ["OpenCV", "YOLOv8/v11", "MediaPipe", "Image Segmentation", "Object Detection", "ResNet", "U-Net"] },
  { label: "Data Analysis & Visualisation", skills: ["Matplotlib", "Seaborn", "Plotly", "Pandas", "NumPy", "Feature Engineering", "Data Wrangling", "Statistical Analysis", "Hypothesis Testing"] },
  { label: "MLOps & Experiment Tracking", skills: ["MLflow", "Weights & Biases (W&B)", "Docker", "FastAPI", "Flask", "REST APIs", "ONNX", "TensorFlow Lite", "CUDA", "Git", "GitHub", "Linux", "n8n"] },
  { label: "Edge & Embedded AI", skills: ["FPGA Acceleration", "Vitis HLS", "AXI-Stream", "Xilinx Zynq MPSoC", "HW-SW Co-Design", "Latency Optimisation", "On-Device Inference"] },
  { label: "Databases & Vector Stores", skills: ["MySQL", "SQLite", "InfluxDB", "ChromaDB", "FAISS", "Pinecone"] },
  { label: "Cloud & Dev Tools", skills: ["Google Colab", "Hugging Face Spaces", "Kaggle", "Jupyter", "VS Code", "MATLAB", "Grafana"] }
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <h2 className="section-title">Technical Skills</h2>
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
