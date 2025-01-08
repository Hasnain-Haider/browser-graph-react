import "./ZoomableGrid.css";
import React, { useRef } from "react";
import Grid from "./Grid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ReactToPrint from "react-to-print";

function ZoomableGrid() {
  let componentRef = useRef(null);
  return (
    <div className="zoomable-grid">
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={200}
        wheel={{ step: 0.06 }}
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
              <ReactToPrint
                className="tool-btn"
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
              />
            </div>

            <TransformComponent>
              <Grid ref={componentRef} />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
}

export default ZoomableGrid;
