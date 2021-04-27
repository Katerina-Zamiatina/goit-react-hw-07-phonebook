import { connect } from 'react-redux';
import { useEffect } from 'react';
import ContactItem from './ContactItem';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';

const Contacts = ({ contacts, onDeleteContact, getContacts }) => {
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(fetchContacts()),
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
