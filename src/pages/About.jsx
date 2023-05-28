import { useState } from 'react'
import style from './About.module.css'
import pic from '../assets/images/rohit-bhatt.png'
import { Link } from 'react-router-dom'

export default function About() {
  const [professional, setprofessional] = useState(true);
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutContent}>
        <h1 className={style.aboutTitle}>About me</h1>
        <div className={style.aboutText}>
          <span className={professional ? `${style.active}` : ``} onClick={() => setprofessional(true)}>Professional</span>
          <span className={professional ? `` : `${style.active}`} onClick={() => setprofessional(false)} >Personal</span>
        </div>
        {professional ?
          (<>
            <p>Immersed in remote development, I specialize in building stunning landing pages to full-stack websites. Early delivery is my secret to success. Working across time zones, I excel in remote collaboration. As a seasoned web developer, I combine technical expertise with creative flair. From captivating designs to seamless user experiences, I conquer complex challenges with innovative solutions. Let&apos;s shape your exceptional online presence together. Explore my skills and resume below to get started on our digital journey.</p>
            <div className={style.buttonContainer}>
              <Link to="/tech" className={style.button}>Skills</Link>
              <a href="./Resume.pdf" target="_blank" rel="noreferrer" className={style.button}>Resume</a> 
            </div>
          </>)
          :
          (<>
          <p>Beyond my professional pursuits, I find solace and inspiration in the wonders of the natural world. Hiking through picturesque trails, I embrace the serenity and beauty that nature provides. Additionally, I am an avid reader, constantly seeking new literary adventures. If you&apos;re in search of a captivating novel, I highly recommend immersing yourself in the thrilling pages of &quot;The Night Circus&quot; by Erin Morgenstern. This enchanting tale will transport you to a realm of wonder and magic, captivating your imagination.</p>
          <div className={style.buttonContainer}>
              <a href="https://www.linkedin.com/in/rohitbhatt-dev/" target="_blank" className={style.button} rel="noreferrer">Connect on LinkedIn</a>
            </div>
          </>)}
      </div>
      <div className={style.imgContainer}>
        <img
          className={style.myImage} src={pic} alt="Rohit Bhatt" />
      </div>
    </div>
  )
}