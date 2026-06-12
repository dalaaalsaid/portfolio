import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>Dalaa</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <p className="tag">Hello, I’m</p>
          <h1>Dalaa Alsaid</h1>
          <h3>Computer Science Student | Full Stack Web Development Trainee</h3>
          <p>
            Aspiring Software Developer passionate about building clean,
            responsive, and user-friendly web applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-image">
         <img src="profile.jpg" alt="Dalaa Alsaid" />
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student with a strong interest in web
          development and software engineering. I enjoy learning modern
          technologies and improving my skills through practical projects.
        </p>
      </section>

      <section className="section light">
        <h2>Technologies & Tools</h2>
        <div className="grid">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Python</span>
          <span>Flask</span>
          <span>SQLite</span>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="cards">
          <div>Frontend Development</div>
          <div>Responsive Design</div>
          <div>Problem Solving</div>
          <div>Team Collaboration</div>
          <div>Clean Code Practices</div>
          <div>Basic UI/UX</div>
        </div>
      </section>

      <section id="projects" className="section light">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Digital Twin Student System</h3>
            <p>
              AI-powered academic monitoring platform that predicts student
              performance and provides personalized recommendations.
            </p>
            <span>Python • Flask • SQLite • Machine Learning</span>
          </div>

          <div className="project-card">
            <h3>Checkout Flow</h3>
            <p>
              Responsive payment checkout page with form validation and clean
              user interface.
            </p>
            <span>HTML • CSS • JavaScript</span>
          </div>

          <div className="project-card">
            <h3>Personal Portfolio Website</h3>
            <p>
              Professional React portfolio website to showcase skills,
              projects, and contact links.
            </p>
            <span>React • CSS • GitHub</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Why Companies Should Hire Me</h2>
        <div className="hire-box">
          <p>✔️ Quick learner with real project experience</p>
          <p>✔️ Passionate about clean and organized code</p>
          <p>✔️ Strong interest in frontend and full stack development</p>
          <p>✔️ Reliable, motivated, and ready to grow</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Let’s connect and build something great.</p>

        <div className="contact-links">
          <a href="https://github.com/dalaaalsaid" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/dalaa-alsaid-7b08a53b0" target="_blank">LinkedIn</a>
        </div>
      </section>

      <footer>
        <p>© 2026 Dalaa Alsaid. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;