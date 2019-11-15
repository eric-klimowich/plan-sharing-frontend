import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { hideEditProfileForm } from '../actions'


class EditProfile extends Component {
  render() {
    return (
      <Fragment>
        <div>In EditProfile</div>
        <button>Back to Profile</button>
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
