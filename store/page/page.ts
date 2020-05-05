import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Page } from "../../constants"
import { FeatureKey } from "../featureKey"
import { RootState } from "../reducers"

/**
 * Payload
 */
export type PagePayload = {
  id: number
}

/**
 * State
 */
export type PageState = {
  id: number
  pageTitle: string
  pageDescription: string
  title: string
  metaDescription: string
}

const initialState: PageState = {
  id: Page.TOP.id,
  pageTitle: Page.TOP.pageTitle,
  pageDescription: Page.TOP.pageDescription,
  title: Page.TOP.title,
  metaDescription: Page.TOP.metaDescription,
}

/**
 * Slice
 * @see https://redux-toolkit.js.org/api/createslice
 */
const slice = createSlice({
  name: FeatureKey.PAGE,
  initialState,
  reducers: {
    changePage: (
      state: PageState,
      action: PayloadAction<PagePayload>
    ): PageState => {
      const { id } = action.payload
      const selectedPage: Page = Page.of(id)
      return {
        ...state,
        id: selectedPage.id,
        pageTitle: selectedPage.pageTitle,
        pageDescription: selectedPage.pageDescription,
        title: selectedPage.title,
        metaDescription: selectedPage.metaDescription,
      }
    },
  },
})

/**
 * Reducer
 */
export const pageReducer = slice.reducer

/**
 * Action
 */
export const { changePage } = slice.actions

/**
 * Selector
 * @param state PageStateType
 */
export const pageSelector = (state: RootState): PageState => state.page
