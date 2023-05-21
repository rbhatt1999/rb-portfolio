import styles from './Tech.module.css'
import { AiFillHtml5,AiFillGitlab,AiFillGithub } from 'react-icons/ai'
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io'
import { TbBrandJavascript,TbBrandRedux } from 'react-icons/tb'
import { DiReact, DiRuby } from 'react-icons/di'
import { FaBootstrap } from 'react-icons/fa'
import { FiFramer } from 'react-icons/fi'
import { SiJest, SiPostman, SiVisualstudiocode, SiNetlify, SiPostgresql, SiRubyonrails, SiAuth0, SiHeroku } from 'react-icons/si'
import { HiOutlineColorSwatch, HiLockClosed, HiOutlineDeviceTablet  } from 'react-icons/hi'
import { BsGit,BsFillTerminalFill } from 'react-icons/bs'

export default function Tech() {
  return (
    <div className={styles.container}>
      <div className={`${styles.techContainer} ${styles.frontcontainer}`}>
        <h2>FRONT-END</h2>
        <ul>
        <li><AiFillHtml5 /> HTML</li>
          <li> <IoLogoCss3/> CSS</li>
          <li><TbBrandJavascript/> JavaScript</li>
          <li><DiReact/> React</li>
          <li><TbBrandRedux/> Redux</li>
          <li><FaBootstrap/> Bootstrap</li>
          <li><FiFramer/> FramerMotion</li>
          <li><SiJest/> Jest</li>
          </ul>
      </div>
      <div className={`${styles.techContainer} ${styles.backcontainer}`}>
        <h2>BACK-END</h2>
        <ul>
          <li><SiPostgresql/> PostgreSQL</li>
          <li><DiRuby/>Ruby</li>
          <li><SiRubyonrails/> Ruby on rails</li>
          <li><SiAuth0/> JWT</li>
          <li><HiOutlineColorSwatch/> Rwag</li>
          <li><HiLockClosed/> CanCanCan</li>
          <li><HiOutlineDeviceTablet/> Devise</li>
          <li><IoLogoNodejs/> Node.js</li>
          </ul>
      </div>
      <div className={`${styles.techContainer} ${styles.skillcontainer}`}>
        <h2>SKILLS</h2>
        <ul>
          <li><BsGit/> git</li>
          <li><AiFillGithub/> GitHub</li>
          <li><SiHeroku/> Heroku</li>
          <li> <SiNetlify/> Netlify</li>
          <li><SiPostman/> Postman</li>
          <li><SiVisualstudiocode />VS Code</li>
          <li><BsFillTerminalFill/> Terminal</li>
          <li><AiFillGitlab/> Gitlab</li>
          </ul>
      </div>  
    </div>
  )
}
