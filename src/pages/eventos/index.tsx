import React, { useContext } from "react"
import { cdfContext } from "@/context"
import CardLayout from "@/components/cardLayout"

const Events = () => {
	const { events } = useContext(cdfContext)
	return <CardLayout isEvent data={events}/>
}

export default Events