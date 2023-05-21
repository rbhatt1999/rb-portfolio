import React from 'react'
import PropTypes from 'prop-types'
import styles from './MainProject.module.css'

export default function MainProject({ project }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={project.image} alt={project.h1} />
      </div>
      <div className={styles.textContainer}>
        <h1>{project.h1}</h1>
        <p>{project.p}</p>
        <div className={styles.languageContainer}>
          {project.language.map((language) => (
            <div key={language} className={styles.language}>
              {language}
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <a href={project.btn1} target="_blank" rel="noreferrer"> Live</a>
          <a href={project.btn2} target="_blank" rel="noreferrer"> Code</a>
        </div>
      </div>
    </div>
  )
}

MainProject.propTypes = {
  project: PropTypes.shape({
    h1: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    language: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    background: PropTypes.string,
    btn1: PropTypes.string.isRequired,
    btn2: PropTypes.string.isRequired,
  }).isRequired,
}