import './App.css';
import ZoomableGrid from './ZoomableGrid';
import Controls from './controls';
import React from "react";

function App() {
  return (
    <div className="App">
      <ZoomableGrid />
      <Controls />
    </div>
  );
}

export default App;
