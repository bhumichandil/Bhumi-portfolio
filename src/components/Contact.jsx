
export default function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="section-heading contact-heading">
        <p className="eyebrow">GET IN TOUCH</p>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <p>
          Looking for an aspiring software developer for your
          team or have an internship opportunity? I'd love
          to hear from you!
        </p>
      </div>

  
      <div className="contact-card">

        <div className="contact-icon">{"</>"}</div>

        <h3>Let's Start a Conversation</h3>

        <p>
          I'm open to entry-level software developer roles,
          internships and opportunities to learn, collaborate
          and contribute to real-world projects.
        </p>

       
        <div className="contact-grid">

          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bhumichandil27@gmail.com"
            className="contact-item"
          >
            <span className="contact-item-icon">✉</span>
            <div>
              <strong>Email Me ↗</strong>
              <small>bhumichandil27@gmail.com</small>
            </div>
          </a>

          <a
            href="tel:+918989415940"
            className="contact-item"
          >
            <span className="contact-item-icon">☎</span>
            <div>
              <strong>Call Me ↗</strong>
              <small>+91 89894-15940</small>
            </div>
          </a>

          <a
            href="https://github.com/bhumichandil"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-item-icon">◉</span>
            <div>
              <strong>GitHub ↗</strong>
              <small>github.com/bhumichandil</small>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/bhumi-chandil-5260b633a/"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-item-icon">in</span>
            <div>
              <strong>LinkedIn ↗</strong>
              <small>linkedin.com/in/bhumi-chandil</small>
            </div>
          </a>

        </div>
      </div>

    </section>
  );
}
