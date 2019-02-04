import React from "react";

//styled-components

import styled from "styled-components";

//animations
import { Spring, config } from "react-spring";

//img
import DevImg from "../img/dev.jpg";

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #ee9ca7, #ffdde1);
`;

export default () => (
  <StyledMainContainer>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptate
      iusto ut accusamus, eveniet quis enim, natus esse accusantium adipisci
      iure nemo soluta exercitationem quod saepe, corporis mollitia ab veniam.
    </p>
  </StyledMainContainer>
);
