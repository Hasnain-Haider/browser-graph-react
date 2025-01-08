import "./Node.css";
import React from "react";

function Node(props) {
  let className = "";
  if (props.className) {
    className = `${props.className} node`;
  } else {
    className = "node";
  }
  if (props.isSelected) {
    className = `${className} selected`;
  }
  return (
    <div
      className={className}
      row={props.row}
      col={props.col}
      id={`${props.row},${props.col}`}
    />
  );
}

export default Node;
