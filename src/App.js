import React, { Component } from "react";

//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//styled-components
import styled from "styled-components";

import { Transition, animated, config } from "react-spring";

//elements

import { Header } from "./components/header";

//pages

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Work from "./pages/work";
import Contact from "./pages/contact";

const Container = styled(animated.div)`
  position: absolute;
  width: 100%;
`;

const AnimatedRoute = ({ children }) => (
  <Route
    render={({ location }) => (
      <Transition
        config={config.slow}
        native
        items={[location]}
        keys={location => location.pathname}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {location => style => (
          <Container style={style}>{children(location)}</Container>
        )}
      </Transition>
    )}
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <AnimatedRoute>
            {location => (
              <Switch location={location}>
                <Route exact path="/" render={props => <Home />} />
                <Route path="/services" render={props => <Services />} />
                <Route path="/about" render={props => <About />} />
                <Route path="/work" render={props => <Work />} />
                <Route path="/contact" render={props => <Contact />} />
              </Switch>
            )}
          </AnimatedRoute>
        </>
      </Router>
    );
  }
}

export default App;
