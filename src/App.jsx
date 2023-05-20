import { useState } from 'react'
import './App.css'
import NavbarHeader from './components/NavbarHeader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Tech from './pages/Tech'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
