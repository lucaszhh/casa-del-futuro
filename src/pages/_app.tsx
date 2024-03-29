import "../globals.css"
import React from "react"
import type { AppProps } from "next/app"
import Layout from "../layout"
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../../material-theme'
import Head from "next/head"

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Casa del futuro</title>
			</Head>
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	)
}

export default App