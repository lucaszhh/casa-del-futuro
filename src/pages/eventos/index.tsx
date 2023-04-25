import React, { useContext } from "react"
import CardLayout from "@/components/cardLayout"
import { GetServerSideProps, NextPage } from "next"
import { IEvent } from "../../../types"

type Props = {
	events: IEvent[]
}

const Events: NextPage<Props> = ({events}:Props) => {
	return <CardLayout isEvent data={events}/>
}

const URL_WEB = process.env.URL_WEB

export const getServerSideProps: GetServerSideProps = async () => {
	const resEvent = await fetch(URL_WEB + "api/events")

	const events = await resEvent.json()
	return {
		props: { events }
	}
}

export default Events