import styles from './Contacts.module.css';

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <li>
      <span>{name} : </span>
      <span>{number}</span>
      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
