import React from 'react'
import { Link } from 'react-router-dom';
import { MDBNavbarNav, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBNavItem, MDBNavLink } from 'mdbreact'

const TopNavLoggedIn = (props) => {
  return (
    <>
    <MDBNavbarNav left>
      <MDBNavItem>
        <MDBNavLink className="waves-effect waves-light" to="/concerts/upcoming">
          Search Concerts
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="waves-effect waves-light" to="/user/concerts">
          My Concerts
        </MDBNavLink>
      </MDBNavItem>
    </MDBNavbarNav>
    <MDBNavbarNav right>
      <MDBNavItem>
        <MDBNavLink className="waves-effect waves-light" to="/user/profile">
          Profile <MDBIcon far icon="user-circle" />
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="waves-effect waves-light" to="/" onClick={props.handleLogout} >
          Logout
        </MDBNavLink>
      </MDBNavItem>   
    </MDBNavbarNav>
    </> 
  )
}

export default TopNavLoggedIn;