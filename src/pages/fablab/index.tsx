import AboutUs from "@/components/aboutUs"
import React from "react"
import { fablab } from "../../../data"

const Fablab = () => {
	return (
		<>
			<AboutUs data={fablab}/>
		</>
	)
}

export default Fablab