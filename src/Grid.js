import "./Grid.css";
import Node from "./Node";
import React from "react";
import { useSelector } from "react-redux";

export const Grid = React.forwardRef((props, ref) => {
  const maze = useSelector((state) => state.maze.maze);

  const mapBoundariesToClassNames = (cell) => {
    let classNames = "";
    for (const boundary of cell.bounds) {
      if (classNames !== "") {
        classNames = `${classNames} `;
      }
      if (boundary === "B") {
        classNames = `${classNames}bottom`;
      } else if (boundary === "R") {
        classNames = `${classNames}right`;
      }
    }
    return classNames;
  };

  let mazeToRender = new Array(maze.height + 1);
  mazeToRender.fill([], 0, maze.height + 1);
  for (let i in mazeToRender) {
    mazeToRender[i] = new Array(maze.width + 1);
  }

  if (maze.grid.length !== 0) {
    let { height, width, grid } = maze;
    for (let r = 0; r < height + 1; r++) {
      for (let c = 0; c < width + 1; c++) {
        if (c !== 0 && r !== 0) {
          mazeToRender[r][c] = grid[r - 1][c - 1];
        } else {
          let bounds = ["R", "B"];
          if (r === 0) {
            bounds = bounds.filter((x) => x === "B");
          }
          if (c === 0) {
            bounds = bounds.filter((x) => x === "R");
          }
          mazeToRender[r][c] = { bounds };
        }
      }
    }
    let [er, ec] = maze.entrance;
    if (height >= width) {
      mazeToRender[0][ec + 1] = { bounds: [] };
    } else {
      mazeToRender[er + 1][0] = { bounds: [] };
    }
  }

  return (
    <div ref={ref} className="grid">
      {maze.grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Node
              className={mapBoundariesToClassNames(cell)}
              col={colIndex}
              row={rowIndex}
              key={`${colIndex},${rowIndex}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
});

export default Grid;
