import React from 'react';
import ReactDOM from 'react-dom';
//inline style use here
const styleMe = <h1 style={{background: 'lightblue', color: 'darkred'}}>Please style me! I am so bland!</h1>;
ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);
