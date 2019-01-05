import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import ListProducts from './components/ListProducts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div className="App">
      <h1 id="appTitle">Producrs App</h1>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={ListProducts} />
        </div>
      </div>
    </Router>
    </div>
    );
  }
}

export default App;
