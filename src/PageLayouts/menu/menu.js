import React from 'react';
//import FaPaw from 'react-icons/lib/fa/paw';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap/lib';

class Navigation extends React.Component {


    render() {



        return (

            <Navbar inverse collapseOnSelect>
                <Navbar.Header>

                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Strona główna</NavItem>
                        <NavItem eventKey={2} href="#">Funkcjonalności</NavItem>
                        <NavItem eventKey={3} href="#">Nasz Zespół</NavItem>
                        <NavItem eventKey={4} href="#">Sklep</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }

}


export default Navigation;
