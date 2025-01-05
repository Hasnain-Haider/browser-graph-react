import './App.css';
import Grid from './Grid';
import Controls from './Controls';
import { useEffect, useState } from 'react';

const DEFAULT_HEIGHT = 10;
const DEFAULT_WIDTH = 10;

const dev = true;
function App() {

  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [getMaze, setGetMaze] = useState(false);
  const [grid, setGrid] = useState([]);
  const [clickedNodes, setClickedNodes] = useState([]);

  const setWidthApp = v => setWidth(v);

  const setHeightApp = v => setHeight(v);

  const setGetMazeApp = v => setGetMaze(true);


  function sortNodes(nodes) {
    return nodes.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });
  }

  const clearSelected = () => setClickedNodes([]);

  const handleNodeClick = (row, col) => {
    const nodeIndex = clickedNodes.findIndex(node => node[0] === row && node[1] === col);
    let nds = [];
    if (nodeIndex !== -1) {
      nds = clickedNodes.filter((_, index) => index !== nodeIndex);
    } else {
      nds = [...clickedNodes, [ row, col ]];
    }
    nds = sortNodes(nds);
    setClickedNodes(nds);
    console.log("clicked nodes " + JSON.stringify(nds));
  };

  useEffect(() => {
    if (getMaze) {
      let authority;
      if (dev) {
        authority = "localhost:8080";
      } else {
        authority = "graph-api.hassu.us";
      }
      const url = `http://${authority}/generatemaze?height=${height}&width=${width}`
      fetch(url)
      .then(response => response.json())
      .then(res => {
        setGrid(res.grid);
        console.log(res);
      })
      .catch(e => {
        alert(e);
      });
      console.debug(`Service was called, height:${height} width:${width}`);
      setGetMaze(false);
    }
    console.log(`App was re rendered`);
  }, [getMaze]);

  return (
    <div className="App">
      <Grid grid={grid} clickedNodes={clickedNodes} onNodeClick={handleNodeClick} />
      <Controls height={height} width={width} setHeight={setHeightApp} setWidth={setWidthApp} setGetMaze={setGetMazeApp} clearSelected={clearSelected} />
    </div>
  );
}

export default App;