import React from 'react';
import ReactDOM from 'react-dom';
//we change class component to functional component & adding props in function 
//replace src= this.props.src to props.src
export const NewFriend = (props) => {
		return (
      <div>
        <img src={props.src} />
      </div>
    );	
}
ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);

