import React from 'react'
import { Link } from 'react-router-dom'
import ReturningUser from './ReturningUser'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="login-container">
        <ReturningUser />
        <p>or</p>
        <Link className="main-nav__item--cta" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default Home
