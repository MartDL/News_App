import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { NewsArticle, NewsResponse } from '../../models/NewsArticles'
import NewsArticlesGrid from '../../components/NewsArticlesGrid'

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[],
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
  const response = await fetch('https://newsdata.io/api/1/news?apikey='+ process.env.NEWS_API_KEY )
  const newsResponse: NewsResponse = await response.json()
  console.log('NEWS', newsResponse.results)
  return {
    props: {newsArticles: newsResponse.results}
  }
}


export default function BreakingNewsPage({newsArticles} : BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key='title'>Breaking News - NextJS News App</title>
      </Head>
      <main>
      <h1>Breaking News</h1>
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  )
}
