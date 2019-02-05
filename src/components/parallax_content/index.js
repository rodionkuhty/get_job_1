import React from "react";

//styled-components
import styled from "styled-components";

//NavLink

import { StyledNav } from "../header";

//Card
import Card from "../card";

const StyledLayerOne = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledText = styled.div`
  width: 400px;
  height: 200px;
  text-align: center;
  color: white;
  margin: 0 auto;
`;
const StyledPar = styled.div`
  text-align: center;
  margin-top: 20%;
`;

const Styledh1 = styled.h1`
  color: white;
`;

const LayerOne = () => {
  return (
    <StyledLayerOne>
      <StyledPar>
        <Card>
          <Styledh1>We Are Specializing in JavaScript IT-company</Styledh1>
          <StyledText>
            <p>
              Founded in 2016, WebileSoft provides end-to-end development of
              consumer web, mobile, desktop and embedded applications. We
              specialize on JavaScript and apply the accumulated backend and
              frontend engineering experience for projects of any scale.
            </p>
          </StyledText>
        </Card>
      </StyledPar>
    </StyledLayerOne>
  );
};

const LayerTwo = () => {
  return (
    <StyledPar>
      <h3>
        Founded in 2016, WebileSoft provides end-to-end development of consumer
        web, mobile, desktop and embedded applications. We specialize on
        JavaScript and apply the accumulated backend and frontend engineering
        experience for projects of any scale.
      </h3>
    </StyledPar>
  );
};

const StyledButtons = styled.button`
  background: ${props => (props.primary ? "red" : "inherit")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 18px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
`;

const LayerThree = () => {
  return (
    <StyledPar>
      <StyledButtons>
        <StyledNav to="/about">About Us</StyledNav>
      </StyledButtons>
      <StyledButtons primary>
        <StyledNav to="/contact">Contact Us</StyledNav>
      </StyledButtons>
    </StyledPar>
  );
};

export { LayerOne, LayerTwo, LayerThree };

// background: linear - gradient(to right, #feac5e, #c779d0, #4bc0c8);
// background: linear - gradient(to right, #7b4397, #dc2430);
