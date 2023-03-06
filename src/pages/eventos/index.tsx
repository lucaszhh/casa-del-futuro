import React from "react"
import { events } from "../../../data"
import Image from "next/image"
import Link from "next/link"

const Events = () => {

	return (
		<div>Eventos
			<ul>
				{
					events.map((event)=>{
						return(
							<li key={event.id}>
								<Link href={`/eventos/${event.id}`}>
									<Image src={event.image} width="100" height="40" alt={event.title}/>
									<h3>{event.title}</h3>
									<p>{event.description}</p>
								</Link>
							</li>
						)
					})
				}

			</ul>
		</div>
	)
}

export default Events