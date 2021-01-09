import React from 'react';
import ReactDOM from 'react-dom';
//we use onchange attribute
export class Input extends React.Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} />
        <h1>I am an h1.</h1>
      </div>
    );
  }
}
ReactDOM.render(
	<Input />,
	document.getElementById('app')
);
