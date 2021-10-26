import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const counterSlice = createSlice({

  name: 'counter',

  initialState,

  reducers: {

    increment: (state,action) => {
      
     
      state.value = [...state.value ,action.payload]
    },
    decrement: (state,action) => {

      state.value = state.value.filter(v=> v.id !== action.payload)
      
     
      
    },









   


  },
})


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer