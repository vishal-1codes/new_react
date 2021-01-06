import React from 'react';
import ReactDOM from 'react-dom';
//we call constructor method
class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state ={date: new Date()};
  }
  render(){
    return <div>{Clock} {this.state.date.toLocaleTimeString()}</div>;    
  }
}
ReactDOM.render(<Clock />, document.getElementById('app'));
