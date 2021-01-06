import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
//here we start state
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
  }
  render() {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
}
