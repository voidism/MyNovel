import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome act</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.children}
        <div className="row">
          <div className="col-xs-12
                      col-sm-8
                      col-md-6
                      col-lg-4">
              <div className="box">Responsive</div>
          </div>
          <div className="col-xs-12
                      col-sm-8
                      col-md-6
                      col-lg-4">
              <div className="box">Responsive</div>
          </div>
          <div className="col-xs-12
                      col-sm-8
                      col-md-6
                      col-lg-4">
              <div className="box">Responsive</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
