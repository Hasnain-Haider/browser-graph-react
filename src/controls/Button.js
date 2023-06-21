import "./Button.css";
import React from "react";

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