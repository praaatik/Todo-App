import React from "react";
import "../styles/fonts.css";

function Task(props) {
  console.log(props.completed);
  return (
    <div
      className={props.theme ? "dark" : "light"}
      onClick={() => {
        console.log(props.index);
        return props.onChecked(props.index);
      }}
    >
      <div
        className="task"
        // style={{ textDecoration: props.completed ? "line-through" : "" }}
      >
        {props.task.title}
      </div>
    </div>
  );
}

export { Task };
