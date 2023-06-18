import './App.css';
import Grid from './Grid';
import Controls from './Controls';
import { useEffect, useState } from 'react';

const DEFAULT_HEIGHT = 10;
const DEFAULT_WIDTH = 10;

const dev = false;
function App() {

  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [getMaze, setGetMaze] = useState(false);
  const [grid, setGrid] = useState([]);

  const setWidthApp = v => setWidth(v);
  
  const setHeightApp = v => setHeight(v);
  
  const setGetMazeApp = v => setGetMaze(true);

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
      <Grid grid={grid} />
      <Controls height={height} width={width} setHeight={setHeightApp} setWidth={setWidthApp} setGetMaze={setGetMazeApp} />
    </div>
  );
}

export default App;
