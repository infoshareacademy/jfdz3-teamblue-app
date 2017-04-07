import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './App.css';
import Features from './PageLayouts/features/features';
import Team from './PageLayouts/team/team';
import Main from './PageLayouts/main/main';
import Footer from './PageLayouts/footer/footer';
import Search from './PageLayouts/shop/search/search';
import Login from './PageLayouts/login/login';

import { withRouter,  Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap/lib';
import RouteNavItem from './components/RouteNavItem';
import Routes from './Routes';





class App extends Component {

    handleNavLink = (event) => {
        event.preventDefault();
        this.props.history.push(event.currentTarget.getAttribute('href'));
    };



    render() {
        return (



                <div className="App">
                    <div id="googleButton"></div>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
                    <div className="App-header container-fluid">

                        <Search/>
                        <div className="logo-box col-md-6"><img src={logo} alt="logo" className="App-logo"/></div>
                        <Login/>
                    </div>



                    <div>

                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>

                                <RouteNavItem onClick={this.handleNavLink} href="/">Strona główna</RouteNavItem>
                                <RouteNavItem onClick={this.handleNavLink} href="/features">Features</RouteNavItem>
                                <RouteNavItem onClick={this.handleNavLink} href="/team">Nasz zespół</RouteNavItem>
                                <RouteNavItem onClick={this.handleNavLink} href="/shop">Sklep</RouteNavItem>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>


                    <Routes/>



                        </div>



                    <Footer/>
                </div>


        )
    }
}



export default withRouter(App);