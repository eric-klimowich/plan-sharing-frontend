import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {

  render() {
    return (
      <div className="profile-container">
        <h1>{this.props.user.username}</h1>
        <p>{this.props.user.bio}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
