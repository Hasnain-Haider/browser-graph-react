import "./Grid.css";
import Node from "./Node";
import React from "react";
import { useSelector } from "react-redux";


export const Grid = React.forwardRef((props, ref) => {
  const maze = useSelector((state) => state.maze.maze);

  const BOTTOM = "bottom";
  const RIGHT = "right";

  const mapBoundariesToClassNames = (cell, entrance, exit) => {
    const [entranceRow, entranceCol] = entrance;
    const [exitRow, exitCol] = exit;
    const {rowIndex, colIndex, boundaries} = cell;
    let classNames = "";
    for (const boundary of boundaries) {
      if (classNames !== "") {
        classNames = `${classNames} `;
      }
      if (boundary === BOTTOM) {
        classNames = `${classNames}bottom`;
      } else if (boundary === RIGHT) {
        classNames = `${classNames}right`;
      }
    }
    if (entranceRow === rowIndex -1  && entranceCol === colIndex -1 ) {
      classNames = `${classNames} entrance`;
    }
    if (exitRow === rowIndex -1  && exitCol === colIndex -1 ) {
      classNames = `${classNames} exit`;
    }

    return classNames;
  };

  let mazeToRender = [];
  for (let i = 0; i < maze.height + 1; i++) {
    mazeToRender[i] = new Array(maze.width + 1).fill({boundaries: []});
  }

  if (maze.grid.length !== 0) {
    let { height, width, grid } = maze;
    for (let r = 0; r < height + 1; r++) {
      for (let c = 0; c < width + 1; c++) {
        if (c > 0 && r > 0) {
          mazeToRender[r][c] = grid[r - 1][c - 1];
        } else {
          let boundaries = [RIGHT, BOTTOM];
          if (r === 0) {
            boundaries = boundaries.filter((x) => x === BOTTOM);
          }
          if (c === 0) {
            boundaries = boundaries.filter((x) => x === RIGHT);
          }
          mazeToRender[r][c] = { boundaries };
        }
      }
    }
    let [er, ec] = maze.entrance;
    if (height >= width) {
      mazeToRender[0][ec + 1] = { boundaries: [] };
    } else {
      mazeToRender[er + 1][0] = { boundaries: [] };
    }
  }
  const { entrance, exit } = maze;

  console.log({maze});
  // console.log(maze.grid)
  console.log({mazeToRender});

  return (
    <div ref={ref} className="grid">
      {mazeToRender.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Node
              classNameProp={mapBoundariesToClassNames( {...cell, rowIndex, colIndex}, entrance, exit)}
              _id={cell.id}
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