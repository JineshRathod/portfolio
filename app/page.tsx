import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Demos from '@/components/Demos';
import Research from '@/components/Research';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="main-content">
      <Hero />
      <About />
      <Experience />
      <Research />
      <Projects />
      <Demos />
      <Skills />
      
      <footer className="footer glass-panel">
        <div className="container">
          <p>© {new Date().getFullYear()} Jinesh Rathod. All Rights Reserved.</p>
          <p className="footer-sub">AI / ML Engineer &middot; Open to Opportunities</p>
        </div>
      </footer>
    </main>
  );
}
