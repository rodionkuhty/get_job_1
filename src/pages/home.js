import React, { Component, Fragment } from "react";

//styled-components

import styled from "styled-components";

//animations

import { Parallax, ParallaxLayer } from "react-spring/addons";

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: inherit;
`;

const ParallaxPage = () => {
  return <p>boom</p>;
};

export default class Home extends Component {
  render = () => {
    return (
      <StyledMainContainer>
        <Fragment>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            veritatis unde distinctio. Consectetur neque vel dolorum,
            dignissimos explicabo iste sequi, in optio laboriosam ipsum totam
            voluptate odio rem quod provident.
          </p>

          <Parallax
            pages={3}
            scrolling={false}
            horizontal
            ref={ref => (this.parallax = ref)}
          >
            <ParallaxLayer offset={0} speed={0.5}>
              <span onClick={() => this.parallax.scrollTo(2)}>
                Layers can contain anything
              </span>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5}>
              <span onClick={() => this.parallax.scrollTo(0)}>
                Layers can contain anything
              </span>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5}>
              <span onClick={() => this.parallax.scrollTo(1)}>
                Layers can contain anything
              </span>
            </ParallaxLayer>
          </Parallax>
        </Fragment>
      </StyledMainContainer>
    );
  };
}
