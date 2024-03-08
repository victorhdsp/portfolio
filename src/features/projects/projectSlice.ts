import { createSlice } from '@reduxjs/toolkit'

export interface ProjectSlice {
  current: string,
  filterWord: string,
}

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    current: 'vevalo',
    filterWord: ''
  } as ProjectSlice,
  reducers: {
    selectProject: (state, action) => {
      state.current = action.payload;
    },
    selectFilterWord: (state, action) => {
      state.filterWord = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { selectProject, selectFilterWord } = projectSlice.actions

export default projectSlice.reducer