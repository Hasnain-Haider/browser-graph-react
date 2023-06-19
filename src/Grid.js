import "./Grid.css";
import Node from "./Node";
import React from "react";
import { useSelector } from "react-redux";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
    console.debug("Render grid, height=", maze.grid.length);
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
      <TransformWrapper
        initialScale={1}
        initialPositionX={100}
        initialPositionY={100}
        minPositionX={2000}
        maxPositionX={2000}
        minPositionY={-2000}
        maxPositionY={-2000}
        wheel={{ step: 0.08 }}
        doubleClick={{ step: 0.2 }}
        pinch={{ step: 1 }}
        minScale={0.1}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <button className="tool-btn" onClick={() => zoomIn()}>
                Zoom In +
              </button>
              <button className="tool-btn" onClick={() => zoomOut()}>
                Zoom Out-
              </button>
              <button className="tool-btn" onClick={() => resetTransform()}>
                Reset View x
              </button>
            </div>
            <TransformComponent>{tg()}</TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
}

export default Grid;
