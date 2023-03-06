import Header from "../components/header"
import React, { FC } from "react"

interface Props {
    children: React.ReactNode
}

const Layout: FC<Props> = ({children}) => {
	return (
		<>
			<Header/>
			{children}
		</>
	)
}

export default Layout