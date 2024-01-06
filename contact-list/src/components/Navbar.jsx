import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      {/* <Link to="/contacts">Contacts</Link>
      <Link to="/search">Search</Link> */}
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Contacts
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Search
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Profile
      </NavLink>
    </div>
  );
}
