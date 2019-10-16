import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Adapter from '../Adapter'

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="main-header__title">
        <Link to="/">
          Plan Sharing
        </Link>
      </div>
      {
        !!Adapter.getToken() ?
          <Fragment>
            <nav className="main-nav">
              <ul className="main-nav__items">
                <li className="main-nav__item">
                  <Link to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="main-nav__item">
                  <Link to="/lessons">
                    All Lessons
                  </Link>
                </li>
                <li className="main-nav__item">
                  <Link to="/profile/addlesson">
                    Add Lesson
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
          </Fragment>
          :
          <Fragment>
            <nav className="main-nav">
              <ul className="main-nav__items">
                <li className="main-nav__item">
                  <Link to="/lessons">
                    All Lessons
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
          </Fragment>
      }
    </header>
  )
}

export default Navbar
