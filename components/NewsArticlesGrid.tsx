import { Col, Row } from "react-bootstrap";
import { NewsArticle } from "../models/NewsArticles";
import NewsArticleEntry from "./NewsArcticleEntry";

interface NewsArcticleGridProps {
    articles: NewsArticle[]
}

const NewsArticlesGrid = ({articles}: NewsArcticleGridProps) => {
    return ( 
        <Row xs={1} sm={2} xl={3} className="g-4">
            {articles.map(item => (
                <Col key={item.link}>
                    <NewsArticleEntry article={item}/>
                </Col>
            ))}
        </Row>
     );
}
 
export default NewsArticlesGrid;