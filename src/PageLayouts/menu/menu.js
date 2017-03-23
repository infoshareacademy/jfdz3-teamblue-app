import React from 'react';
//import FaPaw from 'react-icons/lib/fa/paw';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap/lib';

class Navigation extends React.Component {


    render() {


        return (

            <Navbar inverse collapseOnSelect>

                    <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Strona Główna</NavItem>
                        <NavItem eventKey={2} href="#">Funkcjonalności</NavItem>
                        <NavDropdown eventKey={3} title="Nasz zespół" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4} href="#">Sklep</NavItem>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>



        )
    }

}


export default Navigation;

