import { ThunkAction } from "redux-thunk"

// Dispatch overload for redux-thunk
// https://github.com/reduxjs/redux-thunk/pull/278
declare module "redux" {
  /*
   * Overload to add thunk support to Redux's dispatch() function.
   * Useful for react-redux or any other library which could use this type.
   */
  export interface Dispatch<A extends Action<any> = AnyAction> {
    <TReturnType, TState, TExtraThunkArg>(
      thunkAction: ThunkAction<TReturnType, TState, TExtraThunkArg, A>
    ): TReturnType
  }
}
