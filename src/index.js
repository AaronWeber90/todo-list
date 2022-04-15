import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
  {id: "todo-0", name: "Eat", completed: true},
  {id: "todo-1", name: "Sleep", completed: true},
  {id: "todo-2", name: "Cook", completed: false},
];

ReactDOM.render(<App tasksData={DATA} />, document.getElementById("root"));
