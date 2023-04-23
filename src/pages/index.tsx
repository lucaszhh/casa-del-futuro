import { Banner } from "@/components/banner"
import Quote from "@/components/quote"
import Head from "next/head"
import React, { useContext } from "react"
import Events from "./eventos"
import CardLayout from "@/components/cardLayout"
import { cdfContext } from "@/context"
import ResponsiveAppBar from "@/components/headerMui"

export default function Home() {
	const { courses, events } = useContext(cdfContext)
	return (
		<>
			<Head>
				<title>Casa del futuro</title>
			</Head>
			<Banner/>
			{/* <Video/> */}
			<CardLayout random isEvent={false} data={courses}/>
			<Quote/>
			<CardLayout random isEvent data={events}/>
		</>
	)
}