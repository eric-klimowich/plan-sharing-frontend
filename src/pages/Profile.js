import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

import Modal from '../components/Modal'

class Profile extends Component {

  renderProfile = () => {
    return (
      <Fragment>
        {this.props.user ? this.renderUserInfo() : this.renderErrorMessage()}
      </Fragment>
    )
  }

  renderErrorMessage = () => {
    return (
      <h1>{this.props.user.message}</h1>
    )
  }

  renderUserInfo = () => {
    return (
      <Fragment>
      <div className="profile-container">
        <h1>{this.props.user.username}</h1>
        <p>{this.props.user.bio}</p>
      </div>
      </Fragment>
    )
  }

  render() {
    // console.log(this.props)
    return (
      <Fragment>
        {this.props.user ? this.renderProfile() : <h1>Please Login</h1>}
        <Modal />
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
