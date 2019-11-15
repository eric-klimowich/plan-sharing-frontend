import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { hideEditProfileForm } from '../actions'


class EditProfile extends Component {

  handleHideEditProfileForm = () => {
    this.props.hideEditProfileForm()
  }

  render() {
    if (!this.props.editProfile) {
      return <Redirect to="/profile" />
    }
    return (
      <Fragment>
        <div>In EditProfile</div>
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
