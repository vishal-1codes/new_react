import React from 'react';
import ReactDOM from 'react-dom';
//we add constructor 
export class Input extends React.Component {
  constructor(props) {
    super(props);   
    this.state = { userInput: '' };
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);
