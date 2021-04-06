index.js

import React from 'react';
import ReactDOM from 'react-dom';
import {add, sub, div, mult} from './Calc' ;

ReactDOM.render(
<>
<ul>
    <li>Addition is - {add(40,6)}</li>
    <li>Subtraction is - {sub(40,6)}</li>
    <li>Division is - {div(40,6)}</li>
    <li>Multiplication is - {mult(40,6)}</li>
</ul>
</>
,document.getElementById('root')
);

/* 
whene we use import statement for import multiple function,
so we use - import  {function name ,function name} from './filename';  
in this case word by word same letter is important. 
note - if you not use file name  then you get error message failede to compile
note - also use {function name (value 1, value 2)} when you using fuction for calculation . eg <li> {div(40,6) </li>
*/


Calc.jsx

/*
In this code import multiple function in single export statement.
1. we create simple function ,then we create element like sum,minus,divison,multiplication,
that can be use for store the value of that 2 veriable. that element can be use in this file only 
that can be Calc.jsx
2.function name must be imp for importing other file ,so make sure give name carefully.
3.also use that function name in main file that can be index.js ( if you not use that
  function name in main file so we given error )

 */


function add(a,b){
    let sum=a+b;
    return sum;
}

function sub(a,b){
    let minus=a-b;
    return minus;
}

function div(a,b){
    let division=a/b;
    return division;
}

function mult(a,b){
    let multiplication=a*b;
    return multiplication;
}

export {add, sub, div, mult};

/*
 Whene we use export , for multiple functon can be export one time ,
 so that time we use function name with { function name,function name ,function name}; 
 with divided by , quama.
*/
