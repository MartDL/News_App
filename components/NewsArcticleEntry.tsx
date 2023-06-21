import { Card } from "react-bootstrap";
import { NewsArticle } from "../models/NewsArticles";
import Image from "next/image";

interface NewsArticleEntryProps {
    article: NewsArticle
}

const NewsArticleEntry = ({article : {title, description, content, link, image_url, pubDate}}: NewsArticleEntryProps) => {
    
    const validImageUrl = (image_url?.startsWith('http://') || image_url?.startsWith('https://')) ? image_url : undefined
    console.log('Image', image_url)
    return ( 
        <a href={link}>
        <Card className='h-100'>
            <Card.Img 
                variant='top'
                src={validImageUrl}
            />
            {/* <Image src={validImageUrl || placeholderImage} width={500} height={200} alt=''/> */}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>

            </Card.Body>
        </Card>
        </a>
    );
}
 
export default NewsArticleEntry;