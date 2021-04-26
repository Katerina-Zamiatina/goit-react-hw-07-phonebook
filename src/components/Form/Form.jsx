import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/actions';
import styles from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChangeContact = e =>
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(contact);
    resetForm();
  };

  const resetForm = () => {
    setContact({ name: '', number: '' });
  };

  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      <label className={styles.label}>
        <span className={styles.label__text}>Name</span>

        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={contact.name}
          onChange={handleChangeContact}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={styles.label}>
        <span className={styles.label__text}>Number</span>

        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder="Enter number"
          value={contact.number}
          onChange={handleChangeContact}
          // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          // title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(Form);
