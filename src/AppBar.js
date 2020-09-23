import React from 'react';
import { Navbar, Nav, NavLink, NavbarBrand } from 'reactstrap';

const AppBar = () => {
    return (
        <React.Fragment>
        <Navbar dark color="primary">
        <NavbarBrand>OneMore</NavbarBrand>
        <Nav className="justify-content-end">

              <NavLink className="btn btn-outline btn-outline-light mx-3 border-0" href="/">Home</NavLink>
              <NavLink className="btn btn-outline btn-outline-light mx-3 border-0" href="/calendar">Calendar</NavLink>
              <NavLink className="btn btn-outline btn-outline-light mx-3 border-0" href="/users">Users</NavLink>
              </Nav>

        </Navbar>
        </React.Fragment>
    )
}

export default AppBar