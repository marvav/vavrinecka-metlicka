import {AffiliateData} from "./AffiliateData.tsx";
import {LinkData} from "./LinkData.tsx";
import {Paragraph} from "./Paragraph.tsx";
import {EventBase} from "./EventBase.tsx";

export interface Event extends EventBase{
    description: Paragraph[]
    tracks: Map<number, string> | undefined
    links: LinkData[]
    pictures: LinkData[]
    eventLinks: LinkData[]
    affiliates: AffiliateData[]
}