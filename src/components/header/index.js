import React from "react";

//animations
import { Trail, config } from "react-spring";
//reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

//router
import { NavLink } from "react-router-dom";

//styled-components
import styled from "styled-components";

const StyledNav = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  padding: 0 7px;
  color: white;
  :hover {
    color: red;
    text-decoration: none;
  }
`;

const NavItems = [
  { to: "/", pageName: "Home" },
  { to: "/about", pageName: "About" },
  { to: "/services", pageName: "Services" },
  { to: "/work", pageName: "Our Work" },
  { to: "/contact", pageName: "Contact" }
];

export default class Header extends React.Component {
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
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">
            <span style={{ color: "white" }}>WebileSoft</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Trail
                config={config.slow}
                items={NavItems}
                keys={({ pageName }) => pageName}
                from={{ transform: "translate3d(0,-40px,0)" }}
                to={{ transform: "translate3d(0,0px,0)" }}
              >
                {item => props => (
                  <span style={props}>
                    <NavItem>
                      <StyledNav to={item.to}>{item.pageName}</StyledNav>
                    </NavItem>
                  </span>
                )}
              </Trail>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// <NavItem>
//     <StyledNav to="/">Home</StyledNav>
// </NavItem>
//     <NavItem>
//         <StyledNav to="/about">About</StyledNav>
//     </NavItem>
//     <NavItem>
//         <StyledNav to="/test">Services</StyledNav>
//     </NavItem>
//     <NavItem>
//         <StyledNav to="/test">Our Work</StyledNav>
//     </NavItem>
//     <NavItem>
//         <StyledNav to="/test">Contact</StyledNav>
//     </NavItem>