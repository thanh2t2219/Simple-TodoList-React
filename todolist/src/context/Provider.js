import React, { useState } from "react";
import Context from "./Context";
import * as uuid from "uuid";

function Reducer(props) {
  const [listTask, setListTask] = useState([]);
  const [leftOut, setLeftOut] = useState(false);
  const [task, setTask] = useState("");

  const showAddTaskInput = () => {
    setLeftOut(true);
  };

  const hideAddTaskInput = () => {
    setLeftOut(false);
  };

  const inputHandler = (e) => {
    const value = e.target.value;
    setTask(value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const addTaskHandler = (task) => {
    if (task !== "") {
      const newTask = {
        id: uuid.v4(),
        title: task,
        done: false,
      };

      const newList = [...listTask];
      newList.push(newTask);
      setListTask(newList);

      setTask("");
    }
  };

  const onChangeCheckboxHandler = (e, task) => {
    task.done = e.target.checked;
  };

  const taskDoneOnClickHandler = (task) => {
    const index = listTask.findIndex((x) => x.id === task.id);

    if (index < 0) return;
    task.done = !task.done;
  };

  const stateCombine = {
    allStates: {
      listTask,
      setListTask,
      leftOut,
      showAddTaskInput,
      hideAddTaskInput,
      inputHandler,
      addTaskHandler,
      task,
      formSubmitHandler,
      taskDoneOnClickHandler,
      onChangeCheckboxHandler,
    },
  };

  return (
    <Context.Provider value={stateCombine}>{props.children}</Context.Provider>
  );
}

export default Reducer;
