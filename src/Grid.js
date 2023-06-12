import './Grid.css';
import Node from './Node';
import { useEffect, useState } from 'react';

function Grid() {
    const [grid, setGrid] = useState([]);
    // const { height, width, grid } = ApiCall;
    // for (const x of Array(height).keys()) {
    //     gridArray.push([]);
    // }

    // let i = 0;
    // for (const row of grid) {
    //   let array = gridArray[i];
    //   for (const node of row) {
    //     array.push(node.bounds);
    //   }
    //   i++;
    // }


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
      // fetch("http://localhost:8080/generatemaze")
      fetch("http://graph-service:8080/generatemaze")
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

function get(node) {
  /*
          "id": "0,0",
          "boundaries": [],
          "row": 0,
          "col": 0
  */

}

export default Grid;