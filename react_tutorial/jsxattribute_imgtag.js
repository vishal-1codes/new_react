import React from 'react';
import ReactDOM from 'react-dom';

/*  jsx attribute , attribute mean if we add some element like links , onclick , name ,id on 
tag like <button> <a> <h> <div>,
if you use contantEditable attribute they you cabe be edit your text in browser,
if you have some img on your website go ' Lorem Picsum ' web site ,
<img /> self-closing tag,
we write alt attribute with img tag if you not write this then code compiler give
you warning ,
"https://picsum.photos/200/300" in this link have multiple image that can be show randomly,
if you want do sgow minium code in render() method so you can create one const var give 
that element  'link' then tat const var can be import import  {} ,
if you have to navigate page to another page just add <img> in <a> </a> so
you image can be work like link,
imp point - <a> tag hav target aatribute not alt attribute,
and <img> tag have alt attribute ,




 */

const v="Vishal";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/300/300";
const az="https://www.youtube.com/";

ReactDOM.render(
<>
<h1 contentEditable="true">Hey this is {v}</h1>
<img src={img1} alt="here are img"/>
<img src={img2} alt="here are img"/>
<a href={az} target="navigate">
<img src={img3} alt="here are img"/>
</a>
</>
,document.getElementById("root")
);
