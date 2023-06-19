import "./Grid.css";
import Node from "./Node";
import { useSelector } from "react-redux";

function Grid() {
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

  const tg = () => {
    console.log("Render grid" + maze.grid.length);
    return maze.grid.map((row, rowIndex) => (
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
    ));
  };

  return (
    <div className="grid">
      {tg()}
    </div>
  );
}

export default Grid;
