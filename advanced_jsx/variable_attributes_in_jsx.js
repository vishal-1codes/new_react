import React from 'react';
import ReactDOM from 'react-dom';
//new img url veriable here
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';
// new variable here:
const gooseImg = <img src={goose} />;
//print gooseImg
ReactDOM.render(gooseImg, document.getElementById('app'));
