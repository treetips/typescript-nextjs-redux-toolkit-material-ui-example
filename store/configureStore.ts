import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import { MakeStore } from "next-redux-wrapper"
import { Env } from "../constants"
import { combinedReducers } from "./reducers"
import { InitialStateType } from "./states"

/**
 * Create redux store
 * @see https://redux-toolkit.js.org/api/configureStore#full-example
 */
export const makeStore: MakeStore = (
  initialState?: InitialStateType
): EnhancedStore => {
  const middlewares = [...getDefaultMiddleware()]
  const store = configureStore({
    reducer: combinedReducers,
    middleware: middlewares,
    devTools: Env.NODE_ENV === "development",
    preloadedState: initialState,
  })
  return store
}
