import React, { useState } from "react";
import "../styles/Todo.css";
import { Task } from "./Task";
import CreateTask, { createTask } from "./CreateTask";
import "../styles/fonts.css";

function Todo() {
  const listOfTask = [
    {
      title: "Add an item",
      completed: false,
    },

    {
      title: "Click on a task to delete",
      completed: false,
    },
  ];

  //updating the theme for body
  const [theme, updateTheme] = useState(true);

  if (!theme) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }

  const [tasks, setTasks] = useState(listOfTask);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
    listOfTask.push({ title, completed: false });
  };

  function deleteItem(id) {
    setTasks((oldItems) => {
      return oldItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className={"todo-container " + (theme ? "dark" : "light")}>
      <button
        className="themeButton"
        onClick={() => {
          return updateTheme(!theme);
        }}
      >
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d={
              !theme
                ? "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                : "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            }
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="header">My Todo List</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            onChecked={deleteItem}
            class={theme}
          />
        ))}
        <div className="create-task">
          <CreateTask addTask={addTask} class={theme} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
