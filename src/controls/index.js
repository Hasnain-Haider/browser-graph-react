import "./index.css";

import React from "react";
import Buttons from './Buttons';
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap_white.css";

import Sliders from "./Sliders";

function Controls() {
    return(    
    <div className="controls">
      <Sliders />
      <Buttons/>
  </div>);
}

export default Controls;
