import sitIdle from "../../assets/mason/mazin_sit_idle.png";
import wave from "../../assets/mason/mazin_wave_2.png";
import "./Homepage.css";

interface Project {
  name: string;
  description: string;
  github: string;
  site?: string;
}

const projects: Project[] = [
  { name: "EvoStrategy", description: "A platform for turning ambitious ideas into deliberate, actionable strategy.", github: "https://github.com/mason-san" },
  { name: "Attendance Calculator", description: "A simple web app to calculate attendance percentage and see how many classes can be missed.", github: "https://github.com/mason-san/Attendance-Calculator", site: "attendance-calculator-tau.vercel.app" },
  { name: "JobLeveling", description: "AI-powered resume matcher using semantic similarity to evaluate resumes against job descriptions.", github: "https://github.com/mason-san/JobLeveling" },
];

export default function Homepage() {
  return (
    <main>
      <section id="about" className="section about-section" aria-labelledby="about-title">
        <div className="content">
          <p className="eyebrow">About</p>
          <h1 id="about-title">Hi, I&apos;m Mazin.</h1>
          <div className="intro"><p>Student</p><p>AI Engineer.<br />Builder.<br /></p></div>
          <div className="currently">
            <p className="section-label">Currently</p>
            <ul><li>Building EvoStrategy</li><li>Exploring AI + Web Dev</li></ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section" aria-labelledby="projects-title">
        <div className="content">
          <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2 id="projects-title">Projects</h2></div><img className="section-mason" src={sitIdle} alt="" /></div>
          <div className="item-list">
            {projects.map((project) => (
              <article className="list-item" key={project.name}>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-links">
                  {project.site && (
                    <a href={project.site.startsWith("http") ? project.site : `https://${project.site}`} target="_blank" rel="noreferrer">
                      Website <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section" aria-labelledby="contact-title">
        <div className="content">
          <img className="contact-mason" src={wave} alt="Mason waving" />
          <p className="eyebrow">Get in touch</p><h2 id="contact-title">Let&apos;s build something useful.</h2>
          <div className="contact-links"><a href="https://github.com/mason-san" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href="mailto:mazinmoosa63@gmail.com">Email <span aria-hidden="true">↗</span></a><a href="#about">Resume <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    </main>
  );
}
