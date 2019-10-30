import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const renderLoggedInNav = (handleResetPickedLesson, handleLogout) => {
  return (
    <Fragment>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <Link onClick={handleResetPickedLesson} to="/profile">
              Profile
            </Link>
          </li>
          <li className="main-nav__item">
            <Link onClick={handleResetPickedLesson} to="/profile/my-lessons">
              My Lessons
            </Link>
          </li>
          <li className="main-nav__item">
            <Link onClick={handleResetPickedLesson} to="/lessons">
              All Lessons
            </Link>
          </li>
          <li className="main-nav__item">
            <Link onClick={handleResetPickedLesson} to="/profile/add-lesson">
              Add Lesson
            </Link>
          </li>
          <li className="main-nav__item">
            <Link onClick={handleResetPickedLesson} to="/about">
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

export const renderLoggedOutNav = handleResetPickedLesson => {
  return (
    <Fragment>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <Link onClick={handleResetPickedLesson} to="/lessons">
              All Lessons
            </Link>
          </li>
          <li className="main-nav__item">
            <Link onClick={handleResetPickedLesson} to="/about">
              About
            </Link>
          </li>
          <li className="main-nav__item">
            <Link onClick={handleResetPickedLesson} to="/login">
              Login
            </Link>
          </li>
          <li className="main-nav__item--cta">
            <Link onClick={handleResetPickedLesson} to="/signup">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}
