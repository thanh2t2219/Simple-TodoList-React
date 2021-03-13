import React from "react";
import Context from "../context/Context";
import Task from "./Task";

function ListTask(props) {
  return (
    <Context.Consumer>
      {(state) => (
        <div className="list-task">
          <ul>
            {state.allStates.listTask.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </ul>
        </div>
      )}
    </Context.Consumer>
  );
}

export default React.memo(ListTask);
