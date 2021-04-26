import styles from './Contacts.module.css';

export const ContactItem = ({ name, number, onDelete }) => {
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
