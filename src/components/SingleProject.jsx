import PropTypes from 'prop-types'
import styles from './SingleProject.module.css'
import styles2 from './MainProject.module.css'

export default function SingleProject({ project, setProject }) {
  const clickHandler = () => {
    setProject(project)
    window.scrollTo(0,0)
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={project.image} alt={project.h1} />
      </div>
      <div className={styles.textContainer}>
        <h1>{project.h1}</h1>
        <p>{project.p}</p>
        <div className={styles2.languageContainer}>
          {project.language.map((language, index) => (
            <p className={styles2.language} key={index}>{language}</p>
          ))}
        </div>
      </div>
          <button onClick={clickHandler} className={styles.btn}>See Details</button>
    </div>
  )
}

SingleProject.propTypes = {
  project: PropTypes.object.isRequired,
  setProject: PropTypes.func.isRequired,
}