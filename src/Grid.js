import './Grid.css';
import Node from './Node';
import { useEffect, useState } from 'react';

function Grid({grid}) {
    const mapBoundariesToClassNames = cell => {
      let classNames = "";
      for (const boundary of cell.bounds) {
        if (classNames !== "") {
          classNames = `${classNames} `;
        }
        if (boundary === 'B') {
          classNames = `${classNames}bottom`;
        } else if (boundary === 'R') {
          classNames = `${classNames}right`;
        }
      }
      return classNames;
    }


    
    const renderGrid = () => grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
        {
            row.map((cell, colIndex) => <Node className={mapBoundariesToClassNames(cell)} col={colIndex} row={rowIndex} key={`${colIndex},${rowIndex}`}/>)
        }
        </div>
    ));

  return (
    <div className="grid">
        { renderGrid() }
    </div>
  );
}



export default Grid;