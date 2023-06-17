import './Controls.css';

import React from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css'
import "rc-tooltip/assets/bootstrap_white.css";


// const handle = props => {
//   const { value, dragging, index, ...restProps } = props;
//   console.log(props);
//   return (
    
//       <Handle value={value} {...restProps} />

//   );
// };




function Controls({height, width, setHeight, setWidth, setGetMaze}) {


const Button = ({ onClick, children }) => {
    return (
      <button type="button" className="generate-maze-btn" onClick={onClick}>
        {children}
      </button>
    );
  };

const handleRenderHeight = (node, handleProps) => {
    return (
        <Tooltip
          overlayInnerStyle={{ minHeight: "auto" }}
          overlay={ `Height=${handleProps.value}`}
          placement="top"
        >
          {node}
        </Tooltip>
      );
    }

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
    }


  return (
    <div className="controls">
        <div className="sliders">
            <div className="slider">
                <p>Height</p>
                <Slider min={2} max={100} defaultValue={height} onChange={setHeight} handleRender={handleRenderHeight}/>
            </div>
            <div className="slider">
                <p>Width</p>
                <Slider min={2} max={100} defaultValue={width} onChange={setWidth} handleRender={handleRenderWidth}/>
            </div>
        </div>
        <div className="buttons">
            <div>
                <Button onClick={setGetMaze}>Generate Maze !</Button>
            </div>
        </div>
    </div>
  );
  
}

export default Controls;
