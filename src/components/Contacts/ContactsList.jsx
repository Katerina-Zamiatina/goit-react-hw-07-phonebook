import { connect } from 'react-redux';
import { useEffect } from 'react';
import ContactItem from './ContactItem';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { getVisibleContacts } from '../../redux/contacts/selectors';

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

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(fetchContacts()),
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
