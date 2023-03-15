import { Banner } from "@/components/banner"
import { Video } from "@/components/video"
import Head from "next/head"
import React from "react"

export default function Home() {
	return (
		<>
			<Head>
				<title>Casa del futuro</title>
			</Head>
			<Banner/>
			<Video/>
		</>
	)
}
