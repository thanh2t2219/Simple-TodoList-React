import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import Context from "../context/Context";

function AddTask(props) {
  return (
    <Context.Consumer>
      {(state) => (
        <div
          className={`${
            state.allStates.leftOut ? "add-task" : "add-task add-task__gone"
          }`}
        >
          <form onSubmit={(value) => state.allStates.formSubmitHandler(value)}>
            <input
              value={state.allStates.task}
              onChange={(value) => state.allStates.inputHandler(value)}
              type="text"
              placeholder="Add Your Task Here..."
            />

            <button
              onClick={() =>
                state.allStates.addTaskHandler(state.allStates.task)
              }
              type="submit"
            >
              +
            </button>
          </form>

          <button
            onClick={state.allStates.hideAddTaskInput}
            className="leftout-btn"
          >
            <LeftOutlined
              style={{
                color: "white",
                fontSize: "1.2rem",
                backgroundColor: "#252729",
                cursor: "pointer",
              }}
            />
          </button>
        </div>
      )}
    </Context.Consumer>
  );
}

export default React.memo(AddTask);
