export interface ArticleData {
    title: string
    date: string
    time: string | undefined
    place: string
    place_link: string | undefined
    content: string
    photos_url: string | undefined
    ticket_link : string | undefined
    image: string | undefined
    tracks: Map<number, string> | undefined
}