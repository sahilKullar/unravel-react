import React, { createContext, useState } from 'react';
import { getAllUsers } from '../components/FakeData';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const allUsers = getAllUsers();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState();
  const [user, setUser] = useState();
  let navigate = useNavigate();

  function authenticateUser(email) {
    const user = allUsers.find((user) => user.email === email);

    if (user) {
      setIsAuthenticated(true);
      setUser(user);
      navigate('/dashboard', { replace: true });
    } else {
      setError('User not found!');
    }
  }

  function signOut() {
    setIsAuthenticated(false);
    setUser();
    setError();
    navigate('/');
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, authenticateUser, error, user, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
