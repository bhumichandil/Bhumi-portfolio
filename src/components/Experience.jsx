
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <p className="eyebrow">MY JOURNEY</p>
        <h2>Experience & <span>Learning</span></h2>
        <p>Practical experience and professional development.</p>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <BriefcaseBusiness />
          </div>
          <div className="timeline-content">
            <p className="timeline-label">INTERNSHIP</p>
            <h3>Java Full Stack Developer Intern</h3>
            <h4>Amdox Technologies</h4>
            <p>
              Worked on task management application development
              involving Java, Spring Boot, REST APIs and MySQL.
            </p>
            <div className="skill-tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <GraduationCap />
          </div>
          <div className="timeline-content">
            <p className="timeline-label">EDUCATION</p>
            <h3>B.Tech in Information Technology</h3>
            <h4>ITM Gwalior</h4>
            <p>
              Developing technical knowledge through programming,
              software development and practical projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
