import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const renderLoggedInNav = handleLogout => {
  return (
    <Fragment>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <Link to="/profile">
              Profile
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/profile/my-lessons">
              My Lessons
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/lessons">
              All Lessons
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/profile/add-lesson">
              Add Lesson
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <button className="main-nav__item logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export const renderLoggedOutNav = () => {
  return (
    <Fragment>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <Link to="/lessons">
              All Lessons
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="main-nav__item--cta">
            <Link to="/signup">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}
