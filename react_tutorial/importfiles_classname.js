import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';

/* class keyword is reserved in React for another perpose so we can use className ,
 use css for styling your page using another page like index.css,
 use div tag for more effectiveness,
 use import keyword for styling your page eg import './__.xyz'; */
const v="Vishal";
ReactDOM.render(
<>
<h1 className="hh"> Hi this is {v}</h1>
<div className="di">
    <h2>hi  this p</h2>
    <h3>hello my name is vishal pawar</h3>
</div>
</>
,document.getElementById("root")
);

