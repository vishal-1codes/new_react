import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="vishal" />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}
ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
