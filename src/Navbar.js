import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

export default class Navbar extends Component {
  render() {
    return (
        <div>
        <Nav>
          <NavItem>
            <NavLink href="#">Anasayfa</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Hakkımızda</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">İletişim</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    )
  }
}
