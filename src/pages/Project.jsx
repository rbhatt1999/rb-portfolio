import { useState } from 'react'
import MainProject from '../components/MainProject'
import styles from './Project.module.css'
import budgetappimg from '../assets/images/Budget-app.png'

export default function Project() {
  const projects = [{
    h1: 'Budget App',
    p: "Budget app is a Ruby on Rails-based app for managing financial transactions. It offers categorized lists, sign-up and login pages, and easy navigation. Users can add new categories and transactions, making it a user-friendly and efficient solution for managing finances.",
    language: ['Ruby on Rails', 'css', 'bootstrap'],
    image: `${budgetappimg}`,
    btn1: 'https://budget-6lkf.onrender.com/',
    btn2: 'https://github.com/rbhatt1999/budget-app',
  },
  {
    h1: 'Todo list',
    p: 'A simple to-do list application that helps to organize your daily tasks and keep track of the task you have completed and the task you are yet to have completed, and deleting the completed task leaving those yet to be completed.',
    language: ['html', 'CSS', 'javascript'],
    image: './images/Project-2-2.jpg',
    btn1: 'https://rbhatt1999.github.io/todo-list/',
    btn2: 'https://github.com/rbhatt1999/todo-list',
  },]

  const [project, setProject] = useState(projects[0])
  return (
    <div className={styles.container}>
      <div className={styles.mainProjectCOntainer}>
        <MainProject project={project} />
      </div>
    </div>
  )
}
