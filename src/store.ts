import { configureStore } from '@reduxjs/toolkit'
import blogReducer from 'pages/blog/blog.reducer'

export const store = configureStore({
  reducer: { blog: blogReducer }
})

// 2 thằng phục vụ cho typescript
// lấy RootState và AppDispatch từ store của chúng ta
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// step
// blog.type
// blog contrants
// blog.reducer
// store
// postList
