import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import Context from "../context/Context";

function Task(props) {
  const { task } = props;

  return (
    <Context.Consumer>
      {(state) => (
        <li className="list-task__item">
          <div className="checkbox-container">
            <input
              id={`checkbox-${task.id}`}
              className="checkbox"
              type="checkbox"
              onChange={(e) => state.allStates.onChangeCheckboxHandler(e, task)}
            />
          </div>
          <label
            htmlFor={`checkbox-${task.id}`}
            className="task__text-container"
          >
            {task.done ? (
              <p
                id="done"
                onClick={() => state.allStates.taskDoneOnClickHandler(task)}
              >
                {task.title}
              </p>
            ) : (
              <p onClick={() => state.allStates.taskDoneOnClickHandler(task)}>
                {task.title}
              </p>
            )}
          </label>
          <div className="delete-container">
            <DeleteOutlined className="delete-icon" />
          </div>
        </li>
      )}
    </Context.Consumer>
  );
}

export default React.memo(Task);
