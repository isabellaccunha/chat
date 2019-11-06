import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div class="container">
        <img src="prof.jpg" alt="Avatar" class="right" />
        <p>Hey! I'm fine. Thanks for asking!</p>
        <span class="time-left">11:01</span>
      </div>
    );
  }
} 