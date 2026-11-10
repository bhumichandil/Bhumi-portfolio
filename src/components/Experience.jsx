
// import { BriefcaseBusiness, GraduationCap } from "lucide-react";

// export default function Experience() {
//   return (
//     <section id="experience" className="section">
//       <div className="section-heading">
//         <p className="eyebrow">MY JOURNEY</p>
//         <h2>Experience & <span>Learning</span></h2>
//         <p>Practical experience and professional development.</p>
//       </div>

//       <div className="timeline">
//         <div className="timeline-item">
//           <div className="timeline-icon">
//             <BriefcaseBusiness />
//           </div>
//           <div className="timeline-content">
//             <p className="timeline-label">INTERNSHIP</p>
//             <h3>Java Full Stack Developer Intern</h3>
//             <h4>Amdox Technologies</h4>
//             <p>
//               Worked on task management application development
//               involving Java, Spring Boot, REST APIs and MySQL.
//             </p>
//             <div className="skill-tags">
//               <span>Java</span>
//               <span>Spring Boot</span>
//               <span>MySQL</span>
//             </div>
//           </div>
//         </div>

//         <div className="timeline-item">
//           <div className="timeline-icon">
//             <GraduationCap />
//           </div>
//           <div className="timeline-content">
//             <p className="timeline-label">EDUCATION</p>
//             <h3>B.Tech in Information Technology</h3>
//             <h4>ITM Gwalior</h4>
//             <p>
//               Developing technical knowledge through programming,
//               software development and practical projects.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import { BriefcaseBusiness, GraduationCap } from "lucide-react";

// Automatically calculate duration between two dates
function getDuration(startDate, endDate = null) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (end.getDate() < start.getDate()) {
    months--;
  }

  if (months < 1) {
    return "Less than 1 month";
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  }

  if (remainingMonths > 0) {
    parts.push(
      `${remainingMonths} ${
        remainingMonths === 1 ? "month" : "months"
      }`
    );
  }

  return parts.join(" ");
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <p className="eyebrow">MY JOURNEY</p>

        <h2>
          Experience & <span>Learning</span>
        </h2>

        <p>
          Practical experience and professional development.
        </p>
      </div>

      <div className="timeline">
        {/* Amdox Internship */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <BriefcaseBusiness />
          </div>

          <div className="timeline-content">
            <p className="timeline-label">INTERNSHIP</p>

            <h3>Java Full Stack Developer Intern</h3>
            <h4>Amdox Technologies</h4>

            <p className="timeline-date">
              Nov 2025 – Jan 2026 ·{" "}
              {getDuration("2025-11", "2026-01")}
            </p>

            <p>
              Worked on task management application development
              involving Java, Spring Boot, REST APIs and MySQL.
            </p>

            <div className="skill-tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
              <span>REST APIs</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <GraduationCap />
          </div>

          <div className="timeline-content">
            <p className="timeline-label">EDUCATION</p>

            <h3>B.Tech in Information Technology</h3>
            <h4>ITM Gwalior</h4>

            <p className="timeline-date">
              Sep 2023 – present
            </p>

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
