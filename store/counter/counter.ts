import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FeatureKey } from "../featureKey"
import { RootState } from "../reducers"

/**
 * Payload
 */
export type CounterPayload = {
  inputNumber: number
}

/**
 * State
 */
export type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 1,
}

/**
 * Slice
 * @see https://redux-toolkit.js.org/api/createslice
 */
const slice = createSlice({
  name: FeatureKey.COUNTER,
  initialState,
  reducers: {
    increment: (state: CounterState): CounterState => {
      return {
        ...state,
        count: state.count + 1,
      }
    },
    decrement: (state: CounterState): CounterState => {
      return {
        ...state,
        count: state.count - 1,
      }
    },
    calculate: (
      state: CounterState,
      action: PayloadAction<CounterPayload>
    ): CounterState => {
      const { payload } = action
      return {
        ...state,
        count: state.count + payload.inputNumber,
      }
    },
  },
})

/**
 * Reducer
 */
export const counterReducer = slice.reducer

/**
 * Action
 */
export const { increment, decrement, calculate } = slice.actions

/**
 * Selector
 * @param state CounterState
 */
export const counterSelector = (state: RootState): CounterState => state.counter
