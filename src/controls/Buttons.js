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
  let height = useSelector((state) => state.maze.sliderHeight);
  let width = useSelector((state) => state.maze.sliderWidth);
  let nodesSelected = useSelector((state) => state.maze.selectedNodes);
  let graph = useSelector((state) => state.maze.maze.graph);
  let seed = useSelector(state => state.maze.maze.seed);

  const handleGenerateMaze = (_) => {
    handleClearSelected();
    let authority;
    if (dev) {
      authority = "localhost:8080";
    } else {
      authority = "graph-api.hassu.us";
    }
    const url = `http://${authority}/maze/generate?height=${height}&width=${width}`;
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        dispatch(setMaze(res));
      })
      .catch(alert);
  };

  const handleSubmitSolution = (_) => {
      let authority;
        if (dev) {
            authority = "localhost:8080";
        } else {
            authority = "graph-api.hassu.us";
        }
        const url = `http://${authority}/maze/solve`;
        const nodes = nodesSelected.map(node => { return { row: node.row, col: node.col, id: node._id } });
        const payload = {
            nodes,
            height,
            width,
            seed,
            graph
        };

      console.log({payload});

      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }

  const handleClearSelected = () => {
    dispatch(clearSelectedNodes());
  };

  return (
      <div className="buttons">
          <Button onClick={handleGenerateMaze} disabled={false}>
              Generate Maze !
          </Button>

          <Button onClick={handleSubmitSolution} disabled={false}>
              Solve Maze !
          </Button>

          <Button onClick={handleClearSelected}>Clear Selected</Button>
      </div>
  );
}

export default Buttons;