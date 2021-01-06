import React from 'react';
import ReactDOM from 'react-dom';
class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}
// here we given button name
Button.defaultProps ={text: 'I am a button'};
// if we create <button text="" then there is no name print on button icon
ReactDOM.render(
  <Button text="" />, 
  document.getElementById('app')
);
