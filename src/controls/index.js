import "./index.css";

import React from "react";
import Buttons from './Buttons';
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap_white.css";

import Sliders from "./Sliders";

function Controls() {
  const render = _ => {
    console.debug("in s");
    return(    
    <div className="controls">
      <Sliders />
      <Buttons/>
  </div>);
  }
  return render();
}

export default Controls;
