import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maze: { grid: [], entrance: [], exit: [], height: 2, width: 2 },
  renderMazeSolution: false,
  mazeSolution: [],
  height: 2,
  width: 2,
};

export const getInitialState = () => initialState;

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
    setWidth: (state, action) => {
      state.width = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
  },
});

export const {
  setMaze,
  shouldRenderMazeSolution,
  setMazeSolution,
  resetMaze,
  setHeight,
  setWidth,
} = mazeSlice.actions;

export default mazeSlice.reducer;
