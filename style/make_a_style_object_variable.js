import React from 'react';
import ReactDOM from 'react-dom';
//style object variable
const styles={
  background: 'lightblue',
  color: 'darkred'
}
//use style object variable
const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;
ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);
