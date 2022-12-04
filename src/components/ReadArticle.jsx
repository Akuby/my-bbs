import '../css/Common.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ReadArticle(props) {
  const [articleContent, setArticleContent] = useState([]);
  const params = useParams();
  const articleId = params.articleId;
  
  useEffect(() => {
    getArticleContents()
  }, [articleId])

  const getArticleContents = async() => {
    const result = await axios.get(`/article/:${articleId}`);
    setArticleContent(result.data)
  }

  console.log(articleContent)

  return(
    <div id='article-content'>
      <h1>{articleContent.name}</h1>
      <p>{articleContent.contents}</p>
    </div>
  )
}
export default ReadArticle;