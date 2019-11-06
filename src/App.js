import React from 'react';
import Message from  "./components/Message";
import TextBox from  "./components/TextBox";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {name: 'Isabella', text: 'hello!', time: '10:50'}, 
        {name: 'Maciel', text: 'hi!', time: '10:59'}, 
        {name: 'Isabella', text: 'heyyy!', time: '11:05'}
      ]
    }
  }
  render() {
    const message = this.state.messages[0];
    return (
      <main>
        <Message />
        <Message />
        <Message />
        <TextBox />
      </main>
    );
  }

}

export default App;
