import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import Search from './components/Search';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ContactDetails from './components/ContactDetails';
import NoMatch from './components/NoMatch';
import PageLayout from './components/PageLayout';

export default function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        {/* <Route path="/contacts" element={<Contacts />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} /> */}
        <Route path="/" element={<Home />}>
          <Route element={<PageLayout />}>
            <Route
              index
              element={<h1>Select any menu items from the navigation bar!</h1>}
            />
            <Route path="contacts" element={<Contacts />}>
              <Route path=":contactId" element={<ContactDetails />} />
            </Route>
            <Route path="search" element={<Search />}>
              <Route path=":contactId" element={<ContactDetails />} />
            </Route>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <NoMatch message="The page you're looking for is not here!" />
          }
        />
        ;
      </Routes>
    </div>
  );
}
