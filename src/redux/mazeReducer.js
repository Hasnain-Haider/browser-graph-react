import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maze: { grid: [], entrance: [], exit: [], height: 2, width: 2, graph: {}, seed: 0 },
  sliderHeight: 4,
  sliderWidth: 4,
  renderMazeSolution: false,
  mazeSolution: [],
  selectedNodes: [],
};

// export const getInitialState = () => initialState;

export const mazeSlice = createSlice({
  name: "maze",
  initialState,
  reducers: {
    setMaze: (state, action) => {
      state.maze = action.payload;
    },
    shouldRenderMazeSolution: (state, action) => {
      state.mazeSolution = action.payload;
    },
    setMazeSolution: (state, action) => {
      state.mazeSolution = action.payload;
    },
    resetMaze: (state) => {
      state = initialState;
    },
    setSliderWidth: (state, action) => {
      state.sliderWidth = action.payload;
    },
    setSliderHeight: (state, action) => {
      state.sliderHeight = action.payload;
    },

    toggleNodeSelection: (state, action) => {
      const { row, col, _id } = action.payload;
      const index = state.selectedNodes.findIndex(node => node.row === row && node.col === col && node._id === _id);
      if (index !== -1) {
        state.selectedNodes.splice(index, 1);
      } else {
        state.selectedNodes.push({ row, col, _id });
      }
    },
    clearSelectedNodes: (state) => {
      state.selectedNodes = [];
    },
  },
});

export const {
  setMaze,
  shouldRenderMazeSolution,
  setMazeSolution,
  resetMaze,
  setSliderWidth,
  setSliderHeight,
  toggleNodeSelection,
  clearSelectedNodes,
} = mazeSlice.actions;

export default mazeSlice.reducer;