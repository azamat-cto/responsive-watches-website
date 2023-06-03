import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './slices/drawerSlice.ts'
import cartReducer from './slices/cartSlice.ts'
import themeReducer from './slices/themeSlice.ts'

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    cart: cartReducer,
    theme: themeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
