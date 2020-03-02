import React from 'react'
import { Link } from 'react-router-dom';
import { MDBNavbarNav, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBNavItem, MDBNavLink } from 'mdbreact'

const TopNavLoggedIn = (props) => {
  return (
    <>
    <MDBNavbarNav right>
      <MDBNavItem>
        <MDBNavLink className="waves-effect waves-light" to="/concerts/upcoming">
          <MDBIcon icon="search" /> Search Concerts
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="waves-effect waves-light" to="/user/concerts">
        <MDBIcon icon="icons" /> My Concerts
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="waves-effect waves-light" to="/user/profile">
        <MDBIcon far icon="user-circle" /> Profile
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="waves-effect waves-light" to="/" onClick={props.handleLogout} >
        <MDBIcon icon="sign-out-alt" /> Logout
        </MDBNavLink>
      </MDBNavItem>   
    </MDBNavbarNav>
    </> 
  )
}

export default TopNavLoggedIn;