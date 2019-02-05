import React from "react";

//styled
import styled from "styled-components";

//animations
import { Spring, Trail } from "react-spring";

const StyledAboutPage = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #fc5c7d, #6a82fb);
  text-align: center;
  padding-top: 10%;
`;

const StyledTech = styled.div`
  min-width: 400px;
  min-height: 200px;
  float: left;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 145px;
  border-radius: 15px;
`;

const Items = [
  {
    tech: "MongoDB",
    pers: 62.5,
    color: "green",
    back: "linear-gradient(to right, #70e1f5, #ffd194)"
  },
  {
    tech: "Express",
    pers: 75,
    color: "gray",
    back: "linear-gradient(to right, #485563, #29323c)"
  },
  {
    tech: "React",
    pers: 100,
    color: "lightblue",
    back: "linear-gradient(to right, #00c6ff, #0072ff)"
  },
  {
    tech: "Node",
    pers: 87.5,
    color: "green",
    back: "linear-gradient(to right, #b3ffab, #12fff7)"
  },
  {
    tech: "Cryptocurrency & Smart Contracts",
    pers: 45,
    color: "black",
    back: "linear-gradient(to right, #606c88, #3f4c6b)"
  }
];

export default () => (
  <StyledAboutPage>
    <h1>Welcome To WebileSoft</h1>
    <div>
      <p>
        From B2C & B2B Portals, to DMS, CMS and analytics tools, we deliver
        various solutions to customers from across diverse industries around the
        globe.
      </p>
      <div>
        <Trail
          items={Items}
          keys={({ tech }) => tech}
          from={{ transform: "translateX(-100%)" }}
          to={{ transform: "translateX(0)" }}
        >
          {item => props => (
            <StyledTech style={props}>
              <div>
                <h1 style={{ color: item.color }}>{item.tech}</h1>
                <Spring
                  from={{ num: 0 }}
                  to={{ num: item.pers }}
                  config={{ tension: 290, friction: 200, precision: 0.1 }}
                >
                  {props => (
                    <div style={props}>
                      <h2>{props.num.toFixed(1)}%</h2>
                    </div>
                  )}
                </Spring>
              </div>
            </StyledTech>
          )}
        </Trail>
      </div>
    </div>
  </StyledAboutPage>
);
