import React, { Component } from 'react';

import logo from './logo.png';
import './App.css';
import Features from './PageLayouts/features/features';
import Team from './PageLayouts/team/team';

class App extends Component {
  render() {
    return (
      <div className="App">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
        <div className="App-header">
          <img src={logo} alt="logo" className="App-logo"/>
        </div>


          <Features/>
          <Team/>
      </div>


    )
  }
}



export default App;
