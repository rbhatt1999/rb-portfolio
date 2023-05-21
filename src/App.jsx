import './App.css'
import NavbarHeader from './components/NavbarHeader'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Tech from './pages/Tech'

function App() {
  return (
    <div className="app">
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="*" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
