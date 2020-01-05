import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../content/Transition'

library.add(fas)

const ProjectSkill = (props) => {
    return (
      <span className="project-skill">{props.skill}</span>
    )
}

const ProjectSkills = (props) => {
    return (
      <div className="project-skills">
      {props.skills.map((skill, index) => {
        return <ProjectSkill skill={skill} key={index} />;
      })}
    </div>
    )
}

const ProjectLinks = (props) => {
  const { github, preview } = props.links

    return (
      <div>
          <div className="project-links">
              { preview && <a href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Demo <FontAwesomeIcon icon={['fas', 'desktop']}/>
              </a> }
              <a href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                <FontAwesomeIcon icon={['fab', 'github']} /> Source
              </a>
            </div>
      </div>
    )
}

const ProjectCard = (props) => {
    const { image, title, description, skills, links } = props

    return (
      <motion.div whileHover={{scale: 1.1}}>
        <div className="project-card">
        <img className="project-image" src={image} alt="project" />
        <div className="project-background" />
        <div className="project-content">
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <ProjectSkills skills={skills} />
          <ProjectLinks links={links} />
        </div>
      </div>
      </motion.div>
    )
}

const Projects = (props) => {
    const { projects } = props

    return (
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <div className="projects-container">
        {projects.map(proj => (
          <ProjectCard
            title={proj.title}
            description={proj.description}
            skills={proj.skills}
            links={proj.links}
            image={proj.image}
            key={proj.title}
          />
        ))}
      </div>
      </motion.div>
    )
}

export default Projects;