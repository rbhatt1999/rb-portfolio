import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function Navlinks({className, clickHander}) {
  return (
      <Nav className={`mr-auto ${className}`}>
        <NavLink onClick={clickHander} className="nav-link" to="/">Home</NavLink>
        <NavLink onClick={clickHander} className="nav-link" to="/about">About</NavLink>
        <NavLink onClick={clickHander} className="nav-link" to="/project">Projects</NavLink>
        <NavLink onClick={clickHander} className="nav-link" to="/tech">Skills</NavLink>
        <NavLink onClick={clickHander} className="nav-link" to="/contact">Contact</NavLink>
      </Nav>
  )
}

Navlinks.propTypes = {
  className: PropTypes.string,
  clickHander: PropTypes.func
}