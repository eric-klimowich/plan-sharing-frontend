import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          Plan Sharing
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
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
