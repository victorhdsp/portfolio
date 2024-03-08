import { configureStore } from '@reduxjs/toolkit'

import { toastSlice } from '@/features/toast/toastSlice'
import { projectSlice } from '@/features/projects/projectSlice'

export const store = configureStore({
  reducer: {
    toast: toastSlice.reducer,
    project: projectSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch