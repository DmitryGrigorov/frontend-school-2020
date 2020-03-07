import React, { useState, useContext } from "react";
import TaskListContext from "./task-list-context";

export const AddTaskField = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [error, setError] = useState("");
  const { tasks, changeTasks } = useContext(TaskListContext);

  const handleChange = event => {
    setError("");
    setCurrentValue(event.target.value);
  };

  const addNewTask = () => {
    if (currentValue.trim().length > 0) {
      changeTasks([
        ...tasks,
        { id: tasks.length + 1, name: trimString(currentValue), checked: false }
      ]);
      setCurrentValue("");
    } else {
      setCurrentValue("");
      setError("Action field can not be empty");
    }
  };

  const handleEnterClick = event => {
    if (event.which === 13) addNewTask();
  };

  const handleAddBtnClick = () => addNewTask();

  const trimString = str => {
    if (str.trim().length > 20) {
      return str.trim().slice(0, 20) + "...";
    }
    return str.trim();
  };

  return (
    <div className="inputField">
      <input
        type="text"
        onKeyDown={handleEnterClick}
        onChange={handleChange}
        placeholder={error ? error : "Enter new action"}
        className={error ? "error" : ""}
        value={currentValue}
      />
      <div className="addBtn" onClick={handleAddBtnClick}>
        +
      </div>
    </div>
  );
};
