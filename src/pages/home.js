import React, { Component, Fragment } from "react";

//styled-components

import styled from "styled-components";

//animations

import { Parallax, ParallaxLayer } from "react-spring/addons";

//layers

import { LayerOne } from "../components/parallax_content";

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledMainLine = styled.div`
  width: 100%;
  min-height: 7px;
  background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default class Home extends Component {
  render = () => {
    return (
      <StyledMainContainer>
        <Fragment>
          <StyledMainLine>
            <p>...</p>
          </StyledMainLine>

          <Parallax
            pages={3}
            scrolling={false}
            horizontal
            ref={ref => (this.parallax = ref)}
          >
            <ParallaxLayer offset={0} speed={0.5}>
              <div onClick={() => this.parallax.scrollTo(1)}>
                <LayerOne />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5}>
              <span onClick={() => this.parallax.scrollTo(2)}>
                Layers can contain anything2
              </span>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5}>
              <span onClick={() => this.parallax.scrollTo(0)}>
                Layers can contain anything3
              </span>
            </ParallaxLayer>
          </Parallax>
        </Fragment>
      </StyledMainContainer>
    );
  };
}
