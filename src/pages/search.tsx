import { FormEvent, useState } from "react";
import { NewsArticle } from "../../models/NewsArticles";
import { Button, Form, Spinner } from "react-bootstrap";
import NewsArticlesGrid from "../../components/NewsArticlesGrid";

const SearchNewsPage = () => {
    const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null)
    const [searchResultsLoading, setSearchResultsLoading] = useState(false)
    const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const searchQuery = formData.get('searchQuery')?.toString().trim()

        if(searchQuery) {
            try {
                setSearchResults(null)
                setSearchResultsLoadingIsError(false)
                setSearchResultsLoading(true)
                const response = await fetch('/api/search-news?q=' + searchQuery)
                const articles: NewsArticle[] = await response.json()
                setSearchResults(articles)
            } catch(error) {
                console.log(error)
                setSearchResultsLoading(true)
            } finally {
                setSearchResultsLoading(false)
            }
        }
    }

    return ( 
        <main>
            <h1>Search News</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='search-input'>
                    <Form.Label>Search Query</Form.Label>
                    <Form.Control 
                        name='searchQuery'
                        placeholder='E.g politics, sports, ...'
                    />
                </Form.Group>
                <Button type='submit' className='mb-3' disabled={searchResultsLoading} >
                    Search
                </Button>
            </Form>
            <div className='d-flex flex-column align-items-center'>
                {searchResultsLoading && <Spinner animation='border' />}
                {searchResultsLoadingIsError && <p>Something went wrong - please try again</p>}
                {searchResults?.length === 0 && <p> No results found</p>}
                {searchResults && <NewsArticlesGrid articles={searchResults}/>}
            </div>
        </main>
     );
}
 
export default SearchNewsPage;