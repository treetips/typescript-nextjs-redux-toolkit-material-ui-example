import { HYDRATE } from "next-redux-wrapper"
import { combineReducers } from "redux"
import { counterReducer } from "./counter"
import { pageReducer } from "./page"
import { todoReducer } from "./todo"

/**
 * Combine reducers
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript
 */
export const combinedReducer = combineReducers({
  counter: counterReducer,
  page: pageReducer,
  todo: todoReducer,
})

export type RootState = ReturnType<typeof combinedReducer>

// https://github.com/kirill-konshin/next-redux-wrapper#state-reconciliation-during-hydration
export const rootReducer = (state: any, action: any) => {
    // If you want to use the server-side state on the client,
    // you need to merge them in the HYDRATE action !!
  if (action.type === HYDRATE) {
    // Merge(Overwrite) server state and client state.
    const nextState = {
      ...state, // server-side state
      ...action.payload, // client-side state
    }
    // Individually override the server state that you want to override the client state.
    // Redux Toolkit is readonly state, so it use Object.assign to force override
    if (state.page) Object.assign(nextState, { page: state.page })
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}
