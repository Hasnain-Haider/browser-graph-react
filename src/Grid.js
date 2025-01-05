import './Grid.css';
import Node from './Node';

function Grid({grid, clickedNodes, onNodeClick}) {
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
            row.map((cell, colIndex) => {
              const isSelected = clickedNodes.some(node => node[0] === rowIndex && node[1] === colIndex);
              return <Node className={mapBoundariesToClassNames(cell)} col={colIndex} row={rowIndex}
                           key={`${colIndex},${rowIndex}`} onClick={onNodeClick} isSelected={isSelected} />
            })
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