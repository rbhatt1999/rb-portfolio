import { useState } from 'react';
import styles from './Form.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillMediumSquare } from 'react-icons/ai';

export default function Form() {
  const [formStatus, setFormStatus] = useState(true);
  const [msgStatus, setMsgStatus] = useState(false);
  const handleSubmit = () => {
    setFormStatus(false);
    setMsgStatus(true);
  }


  return (
    <section className={styles.container}>
      <iframe name="hiddenConfirm" id="hiddenConfirm" style={{ display: 'none' }} />
      <AnimatePresence>
      {formStatus && (
        <motion.form
          exit={{ height: 0, transition: { duration: 1 } }}
         className={styles.formContainer} action="https://docs.google.com/forms/d/e/1FAIpQLScyBwHkoOVll5LwDaR17K__OZlpOpx3jA6M3iY0Vut9XghCQA/formResponse" onSubmit={handleSubmit} target="hiddenConfirm" method="post">
          <motion.input
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.2, delay: 1 } }}
          className={styles.input} type="text" id="name" name="entry.191940924" placeholder="Full name" required maxLength="30" />
          <motion.input
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.2, delay: 1.5 } }}
          className={styles.input} type="email" name="entry.104733681" id="email" placeholder="Email address" required />
          <motion.textarea
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.2, delay: 2 } }}
          className={styles.textarea} name="entry.1550334487" id="message" rows="5" maxLength="500" placeholder="Enter text here" required></motion.textarea>
          <motion.button
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.2, delay: 2.5 } }}
          className={styles.button} type="submit">Get in touch</motion.button>
        </motion.form>
      )}
      </AnimatePresence>
      {msgStatus && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
         className={styles.msgContainer}>
          <h2 className={styles.msgTitle}>Thanks for your message!</h2>
          <p>I&apos;ll get back to you as soon as possible.</p>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 3 } }}
        className={styles.homeContact}>
          <a href='https://github.com/rbhatt1999' target='_blank'><AiFillGithub className={styles.homeIcon}/></a>
          <a href='https://www.linkedin.com/in/rohitbhatt-dev/' target='_blank'><AiFillLinkedin className={styles.homeIcon}/></a>
          <a href='https://twitter.com/Rohit_Bhatt_' target='_blank'><AiOutlineTwitter className={styles.homeIcon}/></a>
          <a href='https://medium.com/@rbhatt199924' target='_blank'><AiFillMediumSquare className={styles.homeIcon}/></a>
      </motion.div>
    </section>
  )
}
