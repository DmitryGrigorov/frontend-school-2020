import React, { useState, useContext, useEffect } from "react";
import TaskListContext from "./task-list-context";
import { TaskWrapper } from "./task-wrapper";
import { TabPanel } from "./tab-panel";
import { AddTaskField } from "./add-task-field";

import "./styles.css";

const App = () => {
  const context = useContext(TaskListContext);
  const [tasks, setTasks] = useState(context.tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [states, setStates] = useState(context.states);

  const changeTasks = newTasks => {
    setTasks(newTasks);
  };

  const changeStates = newStates => {
    setStates(newStates);
  };

  useEffect(() => {
    states.forEach(state => {
      if (state.active) {
        switch (state.name) {
          case "all":
            setFilteredTasks(tasks);
            break;
          case "active":
            setFilteredTasks(tasks.filter(task => task.checked === false));
            break;
          case "complete":
            setFilteredTasks(tasks.filter(task => task.checked === true));
            break;
        }
      }
    });
  }, [states, setFilteredTasks, tasks]);

  return (
    <div className="background">
      <TaskListContext.Provider
        value={{
          tasks: tasks,
          changeTasks: changeTasks,
          states: states,
          changeStates: changeStates
        }}
      >
        <div className="content">
          <div className="title">todo app</div>
          <TabPanel />
          <TaskWrapper filteredTasks={filteredTasks} />
          <AddTaskField />
        </div>
      </TaskListContext.Provider>
    </div>
  );
};

export default App;
