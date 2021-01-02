import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todo'


class App extends Component {
  render (){
    return (
      <div className="container">
      <Todo/>
      </div>
    );
   }
 }

export default App;
