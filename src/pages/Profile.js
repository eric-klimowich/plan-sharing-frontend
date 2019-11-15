import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { showEditProfileForm } from '../actions'

class Profile extends Component {

  handleShowEditProfileForm = () => {
    this.props.showEditProfileForm()
  }

  render() {
    if (!!this.props.editProfile) {
      return <Redirect to="/profile/edit" />
    }
    return (
      <Fragment>
        <div className="profile-container">
          <h1>{this.props.user.username}</h1>
          <p>{this.props.user.bio}</p>
        </div>
        <button onClick={this.handleShowEditProfileForm}>Edit Profile</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
  user: state.user,
  editProfile: state.editProfile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showEditProfileForm: () => dispatch(showEditProfileForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
