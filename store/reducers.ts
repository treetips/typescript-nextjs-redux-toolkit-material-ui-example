import { combineReducers } from "redux"
import { counterReducer } from "./counter"
import { pageReducer } from "./page"
import { todoReducer } from "./todo"

/**
 * Combine reducers
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript
 */
export const rootReducer = combineReducers({
  counter: counterReducer,
  page: pageReducer,
  todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>
