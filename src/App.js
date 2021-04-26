import './App.css';
import Container from './components/Container';
import Form from './components/Form';
import ContactsList from './components/Contacts';
import Filter from './components/Filter';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
}

export default App;
