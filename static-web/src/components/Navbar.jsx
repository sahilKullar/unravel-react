import React from 'react';
import logo from '../assets/react-icon-small.png';

export default function Navbar() {
  return (
    <nav>
      <img src={logo} className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React - Project one</h4>
    </nav>
  );
}
