import {PlaceData} from "./PlaceData.tsx";

export interface EventData {
    title: string
    date: Date
    time: string | undefined
    place: PlaceData
    content: string
    photos_url: string | undefined
    ticket_link : string | undefined
    image: string | undefined
    tracks: Map<number, string> | undefined
}