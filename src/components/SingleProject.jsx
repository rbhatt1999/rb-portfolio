import PropTypes from 'prop-types'
import styles from './SingleProject.module.css'

export default function SingleProject({ project, setProject }) {
  const clickHandler = () => {
    setProject(project)
    window.scrollTo(0,0)
  }

  return (
    <div onClick={clickHandler} className={styles.container}>
        <img src={project.image} alt={project.h1} />
    </div>
  )
}

SingleProject.propTypes = {
  project: PropTypes.object.isRequired,
  setProject: PropTypes.func.isRequired,
}