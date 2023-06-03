import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './slices/drawerSlice.ts'
import cartReducer from './slices/cartSlice.ts'

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    cart: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
