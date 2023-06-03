import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store.ts'

interface CartState {
  isOpen: boolean
}

const initialState: CartState = {
  isOpen: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    }
  }
})

export const { toggleCart } = cartSlice.actions

export const selectDrawer = (state: RootState) => state.cart.isOpen

export default cartSlice.reducer
