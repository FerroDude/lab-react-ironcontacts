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
    const randomIndex = () => {
      return Math.floor(Math.random() * (allContactsArray.length - 1 + 1));
    };
    const newContact = allContactsArray[randomIndex()];
    contactsArray = [...contactsArray, newContact];
    this.setState((currentState) => {
      return {
        contacts: contactsArray
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <button onClick={this.addRandomContact}>Add random contact</button>
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
