import React, { useEffect, useState } from 'react';
import { getContact } from '../Data';
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

export default function ContactDetails() {
  // const params = useParams();
  const { contactId } = useParams();
  const [contactData, setContactData] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  // console.log('location', location);
  let navigate = useNavigate();

  useEffect(() => {
    const res = getContact(Number(contactId));
    setContactData(res);
  }, [contactId]);

  function handleClick(e) {
    e.preventDefault();
    navigate('../', { replace: true });
    // will do the same thing
    // navigate(-1);
  }

  return (
    <div className="contactDetails">
      <h2 className="subTitle">Contact Details</h2>
      {contactData ? (
        <ul className="contact">
          <ol>
            <strong>Id: </strong>
            {location.state}
          </ol>
          <ol>
            <strong>Name: </strong>
            {contactData.name}
          </ol>
          <ol>
            <strong>Number: </strong>
            {contactData.number}
          </ol>
          <ol>
            <strong>Email: </strong>
            {contactData.email}
          </ol>
          {searchParams.get('searchText') ? (
            <ol>
              <strong>Search Value: </strong>
              {searchParams.get('searchText')}
            </ol>
          ) : null}
        </ul>
      ) : (
        <span>There is no data available for given contact Id.</span>
      )}
      <button type="submit" className="back-btn" onClick={handleClick}>
        Go Back
      </button>
      {/* Note that the below code redirects the user back within a matter of seconds after clicking. */}
      {/* <Navigate to="../" replace={true} /> */}
    </div>
  );
}
