import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch({ message }) {
  return (
    <div className="no-match">
      <h1>{message}</h1>
      <h2>Click below button to go back to the home page</h2>
      <Link to="/">Home</Link>
    </div>
  );
}
