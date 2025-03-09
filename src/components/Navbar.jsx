import React from 'react';
import nau_logo from '../assets/nau_logo_removed_bg.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={nau_logo} alt="Logo" style={{ marginRight: '10px', height: '30px', width: 'auto' }} />
          Prayavaranshala
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about-us" end>
                    About Us
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/knowledge-library" end>
                    Knowledge Library
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/locations" end>
                    Locations
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/impact-created" end>
                    Impact Created
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contact" end>
                    Contact
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;