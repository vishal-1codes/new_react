import React from 'react';
//onClick are event listeners
export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} >
        Click me!
      </button>
    );
  }
}
