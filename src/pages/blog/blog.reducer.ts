import { createReducer, createAction } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}

// tạo thì cần 1 cái array nên type nó sẽ Post
export const addPost = createAction<Post>('blog/addPost')
// xóa thì cần cái id thì id thì type sẽ là string
export const deletePost = createAction<string>('blog/deletePost')

// show nut edit/cancel
export const startEditingPost = createAction<string>('blog/startEditingPost')
// cancel thì clear nên không cần type nó là null
export const cancelEditingPost = createAction('blog/cancelEditingPost')
export const finishEditingPost = createAction<Post>('blog/finishEditingPost')

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      // immerjs
      // immerjs giúp chúng ta mutate 1 state an toàn
      // action.payload này là dữ liệu mới thêm do mình truyền vào
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(deletePost, (state, action) => {
      // action.payload này là id do mình truyền vào
      const postId = action.payload
      // tìm bài viết trùng với id => trả ra id
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)

      if (foundPostIndex !== -1) {
        // vị trí cần xóa, xóa 1 item
        state.postList.splice(foundPostIndex, 1)
      }
    })
    .addCase(startEditingPost, (state, action) => {
      const postId = action.payload
      // tìm bài post theo id => trả ra toàn bộ
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    })
    .addCase(cancelEditingPost, (state, action) => {
      state.editingPost = null
    })
    .addCase(finishEditingPost, (state, action) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })

      // reset form
      state.editingPost = null
    })
})

export default blogReducer
