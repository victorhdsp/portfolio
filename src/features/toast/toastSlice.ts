import { createSlice } from '@reduxjs/toolkit'

export interface ToastSlice {
  type: 'clipboard' | 'success' | 'error',
  opened: boolean
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    type: 'clipboard',
    opened: false
  } as ToastSlice,
  reducers: {
    open: (state, action) => {
      state.opened = true;
      state.type = action.payload.type;
    },
    close: (state) => {
      state.opened = false;
    }
  }
})

// Action creators are generated for each case reducer function
export const { open, close } = toastSlice.actions

export default toastSlice.reducer