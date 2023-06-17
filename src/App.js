import './App.css';
import Grid from './Grid';
import Controls from './Controls';
import { useEffect, useState } from 'react';

const DEFAULT_HEIGHT = 10;
const DEFAULT_WIDTH = 10;

function App() {

  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [getMaze, setGetMaze] = useState(true);
  const [grid, setGrid] = useState([]);


  const curlGraphService = (height, width) => fetch(`http://graph-api.hassu.us/generatemaze?height=${height}&width=${width}`)
    .then(response => {
        if (response.ok) {
          return response.json()
        } else if (response.status === 409) {
          alert('You have sent too many requests, please try again later');
        }
        throw response;
      })

     const setWidthApp = v => {
        console.log('set wifth app to ' + v);
        setWidth(v);
     }
      
     const setHeightApp = v => {
        console.log('set heigth app to ' + v);
        setHeight(v);
     }
     
     const setGetMazeApp = v => {
      setGetMaze(v);
     }


  useEffect(() => {
    if (getMaze) {
      // dev
      // fetch(`http://localhost:8080/generatemaze?height=${height}&width=${width}`)
      // .then(response => {
      //   if (response.ok) {
      //     return response.json()
      //   }
      //   throw response;
      // })
      curlGraphService(height, width)
      .then(res => {
        setGrid(res.grid);
        console.log(res);
      });
      console.log(`Service was called, height:${height} width:${width}`);
    }
    setGetMaze(false);
    console.log(`App was re rendered, height:${height} width:${width}`);
  }, [width, height, getMaze]);
  
  return (
    <div className="App">
      <Grid grid={grid} />
      <Controls height={height} width={width} setHeight={setHeightApp} setWidth={setWidthApp} setGetMaze={setGetMazeApp} />
    </div>
  );
}

export default App;
