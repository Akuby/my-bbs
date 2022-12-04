import '../../css/Common.css'
import ArticleList from '../ArticleList'
import SearchTab from '../SearchTab'
import {useState, useEffect} from 'react';
import axios from 'axios';

function Home(props) {
  
  useEffect(() => {
    dataLoading()
  }, [])
  
  const [articles, setArticles] = useState([]);


  const dataLoading = async() => {
    const result = await axios.get('/bbs');
    setArticles(result.data);
  }
  

  return(
    <div id="Home">
      <SearchTab />
      <button onClick={()=>{window.location.href='/w'}}>글 쓰기</button>
      <ArticleList articles={articles} />  
    </div>
  )
}
export default Home;