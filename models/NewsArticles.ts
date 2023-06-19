export interface NewsArticle {
    title: string,
    description: string,
    content: string,
    image_url?: string,
    pubDate: string,
    link: string
}

export interface NewsResponse {
    results: NewsArticle[]
}