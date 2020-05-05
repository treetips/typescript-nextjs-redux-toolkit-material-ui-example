import { createAsyncThunk } from "@reduxjs/toolkit"
import { Todo } from "../../model"
import { FeatureKey } from "../featureKey"

/**
 * Fetch all todo action
 */
export const fetchAllTodosAction = createAsyncThunk(
  `${FeatureKey.TODO}/fetchAll`,
  async (arg: { offset: number; limit: number }) => {
    const { offset, limit } = arg
    const url = `/api/todo?offset=${offset}&limit=${limit}`
    const result: Todo[] = await fetch(url, {
      method: "get",
    }).then((response: Response) => response.json())
    return { todos: result }
  }
)

/**
 * Fetch todo action
 */
export const fetchTodoAction = createAsyncThunk(
  `${FeatureKey.TODO}/fetch`,
  async (arg: { id: number }) => {
    const { id } = arg
    const url = `/api/todo/${id}`
    const result: Todo = await fetch(url, {
      method: "get",
    }).then((response: Response) => response.json())
    return { todo: result }
  }
)

/**
 * Add todo action
 */
export const addTodoAction = createAsyncThunk(
  `${FeatureKey.TODO}/add`,
  async (arg: { todo: Todo }) => {
    const { todo } = arg
    const url = `/api/todo`
    const result: Todo = await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then((response: Response) => response.json())
    return { todo: result }
  }
)

/**
 * Edit todo action
 */
export const editTodoAction = createAsyncThunk(
  `${FeatureKey.TODO}/edit`,
  async (arg: { todo: Todo }) => {
    const { todo } = arg
    const url = `/api/todo/${todo.id}`
    const result: Todo = await fetch(url, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then((response: Response) => response.json())
    return { todo: result }
  }
)

/**
 * Delete todo action
 */
export const deleteTodoAction = createAsyncThunk(
  `${FeatureKey.TODO}/delete`,
  async (arg: { id: number }) => {
    const { id } = arg
    const url = `/api/todo/${id}`
    await fetch(url, {
      method: "delete",
    })
  }
)
