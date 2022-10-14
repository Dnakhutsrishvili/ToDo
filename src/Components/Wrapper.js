import React, { useState } from "react";
import classes from "./Wrapper.module.css";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";
import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";

function Wrapper(props) {
  const [list, setList] = useState([]);

  const getListItem = (item) => {
    item = { ...item, id: Math.floor(Math.random() * 100) };
    setList([...list, item]);
  };

  return (
    <div
      className={
        props.mode ? classes.headerParentDark : classes.headerParentLight
      }
    >
      <div className={classes.splitter}>
        <h1 className={classes.title}>TODO</h1>
        <img
          onClick={() => {
            props.setMode(!props.mode);
          }}
          className={classes.icon}
          src={props.mode ? sun : moon}
          alt="moonorsun"
        ></img>
      </div>
      <div className={classes.splitterInput}>
        <CreateToDo getItem={getListItem} mode={props.mode}></CreateToDo>
        <ToDoList mode={props.mode} list={list} setList={setList}></ToDoList>
      </div>
    </div>
  );
}

export default Wrapper;
