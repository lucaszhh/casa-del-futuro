import React from "react"
import Image from "next/image"
import Link from "next/link"
import logoCdf from "./coverNotion-cdf.png"
import { MyHeader,Nav,IconSocialMedia,LinkIcon } from "./header.styled"
import { faHome, faChalkboardUser, faCalendarAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { NavSocialMedia } from "./navSocialMedia"
import { NavBar } from "./navBar"

const Header = () => {

	return (
		<MyHeader>
			<Link href="/">
				<Image src={logoCdf} width="250" height="100" alt="casa-del-futuro"/>
			</Link>
			<NavBar/>
			<NavSocialMedia/>
		</MyHeader>
	)
} 

export default Header


