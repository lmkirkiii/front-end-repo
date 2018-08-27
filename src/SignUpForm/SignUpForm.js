import React, { Component } from 'react'
import {

  Link

} from 'react-router-dom'
import './SignUpForm.css'
import Greeting from '../Greeting.js'

class SignUpForm extends Component {
  render () {
    return (
      <div>
        <h2>Beam me up!</h2>

        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
       <button type="submit" onClick={this.props.handleSignUp}>  <Link to="/">Submit</Link> </button>    
          
            
        </form>
  

      </div>
    )
  }
}

export default SignUpForm
