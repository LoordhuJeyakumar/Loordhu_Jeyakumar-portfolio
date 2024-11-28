import { motion } from "framer-motion";
import projectsData from "../data/projectsData";

function Projects() {
  return (
    <div className="projects-section ps-3 ms-3 text-light-primaryText dark:text-dark-primaryText">
      <motion.hr
        className="horizontal dark border-t border-light-highlight dark:border-dark-highlight"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="project-heading text-center p-3 m-2 text-3xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>
      <div className="row p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card flex flex-col md:flex-row items-center rounded-xl border border-light-highlight shadow-light-accent p-4 m-3 dark:shadow-dark-accent dark:shadow-sm"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Details Section */}
            <motion.div
              className="project-contents col-md-6 w-full md:w-1/2"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="fw-bold text-xl font-bold">{project.title}</h3>
              <p className="text-secondary text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="tech-stacks d-flex flex-wrap justify-content-start p-2 m-2 space-x-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="badge tech-badge text-bg-warning bg-yellow-200 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100 d-flex align-items-center m-1 rounded-full px-3 py-1 text-sm flex items-center"
                  >
                    {tech.name}
                    {tech.icon && (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="ms-2 w-4 h-4"
                      />
                    )}
                  </span>
                ))}
              </div>
              <div className="d-flex justify-content-evenly mt-3 flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-light-primaryText text-light-background dark:text-dark-background dark:bg-dark-primaryText rounded-md px-3 py-2 hover:scale-105 hover:bg-light-secondaryText transition"
                >
                  <i className="fa fa-github" aria-hidden="true"></i> GitHub
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-light-accent text-light-background dark:text-dark-background dark:bg-dark-accent rounded-md px-3 py-2 hover:scale-105 hover:bg-light-accentHover dark:hover:bg-dark-accentHover transition"
                  >
                    Live Demo <i className="fa fa-globe" aria-hidden="true"></i>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Project Image Section */}
            {project.image ? (
              <motion.div
                className="col-md-6 w-full md:w-1/2 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-image-link"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded project-image shadow"
                    loading="lazy"
                  />
                </a>
              </motion.div>
            ) : (
              <div className="col-md-6 w-full md:w-1/2">
                <h3 className="fw-bold text-xl p-8 text-center">
                  {project.title}
                </h3>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
