import React, { Component, Fragment } from "react";

//styled-components
import styled from "styled-components";

//NavLink

import { NavLink } from "react-router-dom";

import { StyledNav } from "../header";

const StyledLayerOne = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledText = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid red;
`;
const StyledPar = styled.div`
  text-align: center;
  margin-top: 20%;
`;

const LayerOne = () => {
  return (
    <StyledLayerOne>
      <StyledPar>
        <h1>We Are Specializing in JavaScript IT-company</h1>
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
