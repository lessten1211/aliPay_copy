import { createSlice } from '@reduxjs/toolkit'

export const redBooks = createSlice({
  name: 'redBooks',
  initialState: {
    list:[
      {
        title:'单词',
        content:'内容',
        type:'word',
        id:1
      },      {
        title:'单词',
        content:'内容',
        type:'word',
        id:2
      },{
        title:'单词',
        content:'内容',
        type:'word',
        id:3
      },
    ]
  },
  reducers: {
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default redBooks.reducer