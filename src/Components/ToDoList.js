import React, { useState } from "react";
import classes from "./ToDoList.module.css";
import check from "../assets/images/icon-check.svg";
import cross from "../assets/images/icon-cross.svg";

function ToDoList(props) {
  const [filtered, setFiltered] = useState([]);
  const [filteredoption, setFilteredOption] = useState("all");

  const switchHendeler = (items) => {
    const newListStatus = props.list.filter((item) => {
      if (item.id === items.id) {
        item.status = false;
      }
      return item;
    });
    props.setList(newListStatus);
  };
  const removeHendeler = (items) => {
    const newList = props.list.filter((item) => item.id !== items.id);
    props.setList(newList);
  };

  const FilterWithActive = () => {
    const newList = props.list.filter((item) => {
      return item.status === true;
    });
    setFiltered(newList);
  };

  const FilterWithComplated = () => {
    const newList = props.list.filter((item) => item.status !== true);
    setFiltered(newList);
  };

  return (
    <div className={!props.mode ? classes.container : classes.conteinerDark}>
      {filteredoption === "all" &&
        props.list.map((item) => {
          return (
            <div
              key={item.id}
              className={
                !props.mode ? classes.mappedDiv : classes.mappedDivDark
              }
            >
              <div
                style={
                  !item.status
                    ? {
                        background:
                          "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)",
                      }
                    : {}
                }
                className={classes.sircle}
                onClick={() => {
                  switchHendeler(item);
                }}
              >
                {!item.status && (
                  <img className={classes.img} src={check} alt="check"></img>
                )}
              </div>
              <p
                className={!props.mode ? classes.todo : classes.todoDark}
                style={
                  !props.mode
                    ? !item.status
                      ? { textDecoration: "line-through", color: "#D1D2DA" }
                      : {}
                    : !item.status
                    ? { textDecoration: "line-through", color: "#4D5067" }
                    : {}
                }
              >
                {item.task}
              </p>
              <div
                className={classes.close}
                onClick={() => {
                  removeHendeler(item);
                }}
              >
                <img className={classes.cross} src={cross} alt="cross"></img>
              </div>
            </div>
          );
        })}

      {filteredoption === "active" &&
        filtered.map((item) => {
          return (
            <div
              key={item.id}
              className={
                !props.mode ? classes.mappedDiv : classes.mappedDivDark
              }
            >
              <div
                style={
                  !item.status
                    ? {
                        background:
                          "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)",
                      }
                    : {}
                }
                className={classes.sircle}
                onClick={() => {
                  switchHendeler(item);
                }}
              >
                {!item.status && (
                  <img className={classes.img} src={check} alt="check"></img>
                )}
              </div>
              <p
                className={!props.mode ? classes.todo : classes.todoDark}
                style={
                  !props.mode
                    ? !item.status
                      ? { textDecoration: "line-through", color: "#D1D2DA" }
                      : {}
                    : !item.status
                    ? { textDecoration: "line-through", color: "#4D5067" }
                    : {}
                }
              >
                {item.task}
              </p>
              <div
                className={classes.close}
                onClick={() => {
                  removeHendeler(item);
                }}
              >
                <img className={classes.cross} src={cross} alt="cross"></img>
              </div>
            </div>
          );
        })}

      {filteredoption === "complated" &&
        filtered.map((item) => {
          return (
            <div
              key={item.id}
              className={
                !props.mode ? classes.mappedDiv : classes.mappedDivDark
              }
            >
              <div
                style={
                  !item.status
                    ? {
                        background:
                          "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)",
                      }
                    : {}
                }
                className={classes.sircle}
                onClick={() => {
                  switchHendeler(item);
                }}
              >
                {!item.status && (
                  <img className={classes.img} src={check} alt="check"></img>
                )}
              </div>
              <p
                className={!props.mode ? classes.todo : classes.todoDark}
                style={
                  !props.mode
                    ? !item.status
                      ? { textDecoration: "line-through", color: "#D1D2DA" }
                      : {}
                    : !item.status
                    ? { textDecoration: "line-through", color: "#4D5067" }
                    : {}
                }
              >
                {item.task}
              </p>
              <div
                className={classes.close}
                onClick={() => {
                  removeHendeler(item);
                }}
              >
                <img className={classes.cross} src={cross} alt="cross"></img>
              </div>
            </div>
          );
        })}
      <div className={classes.info}>
        <p className={classes.itemsleft}>
          <span>{props.list.length}</span> items left
        </p>
        <p
          onClick={() => {
            props.setList([]);
          }}
          className={classes.clearBox}
        >
          Clear Completed
        </p>
      </div>
      <div className={!props.mode ? classes.filter : classes.filterDark}>
        <p
          onClick={() => {
            setFilteredOption("all");
          }}
          className={
            !props.mode ? classes.filterElement : classes.filterElementDark
          }
        >
          All
        </p>
        <p
          onClick={() => {
            FilterWithActive();
            setFilteredOption("active");
          }}
          className={
            !props.mode ? classes.filterElement : classes.filterElementDark
          }
        >
          Active
        </p>
        <p
          className={
            !props.mode ? classes.filterElement : classes.filterElementDark
          }
          onClick={() => {
            FilterWithComplated();
            setFilteredOption("complated");
          }}
        >
          Completed
        </p>
      </div>
    </div>
  );
}

export default ToDoList;
