import './Grid.css';
import Node from './Node';
import { useEffect, useState } from 'react';

function Grid() {
    const [grid, setGrid] = useState([]);
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

    useEffect(() => {
      fetch("http://graph-api.hassu.us/generatemaze?height=30&width=30")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(res => {
        console.log(res);
        setGrid(res.grid);
      });
    }, []);
    
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