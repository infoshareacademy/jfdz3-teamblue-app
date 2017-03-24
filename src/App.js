import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Features from './PageLayouts/features/features';
import Team from './PageLayouts/team/team';
import Main from './PageLayouts/main/main';
import Navigation from './PageLayouts/menu/menu';
import Footer from './PageLayouts/footer/footer';
import Search from './PageLayouts/shop/search/search';
import Login from './PageLayouts/login/login';


class App extends Component {
  render() {
    return (
      < div className="App">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
        <div className="App-header container-fluid">

            <Search/>
          <div className="logo-box col-md-6"><img src={logo} alt="logo" className="App-logo"/></div>
            <Login/>
        </div>


          <Navigation/>
          <Main/>
          <Features/>
          <Team/>
          <Footer/>
      </div>

    )
  }
}



export default App;
