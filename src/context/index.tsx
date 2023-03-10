import { createContext } from "react"
import { IContext, ICourse, IEvent } from "../../types"
import { useEvents } from "@/hooks/useEvents"
import { useCourses } from "@/hooks/useCourses"


export const cdfContext = createContext<IContext>({
	events: [],
	courses: [] 
})

interface Props {
    children: React.ReactNode
}


const Context = ({children} : Props) => {

	const events = useEvents()
	const courses = useCourses()

	const value : IContext = {events,courses}

	return (
		<cdfContext.Provider value={value}>
			{children}
		</cdfContext.Provider>
	)
}

export default Context