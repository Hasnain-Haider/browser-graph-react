import "./Button.css";

import React from "react";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap_white.css";

function Button({onClick, children, disabled}) {
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
}

export default Button;