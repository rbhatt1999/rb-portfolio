import styles from './Contact.module.css';
import contactimg from '../assets/images/contact-form.png'
import Form from '../components/Form';

export default function Contact() {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <img src={contactimg} alt="contact form" className={styles.image} />
    </div>
    <div className={styles.content}>
      <h1 className={styles.title}>Contact Me</h1>
      <p>I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat please get in touch.</p>
      <Form />
    </div>
    </div>
  )
}
