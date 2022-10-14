import React, { useState } from "react";
import classes from "./Create.module.css";

function CreateToDo(props) {
  const [todo, setTodo] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const task = { task: todo, status: true };
      props.getItem(task);
    }
  };
  return (
    <div className={classes.inputPerent}>
      <input
        className={!props.mode ? classes.inputLight : classes.inputDark}
        type="text"
        placeholder="Create a new todo…"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      ></input>
      <div className={classes.sircle}></div>
    </div>
  );
}

export default CreateToDo;
