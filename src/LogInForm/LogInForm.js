import React, { Component } from 'react'
import {

  Link

} from 'react-router-dom'

import './LogInForm.css'

class LogInForm extends Component {
  render () {
    return (
      <div>
        <h2>Beam me in......</h2>

        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <button type="submit" onClick={this.props.handleLogIn}>  <Link to="/">Submit </Link> </button>    
        </form>
      </div>
    )
  }
}

export default LogInForm
