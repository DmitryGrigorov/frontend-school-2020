import React from "react";

export const Heart = props => (
  <div className="heart-root">
    <svg
      title="SVG Heart Icon"
      viewBox="-11 -11 122 111"
      width="100"
      height="100"
    >
      <path
        className={props.changed ? "clicked" : ""}
        d="
						 M 50 0,
						 A 1 1 0 1 0 0 50, 
						 L50,100, 
						 L100,50,
						 A 1 1 0 1 0 50 0"
      />
    </svg>
    <span
      style={{
        left: props.counter > 9 ? "calc(50% - 16px)" : "calc(50% - 8px)"
      }}
      className="counter"
    >
      {props.counter === 0 ? "" : props.counter}
    </span>
  </div>
);
