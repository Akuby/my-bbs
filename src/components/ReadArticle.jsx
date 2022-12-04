import '../css/Common.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReadArticleContent from './ReadArticleContent';

function ReadArticle(props) {
  const [articleContent, setArticleContent] = useState([]);
  const params = useParams();
  const articleId = params.articleId;
  
  useEffect(() => {
    const getArticleContents = async() => {
      const result = await axios.get(`/article/:${articleId}`);
      setArticleContent(result.data)
    }
    getArticleContents()
  }, [articleId])

  const result = articleContent.map(
    (data, idx) => (<ReadArticleContent key={idx} articleContent={data} />)
  )
  const goBack = () => {window.history.back()}
  
  if (articleContent !== []) {
    return (
      <div id='read'>
      <button onClick={()=>{goBack()}}>뒤로가기</button>
      {result}
      </div>
    )
  } else {
    return (
      <div id='read-fail'>
        <p>데이터를 불러오지 못했습니다.<br />새로고침을 눌러주세요</p>
      </div>
    )
  }
}
export default ReadArticle;