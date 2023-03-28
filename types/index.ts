export type IEvent = {
    id: string,
    title: string,
    description: string,
    image: string,
    duration: string
}

export type ICourse = {
    id: string,
    title: string,
    description: string,
    image: string,
    duration: string
}

export type IContext = {
    events: IEvent[],
    courses: ICourse[]
}