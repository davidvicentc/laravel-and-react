import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from "reactstrap";
import { Link } from "react-router-dom";

const NavbarVicent = () => {
    const [isOpen, setisOpen] = useState(false);
    function toggle() {
        setisOpen(!isOpen);
    }
    return (
        <div>
            <Navbar dark expand="md" className="bg-vicent">
                <Container>
                    <Link to="/">
                        <NavbarBrand>
                            <strong>VicentShoes</strong>
                        </NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/products">
                                    <NavLink>Products</NavLink>
                                </Link>
                            </NavItem>
                            {/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarVicent;
