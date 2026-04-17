function ProjectCard({ title, description, tech, link, github }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
      <p className="project-tech">
        <strong>Tech:</strong> {tech}
      </p>

      <div className="project-links">
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;