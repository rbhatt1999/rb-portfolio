import { useState } from 'react'
import MainProject from '../components/MainProject'
import styles from './Project.module.css'
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.png'
import project4 from '../assets/images/project-4.png'
import project5 from '../assets/images/project-5.png'
import project6 from '../assets/images/project-6.png'
import SingleProject from '../components/SingleProject'

export default function Project() {
  const projects = [{
    h1: 'Budget App',
    p: "Budget app is a Ruby on Rails-based app for managing financial transactions. It offers categorized lists, sign-up and login pages, and easy navigation. Users can add new categories and transactions, making it a user-friendly and efficient solution for managing finances.",
    language: ['Ruby on Rails', 'css', 'bootstrap'],
    image: `${project1}`,
    btn1: 'https://budget-6lkf.onrender.com/',
    btn2: 'https://github.com/rbhatt1999/budget-app',
  },
  {
    h1: 'Stay a While',
    p: " Stay a while is a Home Stay reservation app that lets users find their Home away from home. Reserve, delete, and create home stays with ease. The website showcases listed home stays for others to see. Features include login, home page, detailed listings, booking, adding new home stays, deleting listings, and responsive design.",
    language: ['Ruby on Rails', 'css', 'bootstrap'],
    image: `${project2}`,
    btn1: 'https://stay-a-while-front-end.vercel.app/',
    btn2: 'https://github.com/rbhatt1999/stay-a-while-front-end',
  },
  {
    h1: 'Recipe App',
    p: 'The Recipe app enables you to manage your recipes and ingredients. You can save ingredients, monitor your stock, develop new recipes, and generate a shopping list based on what you have and what you need for a recipe. Additionally, the app emphasizes the importance of sharing recipes and provides option to make them public for everyone to access.',
    language: ['Ruby on Rails', 'css', 'bootstrap'],
    image: `${project3}`,
    btn1: 'https://recipe-app-lxw4.onrender.com/',
    btn2: 'https://github.com/rbhatt1999/recipe_app',
  },
  {
    h1: 'Space Hub',
    p: 'Space-Hub is a one-stop platform for all your space exploration needs. With our website, you can select the rocket and mission of your choice, and it will be displayed in your profile section for easy access. Built with the latest technologies such as React and Redux, Space Hub offers a seamless and intuitive experience for space enthusiasts',
    language: ['React', 'Redux', 'CSS'],
    image: `${project4}`,
    btn1: 'https://glistening-sable-cec9a6.netlify.app/',
    btn2: 'https://github.com/rbhatt1999/Space-Hub',
  },
  {
    h1: 'Finance App',
    p: 'Finance-app offers real-time stock prices and in-depth analysis for US companies. Stay informed with financial statements, earnings reports, and analyst recommendations. Make informed investment decisions with our user-friendly interface and comprehensive analysis tools. Stay on top of the stock market and take control of your financial future.',
    language: ['React', 'Redux', 'CSS'],
    image: `${project5}`,
    btn1: 'https://shiny-unicorn-daad16.netlify.app/',
    btn2: 'https://github.com/rbhatt1999/finance-app',
  },
  {
    h1: 'Math Magician',
    p: 'Math magician made with React.js is a single webpage that serves as the main entry point for a website or web application that teaches or helps users practice math. The page includes a visually appealing header, a brief introduction to the concept, Calculator, Random Quotes, and navigation links.',
    language: ['React', 'CSS', 'javascript'],
    image: `${project6}`,
    btn1: 'https://rbhatt1999.github.io/math-magician/',
    btn2: 'https://github.com/rbhatt1999/math-magician',
  },]

  const [project, setProject] = useState(projects[0])
  return (
    <div className={styles.container}>
      <div className={styles.mainProjectCOntainer}>
        <MainProject project={project} />
      </div>
      <div className = {styles.allProjectsContainer}>
          {projects.map((project, index) => (
            <SingleProject project={project} key={index} setProject={setProject} />
          ))}
        </div>
    </div>
  )
}
