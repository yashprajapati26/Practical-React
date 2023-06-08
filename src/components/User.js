import PropTypes from 'prop-types'
import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>User : {this.props.render(true)}</div>
    )
  }
}
export default User