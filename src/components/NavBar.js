import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    {/* <img className="navLogo" src="planet.png" alt="logo space" /> */}
    <h1 className="navTitle">The Brewer&apos;s Den</h1>
    <NavLink className="link" to="/">Rockets</NavLink>
    <NavLink className="link" to="/Details">Missions</NavLink>
  </nav>
);

export default Navbar;
