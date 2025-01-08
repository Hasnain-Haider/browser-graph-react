import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNodeSelection } from "./redux/mazeReducer";
import "./Node.css";

function Node({ row, col, classNameProp }) {
  const dispatch = useDispatch();
  const selectedNodes = useSelector((state) => state.maze.selectedNodes);

  const isSelected = selectedNodes.some(node => node.row === row && node.col === col);

  const handleClick = () => {
    dispatch(toggleNodeSelection({ row, col }));
  };

  // useEffect(() => {
  //   console.log("Selected Nodes:", selectedNodes);
  // }, [selectedNodes]);

  let className = "";
  if (classNameProp) {
    className = `${classNameProp} node`;
  } else {
    className = "node";
  }

  if (isSelected) {
    className = `${className} selected`
  }

  return (
    <div
      className={className}
      onClick={handleClick}
    />
  );
}

export default Node;