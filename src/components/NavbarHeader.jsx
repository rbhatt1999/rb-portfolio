import React from 'react'
import { Navbar } from 'react-bootstrap'
import style from './NavbarHeader.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import Navlinks from './Navlinks'
import './navbar.css'
import logo from '../assets/images/Logo.png'

export default function NavbarHeader() {
  const [hamburger, setHamburger] = React.useState(false)
  const navbarVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      }
    },
    exit: {
      opacity: 0,
      x: "-50vw",
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    }
  }
  const hamburgerHandler = () => {
    setHamburger(!hamburger)
  }
  return (
    <Navbar className={style.navbar} bg="dark" variant="dark">
      <Navbar.Brand href="#home"><img className={style.logopng} src={logo} alt="RB" /></Navbar.Brand>
      <AnimatePresence>
        {hamburger ? (
          <>
            <motion.div
              variants={navbarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={style.navbarMobileItems}>
              <Navlinks className="mobile-screen-navbar" clickHander={hamburgerHandler} />
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
      <Navlinks className="desktop-screen-navbar" />
      <div onClick={() => setHamburger(!hamburger)} className={hamburger ? `${style.hamburger} ${style.active}` : `${style.hamburger}`}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
    </Navbar>
  )
}
