import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('contacts/add', contact => ({
  payload: {
    id: uuidv4(),
    name: contact.name,
    number: contact.number,
  },
}));
export const deleteContact = createAction('contacts/delete');
export const filterContact = createAction('contacts/filter');
