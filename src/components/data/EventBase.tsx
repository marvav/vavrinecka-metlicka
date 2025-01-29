import {LinkData} from "./LinkData.tsx";

export interface EventBase {
    id: string,
    title: string
    date: Date
    place: LinkData
    banner: string | undefined
}