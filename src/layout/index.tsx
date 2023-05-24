import Footer from "@/components/footer"
import ResponsiveAppBar from "@/components/header"
import React from "react"

interface Props {
    children: React.ReactNode
}

const Layout= ({children}: Props) => {
	return (
		<>
			<ResponsiveAppBar/>
			{children}
			<Footer></Footer>
		</>
	)
}

export default Layout