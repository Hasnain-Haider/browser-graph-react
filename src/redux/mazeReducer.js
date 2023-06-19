import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maze: { grid: [], entrance: [], exit: [], height: 2, width: 2 },
  renderMazeSolution: false,
  mazeSolution: [],
};

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
    resetMaze: (state) => (state = initialState),
  },
});

export const {
  setMaze,
  shouldRenderMazeSolution,
  setMazeSolution,
  resetMaze,
} = mazeSlice.actions;

export default mazeSlice.reducer;
