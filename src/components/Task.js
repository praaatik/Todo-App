import React from "react";
import "../fonts.css";

function Task({ task }) {
  return (
    <div>
      <div className="todo-checkbox"></div>
      <div
        className="task"
        style={{ textDecoration: task.completed ? "line-through" : "" }}
      >
        {task.title}
      </div>
    </div>
  );
}

export { Task };
