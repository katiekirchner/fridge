import React from 'react'
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import "./navbar_style.css";

class NavBar extends React.Component {
    render() {
        const activeStyle = {
            'border-bottom': '3px solid white'
        };
        
        return(
            <React.Fragment>
                <div class="sticky-top">
                    <Navbar variant="dark" collapseOnSelect expand="lg">
                        <Navbar.Brand>
                            <NavLink to=""> FridgeKeeper </NavLink>
                        </Navbar.Brand>   
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <NavItem >
                                    <NavLink activeStyle={activeStyle} to="/home"> Home </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink activeStyle={activeStyle} to="/shopping-list"> Shopping List </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink activeStyle={activeStyle} to="/recipes"> Recipes </NavLink>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink activeStyle={activeStyle} to="/about"> About </NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <NavLink activeStyle={activeStyle} to="/profile"> Profile </NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </React.Fragment>
        );
    }
}


export default NavBar