import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/prescription">Prescription</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;