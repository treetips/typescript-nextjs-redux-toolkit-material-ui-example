import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../reducers"
import { adapter, TodoState } from "./state"

const { selectAll, selectEntities } = adapter.getSelectors()

const featureStateSelector = (state: RootState) => state.todo

const entitiesSelector = createSelector(featureStateSelector, selectEntities)

/**
 * isFetching selector
 */
export const isFetchingSelector = createSelector(
  featureStateSelector,
  (state: TodoState) => state?.isFetching
)

/**
 * selectedId selector
 */
export const selectedIdSelector = createSelector(
  featureStateSelector,
  (state: TodoState) => state?.selectedId
)

/**
 * all todo selector
 */
export const allTodoSelector = createSelector(featureStateSelector, selectAll)

/**
 * todo selector
 */
export const todoSelector = createSelector(
  entitiesSelector,
  selectedIdSelector,
  (entities, id) => (id ? entities[id] || null : null)
)
