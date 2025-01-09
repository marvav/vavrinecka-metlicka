import {AffiliateData} from "./AffiliateData.tsx";
import {LinkData} from "./LinkData.tsx";

export interface EventData {
    title: string
    url_fragment: string
    date: Date
    time: string | undefined
    place: LinkData
    content: string
    photos_url: string | undefined
    ticket_link : string | undefined
    image: string | undefined
    tracks: Map<number, string> | undefined
    eventLinks: LinkData[]
    affiliates: AffiliateData[]
}