import React from 'react';
import { getAllContacts } from '../Data';
import { NavLink, Outlet } from 'react-router-dom';

export default function Contacts() {
  let contactData = getAllContacts();

  return (
    <div className="contacts">
      <h1 className="title">All Contacts</h1>
      <ul className="contact-list">
        {contactData.map((contact) => {
          return (
            <li key={contact.id} className="contact-list-item">
              <NavLink state={contact.id} to={`./${contact.id}`}>
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
