import React, { useState } from "react";

function CreateTask(props) {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!value) {
      return;
    }
    props.addTask(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add an item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={handleSubmit} type="submit" value={value}>
        Submit
      </button>
    </form>
  );
}

export default CreateTask;
