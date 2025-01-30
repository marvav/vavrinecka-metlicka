import {AffiliateData} from "./AffiliateData.tsx";
import {LinkData} from "./LinkData.tsx";
import {Paragraph} from "./Paragraph.tsx";
import {EventBase} from "./EventBase.tsx";

export interface Event extends EventBase{
    description: Paragraph[]
    tracks: LinkData[]
    links: LinkData[]
    pictures: LinkData[]
    eventLinks: LinkData[]
    affiliates: AffiliateData[]
}