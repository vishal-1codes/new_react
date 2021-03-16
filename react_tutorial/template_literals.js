import React from "react";
import ReactDOM from "react-dom";

const v1="vishal";
const v2="pawar";




/* in h1 tag we use two {} for print the name ,
in h2 we use one {} with + sign operator that can be joined 
two string in one line but if you use +""+ they can not be 
print with one single line  */

/* 
template literals can not be work in vscode ,
in below example there is a '' that can be indicate 
template literals use in jsx ,
and also ${v1} , v1 is const variable.

ReactDOM.render(
    <>
    <h1> {'hi this is ${v1} ${v2}'} </h1>
    </>
    ,document.getElementById("root"));

*/

console.log('i am vishal hi i am sushil');

ReactDOM.render(
<>
<h1>hi this is {v1} {v2}</h1>   
<h2>hi this is {v1 + " " + v2}</h2>
<h3> {'i am ${5+5}'} </h3>
</>
,document.getElementById("root")
);
