import React from 'react';
import ReactDOM from 'react-dom';
const people = ['Rowe', 'Prevost', 'Gare'];
const peopleLis = people.map((person, i) =>
//keys
  <li key={'person_' + i}>{person}</li>
);
// ReactDOM.render 
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
