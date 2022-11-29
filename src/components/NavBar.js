import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <div className="brandNameBox">
      <img className="navLogo" src="planet.png" alt="logo space" />
      <h1 className="navTitle">Space Travelers Hub</h1>
    </div>
    <ul className="links">
      <NavLink className="link" to="/">Rockets</NavLink>
      <NavLink className="link" to="/missions">Missions</NavLink>
      <NavLink className="link" to="/"></NavLink>
    </ul>
  </nav>
);

export default Navbar;