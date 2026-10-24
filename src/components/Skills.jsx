
import {
  Code2,
  Coffee,
  Database,
  Globe,
  Layers,
  GitBranch,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Coffee,
    skills: ["Java", "C++", "DSA"],
  },
  {
    title: "DSA",
    icon: Code2,
    skills: ["Data Structures", "Algorithms", "Problem Solving"], 
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    icon: Code2,
    skills: ["Spring Boot", "REST APIs", "JPA / Hibernate"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "SQL"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Maven","Visual Studio Code", "NetBeans","MySQL Workbench"],
  },
  {
    title: "Development",
    icon: Layers,
    skills: ["OOP", "CRUD", "API Testing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="eyebrow">WHAT I WORK WITH</p>
        <h2>Technical <span>Skills</span></h2>
        <p>Technologies I use to build software applications.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <div className="skill-card" key={group.title}>
              <div className="skill-title">
                <Icon />
                <h3>{group.title}</h3>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
