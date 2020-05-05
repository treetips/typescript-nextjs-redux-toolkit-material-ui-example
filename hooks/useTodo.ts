import { unwrapResult } from "@reduxjs/toolkit"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Todo } from "../model"
import {
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
  fetchAllTodosAction,
  fetchTodoAction,
} from "../store/todo/action"
import {
  allTodoSelector,
  isFetchingSelector,
  todoSelector,
} from "../store/todo/selector"

/**
 * TODO custom hook
 */
export const useTodo = () => {
  const dispatch = useDispatch()
  const isFetching = useSelector(isFetchingSelector)
  const todo = useSelector(todoSelector)
  const todos = useSelector(allTodoSelector)?.map((t) => ({
    id: t.id,
    name: t.name,
    complete: t.complete,
    createdAt: t.createdAt,
    updatedAt: t.updatedAt,
  }))

  const fetchAllTodos = useCallback(
    (arg?: { offset?: number; limit?: number }) => {
      return dispatch(
        fetchAllTodosAction({
          offset: arg?.offset || 0,
          limit: arg?.limit || 5,
        })
      ).then(unwrapResult)
    },
    [dispatch]
  )

  const fetchTodo = useCallback(
    (arg: { id: number }) => {
      return dispatch(fetchTodoAction(arg)).then(unwrapResult)
    },
    [dispatch]
  )

  const addTodo = useCallback(
    (arg: { todo: Todo }) => {
      return dispatch(addTodoAction(arg)).then(unwrapResult)
    },
    [dispatch]
  )

  const editTodo = useCallback(
    (arg: { todo: Todo }) => {
      return dispatch(editTodoAction(arg)).then(unwrapResult)
    },
    [dispatch]
  )

  const deleteTodo = useCallback(
    (arg: { id: number }) => {
      return dispatch(deleteTodoAction(arg)).then(unwrapResult)
    },
    [dispatch]
  )

  return {
    isFetching,
    todos,
    todo,
    fetchAllTodos,
    fetchTodo,
    addTodo,
    editTodo,
    deleteTodo,
  } as const
}
