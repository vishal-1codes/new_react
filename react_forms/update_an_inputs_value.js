import React from 'react';
import ReactDOM from 'react-dom';
export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
    this.handleUserInput = this.handleUserInput.bind(this);
  } 
  handleUserInput(e) {
    this.setState({userInput: e.target.value});
  }
  //we add vlaue & in <h1> body give {this.state.userInput} 
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
