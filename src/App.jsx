import React from 'react';
import './App.css';
import contacts from './contacts.json';

const allContactsArray = contacts.map((element) => {
  return element;
});

let contactsArray = allContactsArray.slice(0, 5);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: contactsArray
    };
  }

  addRandomContact = () => {
    const { contacts } = this.state;
    const randomIndex = () => {
      return Math.floor(Math.random() * allContactsArray.length);
    };
    const newContact = allContactsArray[randomIndex()];
    const addedArray = [...contacts, newContact];
    this.setState(() => {
      return {
        contacts: addedArray
      };
    });
  };

  sortByName = () => {
    const { contacts } = this.state;
    const sorted = contacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: sorted
    });
  };

  sortByPopularity = () => {
    const { contacts } = this.state;
    console.log('popularity');
    const sorted = contacts.sort((a, b) => {
      return a.popularity - b.popularity;
    });
    this.setState({
      contacts: sorted
    });
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    const deletedArray = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: deletedArray
    });
  };
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    {' '}
                    <img src={contact.pictureUrl} alt="Contactphoto" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={() => this.deleteContact(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
