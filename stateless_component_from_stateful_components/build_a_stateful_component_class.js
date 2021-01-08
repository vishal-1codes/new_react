import React from 'react';
import ReactDOM from 'react-dom';
//we create stateful component class
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }
  render() {
    return <div></div>;
  }
}
