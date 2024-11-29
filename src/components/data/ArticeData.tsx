export interface ArticleData {
    title: string
    date: string
    time: string | undefined
    place: string
    content: string
    photos_url: string | undefined
    purchasable_tickets: boolean
    image: string | undefined
    tracks: Map<number, string>
}