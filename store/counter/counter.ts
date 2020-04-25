import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateType } from "../states"

//---------------------------------------------------
// Payload
//---------------------------------------------------
export type CounterPayloadType = {
  inputNumber: number
}

//---------------------------------------------------
// State
//---------------------------------------------------
export type CounterStateType = {
  count: number
}

const initialState: CounterStateType = {
  count: 1,
}

//---------------------------------------------------
// Slice
//---------------------------------------------------
const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterStateType): CounterStateType => {
      return {
        ...state,
        count: state.count + 1,
      }
    },
    decrement: (state: CounterStateType): CounterStateType => {
      return {
        ...state,
        count: state.count - 1,
      }
    },
    calculate: (
      state: CounterStateType,
      action: PayloadAction<CounterPayloadType>
    ): CounterStateType => {
      const { payload } = action
      return {
        ...state,
        count: state.count + payload.inputNumber,
      }
    },
  },
})

//---------------------------------------------------
// Reducer
//---------------------------------------------------
export const counterReducer = slice.reducer

//---------------------------------------------------
// Action
//---------------------------------------------------
export const { increment, decrement, calculate } = slice.actions

//---------------------------------------------------
// Selector
//---------------------------------------------------
export const counterSelector = (state: InitialStateType): CounterStateType =>
  state.counter
