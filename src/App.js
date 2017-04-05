import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Features from './PageLayouts/features/features';
import Team from './PageLayouts/team/team';
import Main from './PageLayouts/main/main';
// import Navigation from './PageLayouts/menu/menu'; <Navigation/>
import Footer from './PageLayouts/footer/footer';
import Search from './PageLayouts/shop/search/search';
import Login from './PageLayouts/login/login';
//import Shop from './PageLayouts/shop/products/products';

import { Navbar, NavItem, Nav } from 'react-bootstrap/lib';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import {Route} from 'react-router';

class App extends Component {
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


                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>

                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>

                            <IndexLinkContainer to={App}><NavItem eventKey={1}>Strona główna</NavItem></IndexLinkContainer>
                             <LinkContainer to={Features}><NavItem eventKey={2}>Funkcjonalności</NavItem></LinkContainer>
                             <LinkContainer to={Team}><NavItem eventKey={3}>Nasz Zespół</NavItem></LinkContainer>
                             <NavItem eventKey={4}>Sklep</NavItem>

                            /*  <IndexLinkContainer ><NavItem eventKey={1}>Strona główna</NavItem></IndexLinkContainer>
                                 <LinkContainer to="/features"><NavItem eventKey={2}>Funkcjonalności</NavItem></LinkContainer>
                                 <LinkContainer to="/team"><NavItem eventKey={3}>Nasz Zespół</NavItem></LinkContainer>
                                 <NavItem eventKey={4}>Sklep</NavItem> */
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

               /* <Route path='/' component={Main} />
                <Route path="/features" component={Features} />
                <Route path="/team" component={Team} /> */

                <Main/>
                <Features/>
                <Team/>
                <Footer/>
            </div>

        )
    }
}



export default App;