import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import { MakeStore } from "next-redux-wrapper"
import { Env } from "../constants"
import { rootReducer, RootState } from "./reducers"

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#correct-typings-for-the-dispatch-type
 */
const middlewares = [...getDefaultMiddleware<RootState>()]

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: Env.NODE_ENV === "development",
})

export const makeStore: MakeStore = (_?: RootState): EnhancedStore => store
