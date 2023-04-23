import "../globals.css"
import React from "react"
import type { AppProps } from "next/app"
import Layout from "../layout"
import Context from "@/context"
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../material-theme'

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