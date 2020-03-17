import React, { useState } from 'react'
import { MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact'
import TopNavLoggedIn from './TopNavLoggedIn';
import TopNavLoggedOut from './TopNavLoggedOut';

const TopNav = (props) => {
  const [open, setOpen] = useState(false)

  const toggleCollapse = () => {
    setOpen(!open)
  }

  return (
    <MDBNavbar color="default-color" dark expand="md">
    <MDBNavbarBrand>
      <strong className="white-text"><MDBIcon fab icon="connectdevelop" /> Sound Check! <MDBIcon fab icon="connectdevelop" /></strong>
    </MDBNavbarBrand>
    <MDBNavbarToggler onClick={toggleCollapse} />
    <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
    {props.loggedIn ? <TopNavLoggedIn handleLogout={props.handleLogout} /> : <TopNavLoggedOut />}
    </MDBCollapse>
  </MDBNavbar>
  )
}

export default TopNav;