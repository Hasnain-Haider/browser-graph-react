import "./index.css";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import React from "react";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap_white.css";
import { useDispatch } from "react-redux";
import { setHeight, setWidth, getInitialState } from "../redux/mazeReducer";
const DEFAULT_HEIGHT = getInitialState().height;
const DEFAULT_WIDTH = getInitialState().width;

export default function Sliders() {
  const dispatch = useDispatch();

  let width = DEFAULT_HEIGHT;
  let height = DEFAULT_WIDTH;

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

  return (
    <div className="sliders">
      <div className="slider">
        <p>Height</p>
        <Slider
          min={2}
          max={30}
          defaultValue={height}
          onChange={(v) => dispatch(setHeight(v))}
          handleRender={handleRenderHeight}
        />
      </div>
      <div className="slider">
        <p>Width</p>
        <Slider
          min={2}
          max={30}
          defaultValue={width}
          onChange={(v) => dispatch(setWidth(v))}
          handleRender={handleRenderWidth}
        />
      </div>
    </div>
  );
}
