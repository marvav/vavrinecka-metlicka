import {AffiliateData} from "./AffiliateData.tsx";
import {LinkData} from "./LinkData.tsx";

export interface EventData {
    title: string
    url_fragment: string
    date: Date
    place: LinkData
    content: string[]
    photos_url: string | undefined
    ticket_link : string | undefined
    banner: string | undefined
    tracks: Map<number, string> | undefined
    pictures: LinkData[]
    eventLinks: LinkData[]
    affiliates: AffiliateData[]
}