import './App.css';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Container from './components/Container';
import Form from './components/Form';
import ContactsList from './components/Contacts';
import Filter from './components/Filter';

function App({ isLoading }) {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      {isLoading && (
        <Loader type="ThreeDots" color="#818181" height={80} width={80} />
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  isLoading: state.contacts.loading,
});

export default connect(mapStateToProps, null)(App);
