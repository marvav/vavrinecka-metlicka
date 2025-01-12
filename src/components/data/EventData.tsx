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
    banner: string | undefined
    tracks: Map<number, string> | undefined
    additionalPictures: LinkData[]
    eventLinks: LinkData[]
    affiliates: AffiliateData[]
}