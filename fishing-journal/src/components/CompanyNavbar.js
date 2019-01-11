import React from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import { Link } from "react-router-dom"

class CompanyNavbar extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar color="dark" expand="md">
                <NavbarBrand>Hooked</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink>
                        <Link to="/view">View</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/add">Add</Link>
                    </NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink>
                        <Link to="/logout">Logout</Link>
                    </NavLink>
                </NavItem> */}
                </Nav>
                </Collapse>
            </Navbar>

        );
    }
    }

export default CompanyNavbar