import React, { useState } from "react";
import "../Todo.css";
import { Task } from "./Task";
import { listOfTasks } from "../listOfTasks";
import CreateTask, { createTask } from "./CreateTask";
import "../fonts.css";

function Todo() {
  const [tasks, setTasks] = useState(listOfTasks);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
    listOfTasks.push(newTasks);
  };

  return (
    <div className="todo-container">
      <div class="information">i</div>
      <div className="header">TODO</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index} />
        ))}
        <div className="todo-checkbox"></div>
        <div className="create-task">
          <CreateTask addTask={addTask}/>
        </div>
      </div>
    </div>
  );
}

export default Todo;
