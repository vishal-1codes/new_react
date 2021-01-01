import React from 'react';
import ReactDOM from 'react-dom';
//import 2 statement react & react-dom
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
//print statement
ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
);
