import "./index.css";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import React from "react";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap_white.css";
import { useDispatch } from "react-redux";
import {setSliderHeight, setSliderWidth} from "../redux/mazeReducer";

export default function Sliders() {
  const dispatch = useDispatch();

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
          defaultValue={4}
          onChange={(v) => dispatch(setSliderHeight(v))}
          handleRender={handleRenderHeight}
        />
      </div>
      <div className="slider">
        <p>Width</p>
        <Slider
          min={2}
          max={30}
          defaultValue={4}
          onChange={(v) => dispatch(setSliderWidth(v))}
          handleRender={handleRenderWidth}
        />
      </div>
    </div>
  );
}
