import React, { useState } from "react";
import "../styles/Todo.css";
import { Task } from "./Task";
import CreateTask, { createTask } from "./CreateTask";
import "../styles/fonts.css";

function Todo() {
  const listOfTask = [];

  const [tasks, setTasks] = useState(listOfTask);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
    listOfTask.push({ title, completed: false });
    console.log(listOfTask);
  };

  function deleteItem(id) {
    setTasks((oldItems) => {
      return oldItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="todo-container">
      <div className="header">My Todo List</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            onChecked={deleteItem}
          />
        ))}
        <div className="create-task">
          <CreateTask addTask={addTask} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
