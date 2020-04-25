import { combineReducers } from "redux"
import { counterReducer } from "./counter"
import { pageReducer } from "./page"
import { InitialStateType } from "./states"

export const combinedReducers = combineReducers<InitialStateType>({
  counter: counterReducer,
  page: pageReducer,
})
