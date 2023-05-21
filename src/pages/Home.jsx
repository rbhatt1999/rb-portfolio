import { useEffect, useState } from 'react'
import style from './Home.module.css'
import pic from '../assets/images/homepageimage.png'
import { motion } from 'framer-motion'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillMediumSquare } from 'react-icons/ai'

export default function Home() {
  const state = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Software Developer'];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => {
        if (index === state.length - 1) {
          return 0;
        } else {
          return index + 1;
        }
      });
    }, 4005);
    return () => clearInterval(interval);
  }, [state.length]);
  return (
    <div className={style.homeContainer}>
      <div className={style.homeContent}>
        <h1 className={style.homeTitle}>Hey There. I&apos;m Rohit</h1>
        <h2 className={style.homeText}>I&apos;m a<span> {state[index]} </span></h2>
        <p>I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
        <div className={style.homeContact}>
          <a href='https://github.com/rbhatt1999'><AiFillGithub className={style.homeIcon}/></a>
          <a href='https://www.linkedin.com/in/rohitbhatt-dev/'><AiFillLinkedin className={style.homeIcon}/></a>
          <a href='https://twitter.com/Rohit_Bhatt_'><AiOutlineTwitter className={style.homeIcon}/></a>
          <a href='https://medium.com/@rbhatt199924'><AiFillMediumSquare className={style.homeIcon}/></a>
        </div>
      </div>
      <div className={style.imgContainer}>
      <motion.img
        initial={{ x: '500' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 30, duration: 1.5 }}
       className={style.myImage} src={pic} alt="Rohit Bhatt" />
      </div>
    </div>
  )
}
