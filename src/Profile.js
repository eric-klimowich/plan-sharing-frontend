import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {

  renderUserInfo = () => {
    return (
      <Fragment>
        <h1>{this.props.user.user.username}</h1>
        <p>{this.props.user.user.bio}</p>
      </Fragment>
    )
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        {this.props.user ? this.renderUserInfo() : <h1>Please Login</h1>}
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
