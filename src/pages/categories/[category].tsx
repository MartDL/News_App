import { GetStaticPaths, GetStaticProps } from "next";
import { NewsArticle, NewsResponse } from "../../../models/NewsArticles";
import NewsArticlesGrid from "../../../components/NewsArticlesGrid";

interface CategoryNewsPageProps {
    newsArticles: NewsArticle[],
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categorySlugs = [ 'business',
        'entertainment', 'environment', 'food', 'health', 'politics', 'science', 'sports', 'technology', 'top', 'tourism', 'world'
    ]

    const paths = categorySlugs.map(item => ({ params: {category: item}}))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({params}) => {
    const category = params?.category?.toString()
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API_KEY_B}&category=${category}&language=en`)
    
    const newsResponse: NewsResponse = await response.json()
    return {
      props: {newsArticles: newsResponse.results}
    }
}

const CategoryNewsPage = ({ newsArticles }: CategoryNewsPageProps) => {
    return ( 
    <>
        <main>
            <NewsArticlesGrid articles={newsArticles}/>
        </main>
    </> );
}
 
export default CategoryNewsPage;