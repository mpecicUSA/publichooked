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
            <>
            <Navbar color="dark" expand="md">
                <NavbarBrand style={{color: "white"}}>Hooked</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink>
                        <Link style={{color: "white"}} to="/view">View</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link style={{color: "white"}} to="/add">Add</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        { this.props.userData ? <Link style={{color: "white"}} to="/logout">Logout</Link> :   <Link style={{color: "white"}} to="/login">Login</Link> }
                    </NavLink>
                </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            </>
        );
    }
    }

export default CompanyNavbar