import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {

  render() {
    return (
      <Fragment>
        <div className="profile-container">
          <h1>{this.props.user.username}</h1>
          <p>{this.props.user.bio}</p>
        </div>
        <button>Edit Profile</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
  user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
