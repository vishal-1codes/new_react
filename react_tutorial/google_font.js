/* in 15 video we study the how to use google font in our website 
1. we add <link> tag in index.html where we add this tag in <head> tag 
2. then we add font-family tag in index.css in class eg v.{}
then we import index.css file in index.js eg import './index.css' */

import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
const v1='vishal';

ReactDOM.render(
<>
<h1 className="s">hii my name is  {v1} </h1>
</>
,document.getElementById('root')
);
