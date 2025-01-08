import "./Buttons.css";

import React from "react";
import Button from "./Button";
import { setMaze, clearSelectedNodes } from "../redux/mazeReducer";
import { useDispatch, useSelector } from "react-redux";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap_white.css";

const dev = process.env.NODE_ENV !== "production";
function Buttons() {
  const dispatch = useDispatch();
  let height = useSelector((state) => state.maze.height);
  let width = useSelector((state) => state.maze.width);

  const handleGenerateMaze = (_) => {
    handleClearSelected();
    let authority;
    if (dev) {
      authority = "localhost:8080";
    } else {
      authority = "graph-api.hassu.us";
    }
    const url = `http://${authority}/generatemaze?height=${height}&width=${width}`;
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        dispatch(setMaze(res));
      })
      .catch(alert);
  };

  const handleClearSelected = () => {
    dispatch(clearSelectedNodes());
  };

  return (
      <div className="buttons">
          <Button onClick={handleGenerateMaze} disabled={false}>
              Generate Maze !
          </Button>

          <Button onClick={console.debug} disabled={true}>
              Solve Maze For Me! Coming Soon...
          </Button>

          <Button onClick={handleClearSelected}>Clear Selected</Button>
      </div>
  );
}

export default Buttons;