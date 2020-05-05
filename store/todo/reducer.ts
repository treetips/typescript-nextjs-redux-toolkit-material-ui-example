import { ActionReducerMapBuilder, createReducer } from "@reduxjs/toolkit"
import {
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
  fetchAllTodosAction,
  fetchTodoAction,
} from "./action"
import { adapter, initialState, TodoState } from "./state"

/**
 * TODO reducer
 */
export const todoReducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<TodoState>) =>
    builder
      .addCase(fetchAllTodosAction.pending, (state) => {
        return { ...state, isFetching: true }
      })
      .addCase(fetchAllTodosAction.fulfilled, (state, action) => {
        const { todos } = action.payload
        return adapter.setAll({ ...state, isFetching: false }, todos)
      })
      .addCase(fetchAllTodosAction.rejected, (state) => {
        return { ...state, isFetching: false }
      })
      //-------------------------------------------------------------------------------
      .addCase(fetchTodoAction.pending, (state, action) => {
        const { id } = action.meta.arg
        return { ...state, isFetching: true, selectedId: id }
      })
      .addCase(fetchTodoAction.fulfilled, (state, action) => {
        const { todo } = action.payload
        return adapter.upsertOne({ ...state, isFetching: false }, todo)
      })
      .addCase(fetchTodoAction.rejected, (state) => {
        return { ...state, isFetching: false }
      })
      //-------------------------------------------------------------------------------
      .addCase(addTodoAction.pending, (state, action) => {
        const { todo } = action.meta.arg
        return { ...state, isFetching: true, selectedId: todo?.id }
      })
      .addCase(addTodoAction.fulfilled, (state, action) => {
        const { todo } = action.payload
        return adapter.addOne({ ...state, isFetching: false }, todo)
      })
      .addCase(addTodoAction.rejected, (state) => {
        return { ...state, isFetching: false }
      })
      //-------------------------------------------------------------------------------
      .addCase(editTodoAction.pending, (state, action) => {
        const { todo } = action.meta.arg
        return { ...state, isFetching: true, selectedId: todo?.id }
      })
      .addCase(editTodoAction.fulfilled, (state, action) => {
        const { todo } = action.payload
        return adapter.updateOne(
          { ...state, isFetching: false },
          {
            id: todo.id,
            changes: todo,
          }
        )
      })
      .addCase(editTodoAction.rejected, (state) => {
        return { ...state, isFetching: false }
      })
      //-------------------------------------------------------------------------------
      .addCase(deleteTodoAction.pending, (state, action) => {
        const { id } = action.meta.arg
        return { ...state, isFetching: true, selectedId: id }
      })
      .addCase(deleteTodoAction.fulfilled, (state, action) => {
        const { id } = action.meta.arg
        return adapter.removeOne({ ...state, isFetching: false }, id)
      })
      .addCase(deleteTodoAction.rejected, (state) => {
        return { ...state, isFetching: false }
      })
)
