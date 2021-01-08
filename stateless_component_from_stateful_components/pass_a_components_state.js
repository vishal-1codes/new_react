import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
//import child then render child name,ReactDOM.render()
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '1k_y_c' };
  }
  render() {
    return <Child name={this.state.name} />;
  }
}
ReactDOM.render(<Parent />, document.getElementById('app'));
