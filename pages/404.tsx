import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React, { useEffect } from "react"
import { SpacingPaper } from "../components/atoms"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { usePage } from "../hooks"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

type Props = {}

/**
 * 404 Error page without getInitialProps(SSR)
 * @see https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-404-page
 * @see https://github.com/zeit/next.js/blob/master/errors/custom-error-no-custom-404.md
 */
function NotFoundError(props: Props) {
  const classes = useStyles(props)
  const { changePage } = usePage()

  useEffect(() => {
    changePage(Page.ERROR.id)
  }, [])

  return (
    <Layout className={classes.root}>
      <HeaderArticleContainer>
        <SpacingPaper>
          <Typography variant="h5">404 Page NotFound :(</Typography>
        </SpacingPaper>
      </HeaderArticleContainer>
    </Layout>
  )
}

export default NotFoundError
