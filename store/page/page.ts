import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Page } from "../../constants"
import { InitialStateType } from "../states"

//---------------------------------------------------
// Payload
//---------------------------------------------------
export type PagePayloadType = {
  id: number
}

//---------------------------------------------------
// State
//---------------------------------------------------
export type PageStateType = {
  id: number
  pageTitle: string
  pageDescription: string
  title: string
  metaDescription: string
}

const initialState: PageStateType = {
  id: Page.TOP.id,
  pageTitle: Page.TOP.pageTitle,
  pageDescription: Page.TOP.pageDescription,
  title: Page.TOP.title,
  metaDescription: Page.TOP.metaDescription,
}

//---------------------------------------------------
// Slice
//---------------------------------------------------
const slice = createSlice({
  name: "page",
  initialState,
  reducers: {
    changePage: (
      state: PageStateType,
      action: PayloadAction<PagePayloadType>
    ): PageStateType => {
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

//---------------------------------------------------
// Reducer
//---------------------------------------------------
export const pageReducer = slice.reducer

//---------------------------------------------------
// Action
//---------------------------------------------------
export const { changePage } = slice.actions

//---------------------------------------------------
// Selector
//---------------------------------------------------
export const pageSelector = (state: InitialStateType): PageStateType =>
  state.page
