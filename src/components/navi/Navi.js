import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";
const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <NavbarBrand>REİZZZLER YAZILIM</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Main Page</Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link to="/products">Products</Link>
              </NavLink>
            </NavItem>

            <CartSummary />
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
