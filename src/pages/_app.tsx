import "../globals.css"
import React from "react"
import type { AppProps } from "next/app"
import Layout from "../layout"
import Context from "@/context"

function App({ Component, pageProps }: AppProps) {
	return (
		<Context>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Context>
	)
}

export default App