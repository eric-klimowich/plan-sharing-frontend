import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { renderNewUserForm } from '../forms'
import { hideEditProfileForm } from '../actions'


class EditProfile extends Component {

  state = {
    username: '',
    password: '',
    bio: '',
    country: '',
    state: '',
    city: '',
    school: ''
  }

  handleHideEditProfileForm = () => {
    this.props.hideEditProfileForm()
  }

  render() {
    if (!this.props.editProfile) {
      return <Redirect to="/profile" />
    }
    return (
      <Fragment>
        {renderNewUserForm()}
        <button onClick={this.handleHideEditProfileForm}>Back to Profile</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
  editProfile: state.editProfile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideEditProfileForm: () => dispatch(hideEditProfileForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
