import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Login, Tetris} from './pages/index';


class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Tetris}/>
          <Route exact path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
