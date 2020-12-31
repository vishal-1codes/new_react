import React from 'react';
import ReactDOM from 'react-dom';
//variable declair
const people = ['Rowe', 'Prevost', 'Gare'];
//maping variable
const peopleLis = people.map(person =>
// expression goes here:
<li>{person} </li>
);
// ReactDOM.render 
ReactDOM.render(<ul>{peopleLis}</ul>,document.getElementById('app'))
