// example of component 
import React from 'react';
import ReactDOM from 'react-dom';
 
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
// print component
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
