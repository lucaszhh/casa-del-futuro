import "../globals.css"
import React from "react"
import type { AppProps } from "next/app"
import Layout from "../layout"
import Context from "@/context"
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Context>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Context>
		</ThemeProvider>
	)
}

export default App