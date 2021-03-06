/* "react" use for jsx elements print in react code , react-dom use for render() method  that
can be print the element ( if you use jsx element they you hava import  'react' and if you use render() they you use 
react-dom  */

import React from "react";
import ReactDOM from "react-dom";

/* if we use render method that can be take single element like <h1> if you have multiple tag thene use div method */
ReactDOM.render(
[
<h1>Hello World</h1>,
<h2>hi ths is yt </h2>,
<p>for more do this course </p>
]
,document.getElementById("root"));

/*vedio 6  11-3
var h1= document.createElement("h1");
h1.innerHTML="vishal pawar";
document.getElementById("root").appendChild(h1);

var p=document.createElement("p");
p.innerHTML="hi  this is pure js";
document.getElementById("root").appendChild(p);
*/

/* video 7  14-3
if you have to print multiple element in react so they hava 2 methods ,that can be 
1. <div> / in this method you do write , quama like element,
2. [] brakets /in this type you hav to write 
     we returing element as a array of 
     element
   , quama like element. note - greater than v 16.x.x .

1
ReactDOM.render(
    <div>
    <h1> hi  </h1>
    <h2> vishal </h2>
    , document.getElementById("root"));
)

2
ReactDOM.render(
[
<h1>Hello World</h1>,
<h2>hi ths is yt </h2>,
<p>for more do this course </p>
]
,document.getElementById("root"));

*/

/*   video 8    14-3  
   <React.Fragment> </React.Fragment> or <> </> , 
   it can be help full beacause if you use <div> and [] method for print a element
   in react ,it can be create extra <div> in browser side complier so we hava
   problem with style react jsx element .
   if we use react fragment <React.Fragment> </React.Fragment> or <> </>,
   they can not create extra <div> in browser side so we can not have problem 
   with styling our react element .
   it can be faster then <div> or [] method.
   *** <> </> or [] method not create extra <div> in browser side compiler.

eg- 
ReactDOM.render(
    <React.Fragment>
    <h1>hii</h1>
    <h3>rx100</h1>
    </React.Fragment>,document.getElementById("root"));

    or 
    
ReactDOM.render(
    <>
    <h1>hii</h1>
    <h3>rx100</h1>
    </>,document.getElementById("root"));

*/

