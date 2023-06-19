import "./Controls.css";

import React from "react";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import { setMaze } from "./redux/mazeReducer";
import { useDispatch } from "react-redux";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap_white.css";

const DEFAULT_HEIGHT = 10;
const DEFAULT_WIDTH = 10;
const dev = true;
function Controls() {
  let height = DEFAULT_HEIGHT;
  let width = DEFAULT_WIDTH;

  const Button = ({ onClick, children, disabled }) => {
    console.debug("render a button");
    return (
      <button
        type="button"
        className="maze-btn"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };

  const handleRenderHeight = (node, handleProps) => {
    return (
      <Tooltip
        overlayInnerStyle={{ minHeight: "auto" }}
        overlay={`Height=${handleProps.value}`}
        placement="top"
      >
        {node}
      </Tooltip>
    );
  };

  const handleRenderWidth = (node, handleProps) => {
    return (
      <Tooltip
        overlayInnerStyle={{ minHeight: "auto" }}
        overlay={`Width=${handleProps.value}`}
        placement="top"
      >
        {node}
      </Tooltip>
    );
  };

  const dispatch = useDispatch();

  const handleGenerateMaze = (val) => {
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
        console.debug(`Service was called, height:${height} width:${width}`);
        console.debug(res);
        dispatch(setMaze(res));
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div className="controls">
      <div className="sliders">
        <div className="slider">
          <p>Height</p>
          <Slider
            min={2}
            max={100}
            defaultValue={height}
            onChange={(v) => (height = v)}
            handleRender={handleRenderHeight}
          />
        </div>
        <div className="slider">
          <p>Width</p>
          <Slider
            min={2}
            max={100}
            defaultValue={width}
            onChange={(v) => (width = v)}
            handleRender={handleRenderWidth}
          />
        </div>
      </div>
      <div className="buttons">
        <Button onClick={handleGenerateMaze} disabled={false}>
          Generate Maze !
        </Button>

        <Button onClick={console.debug} disabled={true}>
          Solve Maze For Me!
        </Button>
      </div>
    </div>
  );
}

export default Controls;
