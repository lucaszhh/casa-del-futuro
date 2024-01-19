import { StaticImageData } from "next/image"

export interface IEvent {
    id: string,
    title: string,
    description: string,
    duration: string,
    category: ICategory,
    date?: string,
}

export interface ICourse  {
    id: string,
    title: string,
    description: string,
    duration: string,
    category: ICategory
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

export interface ICategory{
    category: string,
    icon: string
}

export interface IAbotUs{
    title: string,
    description: string,
    image: StaticImageData | string,
}