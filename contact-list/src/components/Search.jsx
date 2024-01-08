import React from 'react';
import { getAllContacts } from '../Data';
import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from 'react-router-dom';

export default function Search() {
  const contactData = getAllContacts();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    let searchText = e.target.value;
    if (searchText) {
      setSearchParams({ searchText });
    } else {
      setSearchParams({});
    }
  }

  return (
    <div className="search">
      <h1 className="title">This is Search Component</h1>
      <input
        className="search-input"
        type="text"
        name="search"
        id="search"
        placeholder="Search by Contact name..."
        onChange={handleChange}
        value={searchParams.get('searchText') || ''}
      />
      <ul className="contact-list">
        {contactData
          .filter((contact) => {
            const filter = searchParams.get('searchText');
            if (!filter) return true;
            return contact.name.toLowerCase().startsWith(filter.toLowerCase());
          })
          .map((contact) => {
            return (
              <li key={contact.id} className="contact-list-item">
                <NavLink
                  // reloadDocument
                  // replace
                  state={contact.id}
                  to={`./${contact.id}${location.search}`}
                >
                  {contact.name}
                </NavLink>
                <br />
              </li>
            );
          })}
      </ul>
      <Outlet />
    </div>
  );
}
