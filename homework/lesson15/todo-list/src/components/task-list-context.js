import React from "react";

const initialTaskList = [
  {
    id: 0,
    name: "Do homework",
    checked: true
  },
  {
    id: 1,
    name: "Eat pizza",
    checked: false
  }
];

const initialStates = [
  { active: true, name: "all" },
  { active: false, name: "active" },
  { active: false, name: "complete" }
];

export default React.createContext({
  tasks: initialTaskList,
  states: initialStates,
  changeTasks: () => [],
  changeStates: () => []
});
