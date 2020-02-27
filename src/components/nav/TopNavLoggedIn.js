import React from 'react'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBNavItem, MDBNavLink } from 'mdbreact'

const TopNavLoggedIn = (props) => {
  return (
    <>
    <MDBNavItem>
      <MDBDropdown>
        <MDBDropdownToggle nav caret>
          <div className="d-none d-md-inline">Concerts</div>
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default">
          <MDBDropdownItem href="#!">Search Upcoming</MDBDropdownItem>
          <MDBDropdownItem href="#!">My Concerts</MDBDropdownItem>
          <MDBDropdownItem href="#!">Calendar View</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavItem>    
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
    </> 
  )
}

export default TopNavLoggedIn;