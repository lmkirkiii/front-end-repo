import React, { Component } from 'react'
import {

  Link

} from 'react-router-dom'
import './LogOut.css'

class LogOut extends Component {
  render () {
    return (
      <div>
        <h2>Blast me off outta here.</h2>

        <form>
        <button type="submit" onClick={this.props.handleLogOut}>  <Link to="/signup">Blast off</Link> </button>    
        </form>
      </div>
    )
  }
}

export default LogOut
