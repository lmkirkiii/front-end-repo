import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './NavBar.css'

class NavBar extends Component {
  render () {
    let navBarItems = [<NavItem key={1} href='/'>Talk to aliens!</NavItem>]
    if (this.props.isLoggedIn) {
      navBarItems.push(<NavItem key={2} href='/logout'>Blast off outta here</NavItem>)
    } else {
      navBarItems.push(<NavItem key={3} href='/signup'>Beam me Up</NavItem>)
      navBarItems.push(<NavItem key={4} href='/login'>Beam me In</NavItem>)
    }
    return (
      <Navbar brand='#AlienInstantMessager' className='nav' right>
        {navBarItems}
      </Navbar>
    )
  }
}

export default NavBar
