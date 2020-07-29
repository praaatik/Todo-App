import React from "react";

import Todo from "./components/Todo";

function App() {
  const darkButton = document.getElementById("darkButton");
  console.log("This is " + darkButton);
  
  return <Todo></Todo>
}

export default App;
