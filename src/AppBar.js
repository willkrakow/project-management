import React from 'react';
import { Navbar, Nav, NavLink } from 'reactstrap';

const AppBar = () => {
    return (
        <Navbar dark color="dark">
        <Nav >

              <NavLink className="btn btn-outline btn-outline-light" href="/">Home</NavLink>
              <NavLink className="btn btn-outline btn-outline-light" href="/calendar">Calendar</NavLink>
              <NavLink className="btn btn-outline btn-outline-light" href="/users">Users</NavLink>
              </Nav>

        </Navbar>
    )
}

export default AppBar