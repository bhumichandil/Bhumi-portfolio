
const projects = [
  {
    number: "01",
    title: "Task Management System",
    description:
      "A task management application for organizing tasks, tracking progress and managing task-related information.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/bhumichandil/TaskManagement",
    demo: "",
  },
  {
    number: "02",
    title: "Hospital Management System",
    description:
      "A Java and MySQL application for managing hospital records and performing database CRUD operations.",
    tech: ["Java", "MySQL", "JDBC"],
    github: "https://github.com/bhumichandil/HospitalManagementSystem",
    demo: "",
  },
  {
    number: "03",
    title: "Amazon Clone",
    description:
      "A frontend practice project inspired by an e-commerce website, focused on page layout and user interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/bhumichandil/Amazone-clone",
    demo: "",
  },
  {
    number: "04",
  title: "College Management System",
  description:
    "A Java-based application developed to manage college operations, student records, faculty details, and academic information efficiently.",
  tech: ["Java", "MySQL", "JDBC"],
  github: "https://github.com/bhumichandil/College-management-System",
  demo: "",
},
{
  number: "05",
  title: "Currency Converter",
  description:
    "A web-based currency converter that allows users to convert amounts between different currencies using live exchange rates.",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/bhumichandil/currency-converter",
  demo:"",
},
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">MY RECENT WORK</p>
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p>Some applications and projects I've worked on.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  GitHub ↗
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="skill-tags">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
