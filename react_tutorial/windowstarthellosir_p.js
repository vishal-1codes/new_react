/* first we create on var curDate that can be store current time using Date() and .getHours(),
then we use if ,elase if, else statement for multiple times we show currect time with changing font color ,
then we use external css that can be help we to style  the window of output,
we create one obj that can be cssStyle , taht can be use for ccolor change effect,
if you put direct value in Date()  eg Date(2021(year),3(month),5(day),12(time)); then he show chnage of value ./  
 it we be a mini project for chnaging time with dyamic response of hello sir gm ,ge, gn,
 if if else statement we use && statement for max time and min time.
 also we use inline style
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate =new Date(2021,3,25,14);
curDate = curDate.getHours();
let greeting = '';
const cssStyle={
  
};

if(curDate >= 1 && curDate <12 ){
   greeting='Good Morning';
   cssStyle.color='green';
}else if(curDate >=12 && curDate < 19){
    greeting='Good Evening';
    cssStyle.color='yellow';
}else{
    greeting='Good Night';
    cssStyle.color='black';
}

ReactDOM.render(
    <>
    <div className='v'>
    <h1 className='s' style={{color:'white'}}>Hello Sir ,<span style={cssStyle}>{greeting}</span></h1>
    </div>
    </>
,document.getElementById('root'));
