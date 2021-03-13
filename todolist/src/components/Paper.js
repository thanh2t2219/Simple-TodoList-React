import React from "react";
import cardboard from "../global/images/cardboard.png";
import paper from "../global/images/paper.png";
import tornEffect from "../global/images/torn-paper-effect.png";
import hinges from "../global/images/hinges.png";
import vertical_line from "../global/images/vertical-line.png";
import ListTask from "./ListTask";
import { PlusOutlined } from "@ant-design/icons";
import Context from "../context/Context";

function Paper(props) {
  return (
    <Context.Consumer>
      {(state) => (
        <div className="paper__container">
          <div className="cardboard__container">
            <img draggable="false" src={cardboard} alt="Cardboard" />
          </div>
          <div className="paper">
            <div className="paper__title-container">
              <div className="paper__title-sub-container">
                <h1>Todo List</h1>

                <div
                  onClick={state.allStates.showAddTaskInput}
                  className="addTask-btn"
                >
                  <PlusOutlined />
                </div>
              </div>
            </div>

            <img
              draggable="false"
              className="paper__torn"
              src={tornEffect}
              alt="Paper Torn Effect"
            />

            <img
              draggable="false"
              className="paper__hinges"
              src={hinges}
              alt="Hinges"
            />

            <img
              draggable="false"
              className="paper__img"
              src={paper}
              alt="Paper"
            />

            <img
              draggable="false"
              className="paper__vertical-line"
              src={vertical_line}
              alt=""
            />
          </div>

          <ListTask />
        </div>
      )}
    </Context.Consumer>
  );
}

export default React.memo(Paper);
