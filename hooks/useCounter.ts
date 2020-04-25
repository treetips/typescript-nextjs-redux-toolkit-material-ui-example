import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  calculate,
  counterSelector,
  decrement,
  increment,
} from "../store/counter"

type CounterOperators = {
  count: number
  increment: () => void
  decrement: () => void
  calculate: (inputNumber: number) => void
}

/**
 * Counter custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const useCounter = (): Readonly<CounterOperators> => {
  const dispatch = useDispatch()
  const counterState = useSelector(counterSelector)

  return {
    count: counterState.count,
    increment: useCallback(() => dispatch(increment()), [dispatch]),
    decrement: useCallback(() => dispatch(decrement()), [dispatch]),
    calculate: useCallback(
      (inputNumber: number) => {
        dispatch(
          calculate({
            inputNumber: inputNumber,
          })
        )
      },
      [dispatch]
    ),
  }
}
