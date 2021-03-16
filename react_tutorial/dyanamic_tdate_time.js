import React from "react";
import ReactDOM from "react-dom";

const v1="vishal";
/*
const td=new Date().getDate();
it can be return only date that can be 10,12,13  like this,
but if you use .toLocaleDateString() then you get Proper Date Like 10 jan 2021,
& .toLocaleTimeString() then you get current time in dynamic condition
*/
const td=new Date().toLocaleDateString();
const tt=new Date().toLocaleTimeString();

ReactDOM.render(
    <>
    <h1>MY NAME IS {v1}</h1>
    <p>TODAY DATE IS {td}</p>
    <p>CURRENT TIME IS {tt}</p>
    </>
    ,document.getElementById("root")
);
