import { NextPage, GetServerSideProps } from 'next'
import { Banner } from "@/components/banner"
import Quote from "@/components/quote"
import Head from "next/head"
import React from "react"
import CardLayout from "@/components/cardLayout"
import { ICourse, IEvent } from '../../types'
import AboutUs from '@/components/aboutUs'
import { cdf } from '../../data'

type Props = {
	courses: ICourse[],
	events: IEvent[]
}

const Home: NextPage<Props> =({courses, events} : Props) => {
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
			<AboutUs data={cdf}/>
		</>
	)
}

const URL_WEB = process.env.URL_WEB

export const getServerSideProps: GetServerSideProps = async () => {
	const resCourse = await fetch(URL_WEB + "api/courses")
	const resEvent = await fetch(URL_WEB + "api/events")
	const courses = await resCourse.json()
	const events = await resEvent.json()
	return {
		props: { courses, events }
	}
}

export default Home