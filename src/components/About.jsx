
import { Code2, Database, Laptop } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <p>A little about my journey in software development.</p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h3>Turning ideas into working applications.</h3>
          <p>
            I'm Bhumi Chandil, a software development enthusiast
            interested in Java development and full-stack web
            applications.
          </p>
          <p>
            I work with Java, Spring Boot, MySQL and frontend
            technologies to build applications with useful features
            and structured code. I enjoy learning through projects
            and improving my problem-solving skills.
          </p>
          <a href="#contact" className="text-link">
            Let's connect →
          </a>
        </div>

        <div className="about-cards">
          <div className="info-card">
            <Code2 />
            <h3>Backend Development</h3>
            <p>Java, Spring Boot and REST APIs</p>
          </div>
          <div className="info-card">
            <Laptop />
            <h3>Frontend Development</h3>
            <p>HTML, CSS, JavaScript and React</p>
          </div>
          <div className="info-card">
            <Database />
            <h3>Database Management</h3>
            <p>MySQL and database integration</p>
          </div>
        </div>
      </div>
    </section>
  );
}
0