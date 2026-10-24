
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot"></span>
          JAVA FULL STACK DEVELOPER
        </p>

        <h1>
          Hi, I'm <span>Bhumi Chandil</span>
        </h1>

        <h2>Building solutions with Java & React.</h2>

        <p className="hero-description">
          I develop web applications using Java, Spring Boot,
          React.js and MySQL. I enjoy solving problems and
          building practical software projects.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Projects <ArrowDown size={18} />
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/bhumichandil"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn ↗
          </a>

          <a href="#contact" aria-label="Email">
            Email
          </a>
        </div>
      </div>

      <div className="hero-image-wrap">
        <div className="image-glow"></div>

        <img
          src="/profile.jpg"
          alt="Bhumi Chandil"
          className="profile-image"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="image-placeholder">
          <span>BC</span>
          <small>Add your photo as profile.jpg</small>
        </div>

      <div className="floating-card">
          <span className="floating-icon">{"</>"}</span>
        <div>
         <strong>Developer</strong>
        <small>Always building</small>
        </div>
      </div>
      </div>
    </section>
  );
}
