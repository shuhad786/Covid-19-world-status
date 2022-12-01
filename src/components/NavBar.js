import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';

const Navbar = () => (
  <>
    <nav className="navBar">
      <Link to="/" className="arrow"><IoArrowBackCircle aria-label="Back Arrow" /></Link>
      <img className="navLogo" src="whoLogo.png" alt="logo WHO" />
      <h1 className="navTitle">World wide Covid-19 Status</h1>
    </nav>
  </>
);

export default Navbar;
