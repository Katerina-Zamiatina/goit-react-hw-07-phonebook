import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, filterContact } from './actions';

const items = createReducer(
  [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
  {
    [addContact]: (state, { payload }) =>
      state.find(contact => contact.name === payload.name)
        ? alert(`${payload.name} is already in contacts`)
        : [...state, payload],
    [deleteContact]: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  },
);

const filter = createReducer('', {
  [filterContact]: (_, action) => action.payload,
});

export default combineReducers({ items, filter });
