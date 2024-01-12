import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, signOut } = useContext(AuthContext);

  return (
    <div className="navbar">
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : undefined)}
        to="/"
      >
        home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : undefined)}
        to="dashboard"
      >
        dashboard
      </NavLink>
      {!isAuthenticated && (
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="login"
        >
          login
        </NavLink>
      )}

      {isAuthenticated && (
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="profile"
        >
          profile
        </NavLink>
      )}
      {isAuthenticated && (
        <button className="btn-light" onClick={() => signOut()}>
          Logout
        </button>
      )}
    </div>
  );
}
