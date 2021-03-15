
import React from "react";
import ReactDOM from "react-dom";

/* if we use jsx expretion, then you can use javascript inside html element using {} , 
we not use conditional statement inside the jsx expretion like if else statement ,
you can use as calculator , you create a const js variable and use in html ,
{math.random()}  print random value */

const v="vishal pawar";

/*
eg consdition statement if(3<4)
{
    console.log(true);
}
else
{
   console.log(false);
}
*/

ReactDOM.render(
<>
<p>My Name is {v}</p>
<p>ADDITION OF 3 + 4 = {3+4} </p>
<p>print random number {Math.random()} </p>

</>
,document.getElementById("root")
);
