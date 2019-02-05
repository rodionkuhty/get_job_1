import React from "react";
import styled from "styled-components";
import { Spring, animated } from "react-spring";

const StyledCard = styled(animated.div)`
  min-width: 45px;
  min-height: 45px;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;

  transition: box-shadow 0.5s;
  will-change: transform;
  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

class Card extends React.Component {
  state = { xys: [0, 0, 1] };
  render() {
    return (
      <Spring
        native
        to={{ xys: this.state.xys }}
        config={{ mass: 5, tension: 350, friction: 40 }}
      >
        {props => (
          <StyledCard
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) =>
              this.setState({ xys: calc(x, y) })
            }
            onMouseLeave={() => this.setState({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          >
            {this.props.children}
          </StyledCard>
        )}
      </Spring>
    );
  }
}
export default Card;

// box - shadow: 0px 10px 30px - 5px rgba(0, 0, 0, 0.3);
