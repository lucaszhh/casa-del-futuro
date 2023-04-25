import React from "react"
import Image from "next/image"
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next"

import { IEvent } from "../../../types"


type Props = {
	event: IEvent
}

const Event : NextPage<Props> = ({event}: Props) => {
	
	return(
		event&&
		<div>
			<Image src={event.image} width="100" height="40" alt={event.title}/>
			<h3>{event.title}</h3>
			<p>{event.description}</p>
		</div>      
	)
}

export default Event

const URL_WEB = process.env.URL_WEB

export const getServerSideProps: GetServerSideProps = async (context : GetServerSidePropsContext) => {
	const id = parseInt(context.params?.id as string)
	const res = await fetch(URL_WEB + `api/events/${id}`)
	const event = await res.json()
	return {
		props: { event ,
		revalidate: 10,
		}
	}
}

