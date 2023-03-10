export type IEvent = {
    id: string,
    title: string,
    description: string,
    image: string
}

export type ICourse = {
    id: string,
    title: string,
    description: string,
    image: string
}

export type IContext = {
    events: IEvent[],
    courses: ICourse[]
}