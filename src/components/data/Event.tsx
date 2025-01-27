import {AffiliateData} from "./AffiliateData.tsx";
import {LinkData} from "./LinkData.tsx";
import {Paragraph} from "./Paragraph.tsx";

export interface Event {
    title: string
    url_fragment: string
    date: Date
    place: LinkData
    description: Paragraph[]
    banner: string | undefined
    tracks: Map<number, string> | undefined
    links: LinkData[]
    pictures: LinkData[]
    eventLinks: LinkData[]
    affiliates: AffiliateData[]
}