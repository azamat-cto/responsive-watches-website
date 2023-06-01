import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store.ts'

interface CounterState {
  isOpen: boolean
}

const initialState: CounterState = {
  isOpen: false
}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    toggleDrawer: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    }
  }
})

export const { toggleDrawer } = drawerSlice.actions

export const selectDrawer = (state: RootState) => state.drawer.isOpen

export default drawerSlice.reducer
