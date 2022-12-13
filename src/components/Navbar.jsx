import React from 'react';
import navLogo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <nav>
      <img className="nav-logo" src={navLogo} />
      <span className="nav-title">my travel journal.</span>
    </nav>
  );
}
