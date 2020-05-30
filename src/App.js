import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

/*const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];*/

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state={
    messages:[
      { username: 'Amy', text: 'Hi, Jon!' }, 
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ] 
  }

  onMessage = (username, message) => {
    const newMessage = { username, text: message }
    this.setState({
      messages: [ ...this.state.messages, newMessage ]
    });
  };

  render() {
    return (
      
        <div className="container">
         {users.map((user, i)=> <ChatWindow key={i} onMessage={this.onMessage} messages={this.state.messages} username={user.username}/>)}
     	</div>
    );
  }
}

export default App;
