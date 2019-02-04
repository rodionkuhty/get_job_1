import React from "react";

//animations
import { Spring, Trail, config, animated } from "react-spring";
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

//burger image
import burger from "../../img/burger.png";

const StyledNav = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  padding: 0 7px;
  color: white;
  transition: all 0.7s;
  :hover {
    color: coral;
    text-decoration: none;
  }
`;

const StyledNavbar = styled(Navbar)`
  background: linear-gradient(to right, #7b4397, #dc2430);
`;

const StyledNavbaToggler = styled(NavbarToggler)`
  margin-bottom: 2px;
`;

const NavItems = [
  { to: "/", pageName: "Home" },
  { to: "/about", pageName: "About" },
  { to: "/services", pageName: "Services" },
  { to: "/work", pageName: "Our Work" },
  { to: "/contact", pageName: "Contact" }
];

class Header extends React.Component {
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
      <Spring
        config={config.slow}
        native
        from={{ opacity: 0, transform: "translateY(-10px)" }}
        to={{ opacity: 1, transform: "translateY(0px)" }}
      >
        {props => (
          <animated.div style={props}>
            {" "}
            <div>
              <StyledNavbar color="dark" expand="md">
                <NavbarBrand href="/">
                  <span style={{ color: "white" }}>WebileSoft</span>
                </NavbarBrand>
                <StyledNavbaToggler onClick={this.toggle}>
                  <img
                    src={burger}
                    alt="nav burger"
                    width="30px"
                    height="30px"
                  />
                </StyledNavbaToggler>
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
                            <StyledNav
                              exact
                              to={item.to}
                              activeStyle={{
                                borderBottom: "solid 3px white"
                              }}
                            >
                              {item.pageName}
                            </StyledNav>
                          </NavItem>
                        </span>
                      )}
                    </Trail>
                  </Nav>
                </Collapse>
              </StyledNavbar>
            </div>
          </animated.div>
        )}
      </Spring>
    );
  }
}

export { Header, StyledNav };
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
