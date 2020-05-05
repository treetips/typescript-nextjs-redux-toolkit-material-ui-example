import { createStyles, makeStyles, Theme } from "@material-ui/core"
import React from "react"
import { AppContext } from "../../components/AppContext"
import { SpacingPaper } from "../../components/atoms"
import { TodoList } from "../../components/molecules"
import { HeaderArticleContainer } from "../../components/organisms"
import { Layout } from "../../components/templates"
import { Page } from "../../constants"
import { changePage } from "../../store/page"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

type Props = {}

function Todo(props: Props) {
  const {} = props
  const classes = useStyles(props)

  return (
    <Layout className={classes.root}>
      <HeaderArticleContainer>
        <SpacingPaper>
          <TodoList />
        </SpacingPaper>
      </HeaderArticleContainer>
    </Layout>
  )
}

/**
 * @see https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
 */
Todo.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { store } = ctx
  store.dispatch(
    changePage({
      id: Page.TODO.id,
    })
  )
  return {}
}

export default Todo
