import React from 'react'
import { MDBIcon, MDBNavItem, MDBNavLink } from 'mdbreact'

const TopNavLoggedIn = (props) => {
  return (
    <>
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