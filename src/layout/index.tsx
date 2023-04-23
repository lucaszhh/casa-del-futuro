import ResponsiveAppBar from "@/components/headerMui"
import React from "react"

interface Props {
    children: React.ReactNode
}

const Layout= ({children}: Props) => {
	return (
		<>
			<ResponsiveAppBar/>
			{children}
		</>
	)
}

export default Layout