import React from 'react';
import ReactDOM from 'react-dom';
const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};
class Owl extends React.Component {
  render(){
    return(
      <div>
      <h1>
      Excellent Owl
      </h1>
      <img
      src={owl.src}
      alt={owl.title} />
      </div>
    );
  }
};
//we print out put note: class is 1st agrument in ReactDOm.render()
ReactDOM.render(<Owl/>,document.getElementById('app'))
//print one statement and one img
