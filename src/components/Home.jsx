import '../css/Common.css'
import ArticleList from './ArticleList'
import {useState, useEffect} from 'react';
import axios from 'axios';

function Home(props) {
  
  useEffect(() => {
    dataLoading()
  }, [])
  
  const [articles, setArticles] = useState([]);
  
  const dataLoading = async() => {
    const result = await axios.get('/bbs');
    console.log(result.data) // 서버에서 가져온 json 데이터 정상 출력
    setArticles(articles.concat(result.data));
    console.log(articles) // 빈 배열 출력
  }

  return(
    <div id="Home">
      <h1>Home</h1>
      <ArticleList articles={articles} />
    </div>
  )
}
export default Home;