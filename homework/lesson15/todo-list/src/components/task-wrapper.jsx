import React, { useContext } from "react";
import Task from "./task";
import TaskListContext from "./task-list-context";

export const TaskWrapper = props => {
  const { tasks, changeTasks } = useContext(TaskListContext);

  const handleChange = event => {
    const newTasks = tasks.map(task =>
      task.id.toString() === event.target.value
        ? { ...task, checked: !task.checked }
        : task
    );
    changeTasks(newTasks);
  };

  const handleDelete = id => {
    const newTasks = tasks.filter(task => task.id !== id);
    changeTasks(newTasks);
  };

  return (
    <ul>
      {props.filteredTasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          checked={task.checked}
          onChange={handleChange}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
