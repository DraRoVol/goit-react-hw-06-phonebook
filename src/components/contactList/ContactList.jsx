import React from 'react';
import cssModule from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContactsValue, getFilterValue } from '../../redux/actions';

const ContactList = () => {
  const contactsList = useSelector(getContactsValue);
  const filter = useSelector(getFilterValue);
  console.log(filter)
  const dispatch = useDispatch();
  const getFilteredContacts = () => {
    if (contactsList !== null) {
      const filteredContacts = contactsList.filter(contact => 
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredContacts;
    }
    return [];
  };
  const filterList = getFilteredContacts();

  return (
    <ul className={cssModule.list}>
      {filterList.map(contact => {
        return (
          <li key={contact.id} className={cssModule.item}>
            <p>
              <strong>{contact.name}:</strong> {contact.number}
            </p>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
              className={cssModule.btn}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
