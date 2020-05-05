import { createEntityAdapter, EntityState } from "@reduxjs/toolkit"
import { Todo } from "../../model"

export interface TodoState extends EntityState<Todo> {
  isFetching: boolean
  selectedId: number | null
}

export const adapter = createEntityAdapter<Todo>({
  selectId: (todo: Todo) => todo.id,
})

export const initialState: TodoState = adapter.getInitialState({
  isFetching: false,
  selectedId: null,
})
