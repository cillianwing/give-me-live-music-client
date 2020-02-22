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
      <strong className="white-text"><MDBIcon fab icon="connectdevelop" /> Music Time!</strong>
    </MDBNavbarBrand>
    <MDBNavbarToggler onClick={toggleCollapse} />
    <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
      <MDBNavbarNav right>
        {props.loggedIn ? <TopNavLoggedIn /> : <TopNavLoggedOut />}
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
  )
}

export default TopNav;