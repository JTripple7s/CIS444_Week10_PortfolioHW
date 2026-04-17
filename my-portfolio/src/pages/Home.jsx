import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

const projects = [
  {
    title: 'PageTuner',
    description:
      'Developed a Java-based library management and book recommendation application as part of a team class project.',
    tech: 'Java, Java Swing, OpenLibrary.org API',
    link: '',
    github: 'https://github.com/PageTuner/PageTuner',
  },
  {
    title: 'Game Of War',
    description:
      'Developed a simple yet engaging card game using Java and JavaFX. The game logic compares two randomly drawn cards each round,the player with the higher-value card wins the turn and earns points equal to the card’s value.The match continues until one player reaches a pre-set score threshold.',
    tech: 'Java, JavaFX',
    link: '',
    github: 'https://github.com/JTripple7s/GameOfWar',
  },
  {
    title: 'Human vs AI TTT',
    description:
      ' An interactive Tic-Tac-Toe game featuring multiple AI levels ranging from random to unbeatable.',
    tech: 'JavaScript, CSS, HTML5, Google Fonts, DOM, Minimax algorithm',
    link: 'https://jtripple7s.github.io/TicTacToe_GameWeb/',
    github: 'https://github.com/JTripple7s/TicTacToe_GameWeb',
  },
];

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element){
      element.scrollIntoView({behavior: 'smooth' });
    }
  };

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="hero-eyebrow">Computer Science Student</p>
            <h1>
              Hi, I’m <span>Joel Burlingame</span>
            </h1>
            <p className="hero-description">
              I’m an aspiring software engineer/web developer interested in building clean,
              user-friendly applications with React, Node.js, and Express.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
                </button>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}web_first_images_release.png`} //profilePic
              alt="Portrait of name"
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
            subtitle="More than just a Computer Science student"
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
            subtitle="These include class assignments I have done in the past"
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
            subtitle="You can contact me here."
          />

          <div className="contact-card">
            <p>
              <strong>Email:</strong> jtburlingame777@gmail.com
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/JTripple7s"
                target="_blank"
                rel="noreferrer"
              >
                github.com/JTripple7s
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="www.linkedin.com/in/joelburlingame777"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/joelburlingame777
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;