import axios from 'axios';
import * as actions from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }
};

export const addContact = payload => dispatch => {
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', payload)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = payload => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${payload}`)
    .then(() => dispatch(actions.deleteContactSuccess(payload)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};
