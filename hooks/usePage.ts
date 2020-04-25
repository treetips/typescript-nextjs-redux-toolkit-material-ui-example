import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Page } from "../constants"
import { changePage, pageSelector } from "../store/page"

type PageOperators = {
  selectedPage: Page
  changePage: (id: number) => void
}

/**
 * Page custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const usePage = (): Readonly<PageOperators> => {
  const dispatch = useDispatch()
  const pageState = useSelector(pageSelector)
  const page: Page = Page.of(pageState.id)

  return {
    selectedPage: page,
    changePage: useCallback(
      (id: number) => {
        dispatch(
          changePage({
            id: id,
          })
        )
      },
      [dispatch]
    ),
  }
}
