import React from 'react';
import ReactDOM from 'react-dom';
//we have to delete export friend og component replace with functional component
export const Friend = () => {
  return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
};
ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);
