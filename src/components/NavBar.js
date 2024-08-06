import React from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../screenshots/logo_dark.png';

function NavBar() {
  return (
    <nav className="navbar">
      
      <div className="navitems">
        <Link to="/">Home</Link>
        <Link to="/find-a-tutor">Find a Tutor</Link>
        <Link to="/become-a-tutor">Become a Tutor</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </nav>
  );
}

export default NavBar;
