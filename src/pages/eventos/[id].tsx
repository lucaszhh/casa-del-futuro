import React from "react"
import Image from "next/image"
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next"
import { IEvent } from "../../../types"
import { Box, Typography } from "@mui/material"
import Head from "next/head"

type Props = {
	event: IEvent
}

const Event : NextPage<Props> = ({event}: Props) => {
	return(
		
		event&&
		<>
		<Head>
			<title>Casa del futuro</title>
		</Head>
		<Box sx={{display: "flex", alignItems: "center", border: "solid #C4C4C4 1px",borderRadius:"20px", margin:"10%", padding: "10px" ,'@media screen and (max-width: 768px)': {flexDirection:"column"}}}>
			<Image src={event.category.icon} alt={event.category.category} width={350} height={280}  style={{width:"100%", maxWidth:"350px", height:"auto",margin:"auto"}}/>
			<Box>
				<Typography variant="subtitle2" color="text.secondary" gutterBottom>
						{event.category.category}
				</Typography>
				<Typography variant="h1">{event.title}</Typography>
				<Typography variant="subtitle1" color="text.secondary">
                    Duración: {event.duration}
                </Typography>
				<Typography variant="subtitle1" color="text.secondary">
                    Día: {event.date}
                </Typography>
				<Typography variant="subtitle1">{event.description}</Typography>
			</Box>
		</Box>
		</>
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

