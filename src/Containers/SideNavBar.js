import React from 'react';
import { NavLink } from 'react-router-dom';


export default class SideNavBar extends React.Component {
  render() {
    return (
      <>
      <div className="nav-container" color="white" >
        <h1 id="navbar-logo">User's SideNavBar</h1>
        <NavLink to="/dashboard" exact><li className="nav-links">My Dashboard/</li></NavLink>
        <NavLink to="/clients" exact><li className="nav-links">My Clients/</li></NavLink>
      </div>
      </>
    )
  }
}