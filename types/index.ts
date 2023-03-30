export interface IEvent {
    id: string,
    title: string,
    description: string,
    image: string,
    duration: string
}

export interface ICourse  {
    id: string,
    title: string,
    description: string,
    image: string,
    duration: string
}

export interface IContext {
    events: IEvent[],
    courses: ICourse[]
}

export interface IQuote {
    id: string,
    quote: string,
    author: string
}