import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    console.log(this.props)
    return (
      <Fragment>
        {this.props.user ? <h1>{this.props.user.user.username}</h1> : <h1>Please Login</h1>}
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
