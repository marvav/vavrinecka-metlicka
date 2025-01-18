import {AffiliateData} from "./AffiliateData.tsx";
import {LinkData} from "./LinkData.tsx";

export interface EventData {
    title: string
    url_fragment: string
    date: Date
    place: LinkData
    content: string[]
    banner: string | undefined
    tracks: Map<number, string> | undefined
    links: LinkData[]
    pictures: LinkData[]
    eventLinks: LinkData[]
    affiliates: AffiliateData[]
}