import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LeftSide, RightSide } from './style'

const Header = () => {
  return (
    <header
      className="py-4"
      style={{
        position: "absolute",
        top: 0, zIndex: "1000",
        width: "100%"
      }}
    >
      <div className='container d-flex justify-content-between'>
        <LeftSide>
          <h3><a href="/">Hexa</a></h3>
          <nav>
            <ul>
              <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
              <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
              <li><NavLink to="/projects" activeclassname="active">Projects</NavLink></li>
              <li><NavLink to="/services" activeclassname="active">Services</NavLink></li>
              <li><NavLink to="/blog" activeclassname="active">Blog</NavLink></li>
              <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            </ul>
          </nav>
        </LeftSide>

        <RightSide>
          <Link to="/Add">Add</Link>
          <Link to="/">Colorlib</Link>
        </RightSide>
      </div>
    </header>
  )
}

export default Header