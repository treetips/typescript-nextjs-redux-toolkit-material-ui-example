import createCache from "@emotion/cache"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import App, { AppInitialProps } from "next/app"
import Head from "next/head"
import React from "react"
import { MuiTheme } from "../components/MuiTheme"
import { wrapper } from "../store/configureStore"
import "../styles/main.css"

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_app.tsx
 */
class MyApp extends App<AppInitialProps> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    jssStyles?.parentNode?.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={MuiTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Head>
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default wrapper.withRedux(MyApp)

export const cache = createCache()
