import React, { Component, Fragment } from "react";

//styled-components

import styled from "styled-components";

//animations

import { Parallax, ParallaxLayer } from "react-spring/addons";

//layers

import { LayerOne, LayerTwo, LayerThree } from "../components/parallax_content";

//lines

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMainLine = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #7b4397, #dc2430);

  text-align: center;
`;

export default class Home extends Component {
  render = () => {
    return (
      <StyledMainContainer>
        <Fragment>
          <StyledMainLine>
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
                <div onClick={() => this.parallax.scrollTo(2)}>
                  <LayerTwo />
                </div>
              </ParallaxLayer>
              <ParallaxLayer offset={2} speed={0.5}>
                <div onClick={() => this.parallax.scrollTo(0)}>
                  <LayerThree />
                </div>
              </ParallaxLayer>
            </Parallax>
          </StyledMainLine>
        </Fragment>
      </StyledMainContainer>
    );
  };
}
