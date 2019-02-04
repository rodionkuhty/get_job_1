import React, { Component, Fragment } from "react";

//styled-components
import styled from "styled-components";

const StyledLayerOne = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #7b4397, #dc2430);
`;
const StyledPar = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LayerOne = () => {
  return (
    <StyledLayerOne>
      <StyledPar> We Are Specializing in JavaScript IT-company</StyledPar>
    </StyledLayerOne>
  );
};

export { LayerOne };

// background: linear - gradient(to right, #feac5e, #c779d0, #4bc0c8);
