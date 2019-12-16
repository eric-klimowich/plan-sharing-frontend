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

  setLocalState = () => {
    this.setState({
      username: this.props.user.username,
      bio: this.props.user.bio,
      country: this.props.user.country,
      state: this.props.user.state,
      city: this.props.user.city,
      school: this.props.user.school
    })
  }

  componentDidMount() {
    this.setLocalState()
  }

  handleHideEditProfileForm = () => {
    this.props.hideEditProfileForm()
  }

  handleChangeUserInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    if (!this.props.editProfile) {
      return <Redirect to="/profile" />
    }
    return (
      <Fragment>
        {renderNewUserForm(null, this.state, this.handleChangeUserInput)}
        <button onClick={this.handleHideEditProfileForm}>Back to Profile</button>
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
    hideEditProfileForm: () => dispatch(hideEditProfileForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
