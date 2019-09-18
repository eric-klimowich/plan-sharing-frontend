import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="main-header__title">
        <Link to="/">
          Plan Sharing
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/signup">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
