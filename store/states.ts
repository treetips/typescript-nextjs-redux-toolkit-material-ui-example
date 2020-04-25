import { CounterStateType } from "./counter"
import { PageStateType } from "./page"

/**
 * Initial state tree
 */
export type InitialStateType = {
  counter: Readonly<CounterStateType>
  page: Readonly<PageStateType>
}
