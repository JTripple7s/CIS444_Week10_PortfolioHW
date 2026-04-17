import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

const projects = [
  {
    title: 'Task Manager App',
    description:
      'A responsive React app that lets users create, organize, and track daily tasks with a clean interface.',
    tech: 'React, JavaScript, CSS',
    link: 'https://example.com',
    github: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'Notes API',
    description:
      'An Express-based backend API for creating, reading, updating, and deleting notes using RESTful routes.',
    tech: 'Node.js, Express, JavaScript',
    link: '',
    github: 'https://github.com/yourusername/notes-api',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio built with React and React Router to showcase projects, skills, and blog writing.',
    tech: 'React, Vite, React Router, CSS',
    link: 'https://yourusername.github.io/my-portfolio/',
    github: 'https://github.com/yourusername/my-portfolio',
  },
];

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="hero-eyebrow">Computer Science Student</p>
            <h1>
              Hi, I’m <span>Your Name</span>
            </h1>
            <p className="hero-description">
              I’m an aspiring web developer interested in building clean,
              user-friendly applications with React, Node.js, and Express.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View Projects
              </a>
              <a href="#contact" className="button button-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}pngtree-gray-network-placeholder-png-image_3416659`} //profilePic
              alt="Portrait of Your Name"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <SectionTitle
            eyebrow="About Me"
            title="A little about who I am"
            subtitle="Customize this section with your major, interests, experience, and career goals."
          />

          <div className="about-grid">
            <div className="about-card">
              <h3>Background</h3>
              <p>
                I’m currently studying computer science and developing my skills
                in frontend and backend web development. I enjoy turning ideas
                into interactive digital experiences.
              </p>
            </div>

            <div className="about-card">
              <h3>Interests</h3>
              <p>
                I’m especially interested in responsive design, user experience,
                full-stack development, and building applications that solve
                real problems.
              </p>
            </div>

            <div className="about-card">
              <h3>Goals</h3>
              <p>
                My goal is to continue growing as a software developer, build a
                strong portfolio, and contribute to meaningful projects in tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Projects"
            title="Things I’ve built"
            subtitle="Include class assignments, personal projects, or even strong project ideas."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
                github={project.github}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s connect"
            subtitle="Replace these links with your real contact information."
          />

          <div className="contact-card">
            <p>
              <strong>Email:</strong> yourname@example.com
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                github.com/yourusername
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/yourusername
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;