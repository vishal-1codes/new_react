import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
//we add this.changeName
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
 this.changeName = this.changeName.bind(this);
  }
  changeName(newName){
    this.setState({name: newName});
  }
//we add onChange
 render(){
   return <Child name={this.state.name} onChange={this.changeName} />
 }
}
ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);
