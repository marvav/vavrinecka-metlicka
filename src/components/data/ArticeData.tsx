export interface ArticleData {
    title: string
    date: string
    time: string | undefined
    place: string
    placeLink: string | undefined
    content: string
    photos_url: string | undefined
    purchasable_tickets: boolean
    image: {} | undefined
    tracks: Map<number, string> | undefined
}