import React, { Component } from 'react';
import Card from './swap.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App ">
            <div className="card-container"> 
             <ReactCSSTransitionGroup
          
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
                   <Card name = "jaabiri"></Card>
                    <Card name = "salim"></Card>
                     <Card name = "jaabiri"></Card>
          </ReactCSSTransitionGroup>
            </div>
      </div>
    );
  }
}

export default App;
