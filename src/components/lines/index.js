import React from "react";
import ReactDOM from "react-dom";
import { curveBasis } from "@vx/curve";
import { AreaClosed } from "@vx/shape";
import { scaleTime, scaleLinear } from "@vx/scale";
import { ParentSize } from "@vx/responsive";
import { GradientPinkRed } from "@vx/gradient";
import { genDateValue } from "@vx/mock-data";
import { extent, max } from "d3-array";
import { Spring } from "react-spring";

const data = genDateValue(400);
const x = d => d.date;
const y = d => d.value;

class Lines extends React.Component {
  state = { toggle: true };
  toggle = () => this.setState(state => ({ toggle: !state.toggle }));
  render() {
    return (
      <ParentSize>
        {({ width, height }) => {
          const xScale = scaleTime({
            range: [0, width],
            domain: extent(data, x)
          });
          const yMax = max(data, y);
          const yScale = scaleLinear({
            range: [height / 2, 0],
            domain: [0, yMax],
            nice: true
          });
          const interpolate = data.map(d => Math.random() * yMax);
          return (
            <div
              style={{ width: "100%", height: "100%", cursor: "pointer" }}
              onClick={this.toggle}
            >
              <svg
                style={{ position: "absolute", bottom: 0 }}
                width={width}
                height={height / 2}
              >
                <GradientPinkRed id="PinkRed" />
                <g>
                  <Spring to={{ interpolate }}>
                    {({ interpolate }) => (
                      <AreaClosed
                        data={data.map((d, i) => ({
                          ...d,
                          value: interpolate[i]
                        }))}
                        xScale={xScale}
                        yScale={yScale}
                        x={x}
                        y={y}
                        strokeWidth={2}
                        stroke={"url(#PinkRed)"}
                        fill={"url(#PinkRed)"}
                        curve={curveBasis}
                      >
                        {({ path }) => (
                          <path
                            d={data.map((d, i) => ({
                              ...d,
                              value: interpolate[i]
                            }))}
                          />
                        )}
                      </AreaClosed>
                    )}
                  </Spring>
                </g>
              </svg>
            </div>
          );
        }}
      </ParentSize>
    );
  }
}

export default Lines;
