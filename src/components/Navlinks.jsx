import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navlinks({className, clickHander}) {
  return (
      <Nav className={`mr-auto ${className}`}>
        <NavLink onClick={clickHander} className="nav-link" to="/">Home</NavLink>
        <NavLink onClick={clickHander} className="nav-link" to="/about">About</NavLink>
        <NavLink onClick={clickHander} className="nav-link" to="/project">Projects</NavLink>
        <NavLink onClick={clickHander} className="nav-link" to="/tech">Technology</NavLink>
      </Nav>
  )
}
