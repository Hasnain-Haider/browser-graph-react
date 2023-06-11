import './Grid.css';
import Node from './Node';

function Grid() {
    const row = 5;
    const col = 5;
    const cols = [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
      ];

    const renderGrid = () => cols.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
        {
            row.map((cell, colIndex) => <Node col={colIndex} row={rowIndex} key={`${colIndex},${rowIndex}`}/>)
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