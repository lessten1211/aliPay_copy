import { configureStore } from '@reduxjs/toolkit'
import  redBooks  from './feature/redBook'
import users from './feature/users'
export default configureStore({
  reducer: {
    redBooks:redBooks,
    users:users
  }
})