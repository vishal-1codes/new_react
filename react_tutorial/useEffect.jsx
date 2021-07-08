One.jsx

import React, { useEffect, useState } from 'react';

const One =()=>{
  
    const [num,setNum]=useState(0);
    const [nums,setNums]=useState(0);
    useEffect(()=>{
        alert("i am click")
        console.log("hi vishal clicked btn")
    },[nums])

    return(
        <>
        <button onClick={()=>{setNum(num+1)}}>Click me {num}</button>
        <br/>
        <button onClick={()=>{setNums(nums+1)}}>Click me {nums}</button>
        </>
    );
}

export default One;


/*
using useEffect you call function or alert when render method call that can be present in index.js file in react app
, using the useEffect you call alert message when you click the button , and also when page is load first time 
useEffect hook call and they print first time when page load first time.
also you use console.log in use useEffect when you what to print after useEffect call , any other function 
or and print statement call also you use for api call.
*/






index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './One';
//import ValiationFor from './xyz';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <One/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
