import React, { useState, useContext } from "react";
import TaskListContext from "./task-list-context";

export const TabPanel = () => {
  const { states, changeStates } = useContext(TaskListContext);

  const handleClick = event => {
    const newStates = states.map(state =>
      event.target.innerText.toLowerCase() === state.name
        ? { ...state, active: true }
        : { ...state, active: false }
    );
    changeStates(newStates);
  };

  return (
    <div className="tabs">
      {states.map(state => (
        <div
          key={state.name}
          className={state.active ? "active-tab" : ""}
          onClick={handleClick}
        >
          {state.name}
        </div>
      ))}
    </div>
  );
};
