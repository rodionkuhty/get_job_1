import React from "react";

//styled
import styled from "styled-components";

//animations
import { Spring, Trail, config, animated } from "react-spring";

const StyledAboutPage = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #fe8c00, #f83600);
  text-align: center;
  padding-top: 10%;
`;

const Items = [
  { tech: "MongoDB", pers: 62.5, color: "green" },
  { tech: "Express", pers: 75, color: "gray" },
  { tech: "React", pers: 100, color: "lightblue" },
  { tech: "Node", pers: 87.5, color: "green" },
  { tech: "Cryptocurrency & Smart Contracts", pers: 45, color: "black" }
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
            <div style={props}>
              <div>
                <p style={{ color: item.color }}>{item.tech}</p>
                <Spring
                  from={{ num: 0 }}
                  to={{ num: item.pers }}
                  config={{ tension: 290, friction: 5, precision: 0.1 }}
                >
                  {props => (
                    <div style={props}>
                      <h1>{props.num.toFixed(1)}%</h1>
                    </div>
                  )}
                </Spring>
              </div>
            </div>
          )}
        </Trail>
      </div>
    </div>
  </StyledAboutPage>
);
